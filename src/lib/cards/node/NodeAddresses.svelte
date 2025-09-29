<script lang="ts">
	import CardListEntry from '../CardListEntry.svelte';
	import type { Node } from '$lib/common/types';
	import { getTranslation } from '$lib/common/locales';
	import { App } from '$lib/States.svelte';

	type NodeAddressesProps = {
		node: Node,
	}

	let { node }: NodeAddressesProps = $props()
</script>

<CardListEntry title={getTranslation(App.language.value, 'common.ipAddresses') + ':'} top>
	<div class="grid grid-cols-1">
		{#each node.ipAddresses as ipAddress}
			<div>{ipAddress}</div>
		{/each}
	</div>
</CardListEntry>
