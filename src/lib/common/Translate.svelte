<script lang="ts">
	import { getTranslation, type Language } from './locales';
	import { App } from '../States.svelte';

	let { key, fallback } = $props<{ key: string; fallback?: string }>();

	let currentLanguage = $state(App.language.value);

	if (typeof window !== 'undefined') {
		window.addEventListener('languageChanged', (event: Event) => {
			const customEvent = event as CustomEvent<Language>;
			currentLanguage = customEvent.detail;
		});
	}

	$effect(() => {
		currentLanguage = App.language.value;
	});

	function getTranslatedText(): string {
		const translation = getTranslation(currentLanguage);
		const keys = key.split('.');
		let value: any = translation;
		
		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k];
			} else {
				return fallback || key;
			}
		}
		
		return typeof value === 'string' ? value : fallback || key;
	}
</script>

{getTranslatedText()}