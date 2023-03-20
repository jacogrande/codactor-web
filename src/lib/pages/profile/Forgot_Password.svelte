<script lang="ts">
	import { auth } from '$lib/config/firebase';
	import { user } from '$lib/config/userStore';
	import { sendPasswordResetEmail } from '@firebase/auth';

	let success = false;
	let loading = false;
	let error: string | null = null;
	let email: string = '';

	const submit = async () => {
		loading = true;
		try {
			// Use the firebase auth API to send a password reset email
			await sendPasswordResetEmail(auth, email, {
				url: 'http://www.codactor.com/login'
			});
			success = true;
			user.removeName();
		} catch (err) {
			console.log(err);
			error = (err as Error).message;
		} finally {
			loading = false;
		}
	};
</script>

<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">
			Forgot Your Password?
		</h1>
		<p class="text-xl font-sans-semi">No worries. Fill out this form to reset it.</p>

		<form on:submit={(e) => e.preventDefault()} class="w-full flex justify-center z-10">
			<div
				class="tablet:w-[600px] w-full rounded-xl py-12 px-2 tablet:px-24 flex flex-col items-start font-sans mt-8"
			>
				{#if success}
					<div class="w-full py-2 px-4 rounded-lg bg-darkBackground mb-8">
						<p class="font-sans text-primary">Password Reset Email Successfully Sent</p>
					</div>
				{/if}
				<label for="email" class="text-text mb-1">Email</label>
				<input
					type="text"
					name="email"
					class="w-full"
					placeholder="jane@doe.com"
					bind:value={email}
				/>
				<button
					on:click={submit}
					disabled={loading || success}
					class={`mt-8 py-2 px-4 rounded-full bg-primary ${
						loading || success ? 'opacity-50' : ''
					} text-background font-sans-semi`}
				>
					{loading ? 'Loading...' : success ? 'Success' : 'Send Reset Email'}
				</button>
				{#if error}
					<div class="w-full rounded-lg bg-darkBackground py-2 px-4 mt-8">
						<p class="font-sans text-error">{error}</p>
					</div>
				{/if}
			</div>
		</form>
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

	input {
		background: none;
		outline: none;
		padding: 8px 8px;
		border-radius: 8px;
		background: #394456;
	}

	input:focus {
		border: none;
		outline: 1px solid #91eed8;
	}
</style>
