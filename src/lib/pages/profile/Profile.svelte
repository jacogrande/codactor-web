<script>
	import { goto } from '$app/navigation';
	import { getUserName, removeUserName } from '$lib/config/session_manager';
	import { user } from '$lib/config/userStore';
	import { onMount } from 'svelte';

	const logout = () => {
		user.removeName();
		goto('/login');
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
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">Profile</h1>
		<p class="text-xl font-sans-semi">Welcome back, {getUserName()}</p>

		<div class="py-24 flex flex-col z-10">
			<button class="text-primary" on:click={logout}>Logout</button>
			<a href="/forgot-password" class="text-primary mt-8">Forgot Password</a>
		</div>
	</section>
</main>
