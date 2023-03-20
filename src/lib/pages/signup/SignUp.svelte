<script lang="ts">
	import { setUserName } from '$lib/config/session_manager';
	import { user } from '$lib/config/userStore';

	let firstName: string = '';
	let lastName: string = '';
	let email: string = '';
	let password: string = '';

	let loading = false;
	let error: null | string = null;
	let success = false;
	const submit = async () => {
		loading = true;
		error = null;
		try {
			if (password.length < 6) {
				throw new Error('Password must be at least 6 characters long');
			}
			if (!email || !email.includes('@')) {
				throw new Error('Please enter a valid email address');
			}
			if (!firstName) throw new Error('Please enter your first name');
			if (!lastName) throw new Error('Please enter your last name');
			const res = await fetch('/api/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password
				})
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			success = true;
			user.setName(firstName);
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
			Sign up for Codactor
		</h1>
		<p class="text-xl font-sans-semi">Welcome to a world of automated coding – all for free.</p>

		<form on:submit={(e) => e.preventDefault()} class="w-full flex justify-center z-10">
			<div
				class="tablet:w-[600px] w-full rounded-xl py-12 px-2 tablet:px-24 mt-16 flex flex-col items-start font-sans"
			>
				{#if success}
					<div class="w-full py-2 px-4 rounded-lg bg-darkBackground mb-8">
						<p class="font-sans">
							<a href="/download" class="text-primary">Download Codactor Now</a>
						</p>
					</div>
				{/if}
				<div class="flex flex-col tablet:flex-row tablet:space-x-4 w-full">
					<div class="flex flex-col items-start flex-1">
						<label for="firstName" class="text-text mb-1">First Name</label>
						<input
							type="text"
							name="firstName"
							class="w-full"
							placeholder="Jane"
							bind:value={firstName}
						/>
					</div>
					<div class="flex mt-8 tablet:mt-0 flex-col items-start flex-1">
						<label for="lastName" class="text-text mb-1">Last Name</label>
						<input
							type="text"
							name="lastName"
							class="w-full"
							placeholder="Doe"
							bind:value={lastName}
						/>
					</div>
				</div>
				<label for="email" class="text-text mb-1 mt-8">Email</label>
				<input
					type="text"
					name="email"
					class="w-full"
					placeholder="jane@doe.com"
					bind:value={email}
				/>
				<label for="password" class="text-text mb-1 mt-8">Password</label>
				<input type="password" name="password" class="w-full" bind:value={password} />
				<div class="w-full flex justify-between items-center mt-8">
					<button
						on:click={submit}
						disabled={loading || success}
						class={` py-2 px-4 rounded-full bg-primary ${
							loading || success ? 'opacity-50' : ''
						} text-background font-sans-semi`}
					>
						{loading ? 'Loading...' : success ? 'Success' : 'Sign Up'}
					</button>
					<p class="text-text">
						Have an account? <a href="/login" class="text-primary">Log in</a>
					</p>
				</div>
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
