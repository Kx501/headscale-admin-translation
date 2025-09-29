<script lang="ts">
	import CardListEntry from '../CardListEntry.svelte';
	import type { Node } from '$lib/common/types';
	import { getTranslation } from '$lib/common/locales';
	import { App } from '$lib/States.svelte';

	type NodeHostnameProps = {
		node: Node,
	}
	let { node }: NodeHostnameProps = $props()

</script>

<CardListEntry title={getTranslation(App.language.value, 'common.hostname') + ':'}>
	{node.name}
</CardListEntry>
