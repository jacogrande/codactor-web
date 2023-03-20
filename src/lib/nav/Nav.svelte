<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
	import { onDestroy, onMount } from 'svelte';
	import { user } from '$lib/config/userStore';

	let showDropdown = false;
	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};

	let loggedIn = false;

	const unsubscribe = user.subscribe(($user) => {
		loggedIn = Boolean($user);
	});

	// Unsubscribe when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});
</script>

<header>
	<nav class="w-full bg-background laptop:px-16 px-4 h-16 items-end justify-between flex">
		<a href="/"><h2 class="text-white text-3xl font-sans-bold">codactor</h2></a>
		<div class="space-x-8 text font-sans-semi text-white items-center hidden tablet:flex">
			<!-- <a href="/">Login</a> -->
			<a href="/">About</a>
			<a href="/demos">Demos</a>
			<a href="/roadmap">Roadmap</a>
			{#if loggedIn}
				<a href="/download">Download</a>
				<a href="/profile" aria-label="Account">
					<Fa icon={faUserCircle} class="w-6 h-6" style="font-size: 24px" />
				</a>
			{:else}
				<a href="/signup">Sign Up</a>
			{/if}
		</div>
		<button
			class="text-white text-lg active:text-blue flex tablet:hidden"
			on:click={toggleDropdown}
		>
			<svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
				{#if !showDropdown}
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				{:else}
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				{/if}
			</svg>
		</button>
	</nav>
	<div
		class={`tablet:hidden ${
			!showDropdown ? 'hidden' : 'flex'
		} flex-col items-end pt-2 px-4 bg-background`}
		aria-label="Open Navigation Menu"
		aria-haspopup="menu"
	>
		<ul class="space-y-2 text-right text-white font-sans-semi">
			<li><a href="/">About</a></li>
			<li><a href="/demos">Demos</a></li>
			<li><a href="/roadmap">Roadmap</a></li>
			{#if loggedIn}
				<li><a href="/download">Download</a></li>
				<li class="flex justify-end">
					<a href="/profile" aria-label="Account">
						<Fa icon={faUserCircle} class="w-6 h-6" style="font-size: 24px" />
					</a>
				</li>
			{:else}
				<li><a href="/signup">Sign Up</a></li>
			{/if}
		</ul>
	</div>
</header>

<style>
	a {
		transition: all 0.1s;
	}

	a:hover {
		color: #91eed8;
	}
</style>
