<script lang="ts">
	let email: string = '';
	let password: string = '';
	const submit = () => {
		console.log('based');
	};
</script>

<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold w-[600px] leading-[4rem] pb-4">Sign up for Codactor</h1>
		<p class="text-xl font-sans-semi">Welcome to a world of automated coding – all for free.</p>

		<form on:submit={(e) => e.preventDefault()}>
			<div class="w-[600px] rounded-xl py-12 px-24 mt-16 flex flex-col items-start font-sans">
				<label for="email" class="text-text mb-1">Email</label>
				<input type="text" name="email" class="w-full" placeholder="jane@doe.com" />
				<label for="password" class="text-text mb-1 mt-8">Password</label>
				<input type="password" name="password" class="w-full" />
				<button
					on:click={submit}
					class="mt-8 py-2 px-4 rounded-full bg-primary text-background font-sans-semi"
					>Sign Up</button
				>
			</div>
		</form>
	</section>
</main>

<style>
	h1 {
		/* text-gradient to bottom right from #33B1F8 to #91EED8 */
		background: -webkit-linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
		-webkit-background-clip: text;
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
