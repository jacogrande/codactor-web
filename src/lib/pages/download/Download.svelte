<script lang="ts">
	import { goto } from '$app/navigation';
	import { getUserName } from '$lib/config/session_manager';
	import { onMount } from 'svelte';

	const download = () => {
		var link = document.createElement('a');
		// If you don't know the name or want to use
		// the webserver default set name = ''
		link.setAttribute('download', 'codactor.jar');
		link.href = '/codactor.jar';
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	onMount(() => {
		if (!getUserName()) {
			goto('/signup');
		}
	});
</script>

<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center z-10"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">Welcome Aboard</h1>
		<p class="text-xl font-sans-semi">Are you ready to supercharge your coding workflow?</p>
		<a href="https://plugins.jetbrains.com/plugin/21640-codactor"
			class="py-4 px-8 rounded-full font-sans-bold text-background text-xl my-24 z-10"
			>Download Codactor</a>
	</section>
</main>

<style>
	h1 {
		/* text-gradient to bottom right from #33B1F8 to #91EED8 */
		background: -webkit-linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	a {
		background: linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
	}
	li {
		padding-left: 1rem;
		border-left: 2px solid #91eed8;
		margin: 16px 0px;
	}
</style>
