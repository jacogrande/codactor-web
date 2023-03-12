<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Create from './slides/Create.svelte';
	import Fix from './slides/Fix.svelte';
	import Inquire from './slides/Inquire.svelte';
	import Modify from './slides/Modify.svelte';
	import Translate from './slides/Translate.svelte';

	export const isInView = (element: HTMLElement | null) => {
		if (!element) return false;
		const rect = element.getBoundingClientRect();

		// Only completely visible returns true
		return rect.top < window.innerHeight && rect.bottom >= 0;
	};

	const slides: string[] = ['Create', 'Modify', 'Fix', 'Translate', 'Inquire'];
	let currentSlide = 'Create';

	// Start slideshow when scrolled to
	let container: HTMLDivElement;
	const slideLength = 6000;
	let slideshowPlaying = false;
	let interactedWith = false;
	let timeout: NodeJS.Timeout;
	let step = 0;

	$: if (slideshowPlaying) {
		clearTimeout(timeout);
		timeout = setTimeout(() => (step = (step + 1) % 5), slideLength);
	}

	$: currentSlide = slides[step];

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (!interactedWith) slideshowPlaying = isInView(container);
		});
	});
</script>

<div class="mt-12 w-full flex justify-center" bind:this={container}>
	{#if currentSlide === 'Create'}
		<Create />
	{:else if currentSlide === 'Modify'}
		<Modify />
	{:else if currentSlide === 'Fix'}
		<Fix />
	{:else if currentSlide === 'Translate'}
		<Translate />
	{:else if currentSlide === 'Inquire'}
		<Inquire />
	{/if}
</div>
<div class="flex space-x-4 justify-center mt-24">
	{#each slides as slide, i}
		<button
			on:click={() => {
				currentSlide = slide;
				interactedWith = true;
				slideshowPlaying = false;
			}}
			aria-label={`Switch to the ${slide} slide.`}
			class={slides.indexOf(currentSlide) >= i ? 'bg-primary' : 'bg-white'}
		/>
	{/each}
</div>

<style>
	button {
		width: 12px;
		height: 12px;
		border-radius: 100%;
	}
</style>
