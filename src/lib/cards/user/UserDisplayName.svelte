<script lang="ts">
	import type { User } from '$lib/common/types';
	import CardListEntry from '../CardListEntry.svelte';
	import { getTranslation } from '$lib/common/locales';
	import { App } from '$lib/States.svelte';

	type ItemCreatedAtProps = {
		user: User,
	}

	let { user = $bindable() }: ItemCreatedAtProps = $props()

</script>

<CardListEntry title={getTranslation(App.language.value, 'common.displayName') + ':'}>
	{user.displayName}
</CardListEntry>