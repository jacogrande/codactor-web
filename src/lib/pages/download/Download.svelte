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
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">Welcome Aboard</h1>
		<p class="text-xl font-sans-semi">Are you ready to supercharge your coding workflow?</p>

		<button
			on:click={download}
			class="py-4 px-8 rounded-full font-sans-bold text-background text-xl my-24 z-10"
			>Download Codactor</button
		>
		<h2 class="text-xl mb-4 font-sans-semi">Download Instructions:</h2>
		<ul class="text-text font-sans text-left z-10">
			<li>
				Download the Latest <a
					href="https://www.java.com/en/download/manual.jsp"
					class="text-primary">Java Runtime Environment</a
				> (if not already installed)
			</li>
			<li>Download Codactor</li>
			<li>Right Click the Downloaded File and Click "Open"</li>
			<li>Login and Enter Your GPT API Key</li>
			<li>Start Creating</li>
		</ul>
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
	button {
		background: linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
	}
	li {
		padding-left: 1rem;
		border-left: 2px solid #91eed8;
		margin: 16px 0px;
	}
</style>
