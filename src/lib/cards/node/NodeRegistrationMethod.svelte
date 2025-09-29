<script lang="ts">
	import CardListEntry from '../CardListEntry.svelte';
	import type { Node } from '$lib/common/types';
	import { getTranslation } from '$lib/common/locales';
	import { App } from '$lib/States.svelte';

	type NodeRegistrationMethodProps = {
		node: Node,
	}

	let { node }: NodeRegistrationMethodProps = $props()
	const nodeRegMethod = $derived.by(() => {
		switch (node.registerMethod) {
			case 'REGISTER_METHOD_AUTH_KEY':
				return getTranslation(App.language.value, 'nodes.preAuthKey');
			case 'REGISTER_METHOD_CLI':
				return getTranslation(App.language.value, 'nodes.cli');
			case 'REGISTER_METHOD_OIDC':
				return getTranslation(App.language.value, 'nodes.oidc');
			default:
				return getTranslation(App.language.value, 'nodes.unspecified')
		}
	});
</script>

<CardListEntry title={getTranslation(App.language.value, 'common.registerMethod') + ':'}>
	{nodeRegMethod}
</CardListEntry>
