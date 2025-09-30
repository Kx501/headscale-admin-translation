<script lang="ts">
	import {
		copyToClipboard,
		isExpired,
		isValidCIDR,
		isValidTag,
		toastError,
		toastSuccess,
	} from '$lib/common/funcs';
	import DeployCheck from './DeployCheck.svelte';
	import Page from '$lib/page/Page.svelte';
	import PageHeader from '$lib/page/PageHeader.svelte';
	import type { Deployment, PreAuthKey } from '$lib/common/types';
	import { InputChip, getToastStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';

	import { App } from '$lib/States.svelte';
	import Translate from '$lib/common/Translate.svelte';
	import { getTranslation } from '$lib/common/locales';

	const ToastStore = getToastStore();

	function createFilter(user_id: string) {
		return (pak: PreAuthKey) => {
			return pak.user.id === user_id && !(pak.used && !pak.reusable) && !isExpired(pak.expiration);
		};
	}

	// $: deployment = defaultDeployment();
	let deployment: Deployment = $state(App.deploymentDefaults.value);

	let craftCommand = (d: Deployment) => {
		const cmd = ['tailscale up --login-server=' + (App.apiUrl.value || page.url.origin)];

		// general
		d.shieldsUp && cmd.push('--shields-up');
		d.generateQR && cmd.push('--qr');
		d.reset && cmd.push('--reset');
		d.operator && d.operatorValue != '' && cmd.push('--operator=' + d.operatorValue);
		d.forceReauth && cmd.push('--force-reauth');
		d.sshServer && cmd.push('--ssh');
		d.usePreAuthKey && d.preAuthKey !== '' && cmd.push('--auth-key=' + d.preAuthKey);
		d.unattended && cmd.push('--unattended')

		// advertise
		d.advertiseExitNode && cmd.push('--advertise-exit-node');
		d.advertiseExitNodeLocalAccess &&
			cmd.push('--exit-node-allow-lan-access');
		d.advertiseRoutes &&
			d.advertiseRoutesValues.length > 0 &&
			cmd.push('--advertise-routes=' + d.advertiseRoutesValues.join(','));
		d.advertiseTags &&
			d.advertiseTagsValues.length > 0 &&
			cmd.push(
				'--advertise-tags=' +
					d.advertiseTagsValues.map((s) => (s.startsWith('tag:') ? s : 'tag:' + s)).join(','),
			);

		// accept
		d.acceptDns ? cmd.push('--accept-dns') : cmd.push('--accept-dns=false');
		d.acceptRoutes && cmd.push('--accept-routes');
		d.acceptExitNode && d.acceptExitNodeValue && cmd.push('--exit-node=' + d.acceptExitNodeValue);
		return cmd.join(' ');
	};
</script>

<Page>
	<PageHeader title="navigation.deploy" buttonText={''} show={true}>
		{#snippet button()}
			<button
				class="bg-gray-400/30 dark:bg-gray-800/70 border border-dashed border-slate-200 border-1 pr-0 pl-4 rounded-lg justify-start text-left w-[90%]"
				onclick={() =>
					copyToClipboard(craftCommand(deployment), ToastStore, 'Copied Command to Clipboard!')}
				><code class="text-black dark:text-white text-sm block py-4 w-full"
					>{craftCommand(deployment)}</code
				>
			</button>
		{/snippet}
	</PageHeader>

	<div class="grid grid-cols-12">
		<p class="text-xl col-span-12"><Translate key="deploy.general" /></p>
		<DeployCheck
			bind:checked={deployment.shieldsUp}
			name={getTranslation(App.language.value, 'deploy.shieldsUp')}
			help={getTranslation(App.language.value, 'deploy.shieldsUpHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.generateQR}
			name={getTranslation(App.language.value, 'deploy.generateQR')}
			help={getTranslation(App.language.value, 'deploy.generateQRHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.reset}
			name={getTranslation(App.language.value, 'deploy.reset')}
			help={getTranslation(App.language.value, 'deploy.resetHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.operator}
			name={getTranslation(App.language.value, 'deploy.operator')}
			help={getTranslation(App.language.value, 'deploy.operatorHelp')}
		>
			<input type="text" class="input text-sm rounded-md" bind:value={deployment.operatorValue} />
		</DeployCheck>
		<DeployCheck
			bind:checked={deployment.forceReauth}
			name={getTranslation(App.language.value, 'deploy.forceReauth')}
			help={getTranslation(App.language.value, 'deploy.forceReauthHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.sshServer}
			name={getTranslation(App.language.value, 'deploy.sshServer')}
			help={getTranslation(App.language.value, 'deploy.sshServerHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.usePreAuthKey}
			name={getTranslation(App.language.value, 'deploy.preAuthKey')}
			help={getTranslation(App.language.value, 'deploy.preAuthKeyHelp')}
		>
			<div class="flex flex-col gap-2">
				<select bind:value={deployment.preAuthKeyUser} class="input rounded-md">
					<option value=""></option>
					{#each App.users.value as user}
						<option value={user.id}>{user.name}</option>
					{/each}
				</select>
				{#if deployment.preAuthKeyUser}
					<div transition:slide>
						<select bind:value={deployment.preAuthKey} class="input rounded-md">
							<option value=""
								>{App.preAuthKeys.value.filter(createFilter(deployment.preAuthKeyUser)).length} Valid Key(s)</option
							>
							{#each App.preAuthKeys.value.filter(createFilter(deployment.preAuthKeyUser)) as preAuthKey}
								<option value={preAuthKey.key}>{preAuthKey.key}</option>
							{/each}
						</select>
					</div>
				{/if}
			</div>
		</DeployCheck>
		<DeployCheck
			bind:checked={deployment.unattended}
			name={getTranslation(App.language.value, 'deploy.unattended')}
			help={getTranslation(App.language.value, 'deploy.unattendedHelp')}
		/>
		<DeployCheck 
			bind:checked={deployment.advertiseExitNodeLocalAccess}
			name={getTranslation(App.language.value, 'deploy.allowLanAccess')}
			help={getTranslation(App.language.value, 'deploy.allowLanAccessHelp')}
		/>

		<p class="text-xl col-span-12 py-4"><Translate key="deploy.advertise" /></p>
		<DeployCheck
			bind:checked={deployment.advertiseExitNode}
			name={getTranslation(App.language.value, 'deploy.advertiseExitNode')}
			help={getTranslation(App.language.value, 'deploy.advertiseExitNodeHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.advertiseTags}
			name={getTranslation(App.language.value, 'deploy.advertiseTags')}
			help={getTranslation(App.language.value, 'deploy.advertiseTagsHelp')}
		>
			<InputChip
				name="advertiseRoutesValues"
				bind:value={deployment.advertiseTagsValues}
				validation={isValidTag}
				on:invalid={() => {
				toastError(getTranslation(App.language.value, 'common.tagShouldBeLowercaseAlphanumeric'), ToastStore);
			}}
			/>
		</DeployCheck>
		<DeployCheck
			bind:checked={deployment.advertiseRoutes}
			name={getTranslation(App.language.value, 'deploy.advertiseRoutes')}
			help={getTranslation(App.language.value, 'deploy.advertiseRoutesHelp')}
		>
			<InputChip
				name="advertiseRoutesValues"
				bind:value={deployment.advertiseRoutesValues}
				validation={isValidCIDR}
				on:invalid={() => {
				toastError(getTranslation(App.language.value, 'common.invalidCIDRFormat'), ToastStore);
			}}
			/>
		</DeployCheck>

		<p class="text-xl col-span-12 py-4"><Translate key="deploy.accept" /></p>
		<DeployCheck
			bind:checked={deployment.acceptDns}
			name={getTranslation(App.language.value, 'deploy.acceptDns')}
			help={getTranslation(App.language.value, 'deploy.acceptDnsHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.acceptRoutes}
			name={getTranslation(App.language.value, 'deploy.acceptRoutes')}
			help={getTranslation(App.language.value, 'deploy.acceptRoutesHelp')}
		/>
		<DeployCheck
			bind:checked={deployment.acceptExitNode}
			name={getTranslation(App.language.value, 'deploy.acceptExitNode')}
			help={getTranslation(App.language.value, 'deploy.acceptExitNodeHelp')}
		>
			<label class="label">
				<select class="select" bind:value={deployment.acceptExitNodeValue}>
					{#each App.nodes.value as node}
						<option value={node.ipAddresses.filter((s) => /^\d+\.\d+\.\d+\.\d+$/.test(s))[0]}
							>{node.givenName} ({node.name})</option
						>
					{/each}
				</select>
			</label>
		</DeployCheck>
	</div>
		<button class="btn rounded-md variant-filled-secondary mt-4" onclick={() => {
			App.saveDeploymentDefaults(deployment)
			toastSuccess('Saved Deployment Defaults', ToastStore)
		}}>
			<Translate key="deploy.saveDefaults" />
		</button>
</Page>
