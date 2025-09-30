<script lang="ts">
	import { InputChip, getToastStore, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	import CardListEntry from '../CardListEntry.svelte';

	import type { Node } from '$lib/common/types';
	import { setNodeTags } from '$lib/common/api';
	import { toastError } from '$lib/common/funcs';

	import RawMdiWarning from '~icons/mdi/warning-outline';

	import { App } from '$lib/States.svelte';
	import { getTranslation } from '$lib/common/locales';

	type NodeTagsProps = {
		node: Node,
	}

	let {
		node = $bindable(),
	}: NodeTagsProps = $props()

	const tagsForced = $derived(node.forcedTags.map((tag) => tag.replace('tag:', '')));
	const tagsValid = $derived(node.validTags.map((tag) => tag.replace('tag:', '')));
	const tagsInvalid = $derived(node.invalidTags.map((tag) => tag.replace('tag:', '')));

	let disabled = $state(false);
	let popupInvalidTagsShow = $state(false);

	const popupInfo: PopupSettings = {
		event: 'hover',
		target: 'popupInvalidTags',
		placement: 'top',
	};

	const ToastStore = getToastStore();

	async function saveTags() {
		disabled = true;
		try {
			const n = await setNodeTags(node, tagsForced);
			n.validTags = [...tagsValid];
			n.invalidTags = [...tagsInvalid];
			App.updateValue(App.nodes, n);
		} catch (e) {
			toastError(getTranslation(App.language.value, 'common.invalidTags', { error: String(e) }), ToastStore);
		} finally {
			disabled = false;
		}
	}

	let timerInfo: ReturnType<typeof setTimeout>;

	function handleMouseEnter() {
		timerInfo = setTimeout(() => {
			popupInvalidTagsShow = true;
		}, 333);
	}

	function handleMouseLeave() {
		popupInvalidTagsShow = false;
		clearTimeout(timerInfo);
	}
</script>

<div
	class="card p-3 rounded-md variant-filled-warning {popupInvalidTagsShow ? '' : 'invisible'}"
	data-popup="popupInvalidTags"
>
	<p>The following tags have been prevented by the current ACL:</p>
	<p class="space-y-2 mt-2 text-left">
		{#if popupInvalidTagsShow == true}
			{#each tagsInvalid as tag}
				<button type="button" class="chip variant-filled-error mr-2">{tag}</button>
			{/each}
		{/if}
	</p>
	<div class="arrow variant-filled-warning"></div>
</div>

<div class="space-y-4">
	<CardListEntry top title={getTranslation(App.language.value, 'common.tags') + ':'}>
		<InputChip
			name="tags-forced-node-{node.id}"
			{disabled}
			value={tagsForced}
			class="w-full"
			chips="variant-filled-success"
			on:add={saveTags}
			on:remove={saveTags}
		/>
	</CardListEntry>
	<CardListEntry top>
		{#snippet childTitle()}
		<span class="flex flex-row items-center">
			{getTranslation(App.language.value, 'common.advertisedTags') + ':'}
			{#if tagsInvalid.length > 0}
				<button
					class="btn ml-2 btn-icon w-6 h-6 [&>*]:pointer-events-none"
					use:popup={popupInfo}
					onmouseenter={handleMouseEnter}
					onmouseleave={handleMouseLeave}
				>
					<span class="text-warning-500">
						<RawMdiWarning />
					</span>
				</button>
			{/if}
		</span>
		{/snippet}
		<div class="space-x-2 space-y-1">
			{#each tagsValid as tag}
				<button type="button" class="chip variant-filled-success">{tag}</button>
			{/each}
		</div>
	</CardListEntry>
</div>
