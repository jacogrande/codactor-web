<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div class="flex h-[1000px] laptop:h-[600px] laptop:flex-row flex-col justify-center items-center">
	<div class="flex-1 flex  laptop:justify-end justify-center laptop:mr-16">
		<div class="laptop:w-[500px] w-full">
			<GradientHeading color1="#ff82ea" color2="#ff82ea">Fix</GradientHeading>
			<p class="font-sans text-left text-text mt-2">
				With Codactor's "Fix" mode, identifying and repairing errors in your code has never been
				easier. No more spending hours searching for that one missing semicolon. Simply input your
				code into Codactor and let our powerful AI algorithms do the rest. Our code editor will
				analyze your code, identify any errors, and suggest the best solutions to fix them.
			</p>
		</div>
	</div>
	<div class="flex-1 flex mt-8 laptop:mt-0">
		<div class="flex flex-col items-center">
			<div class="p-8 card-container">
				<img src="/images/fix.webp" width={600} height={490} alt="test" />
			</div>
			<p class="italic font-sans text-text mt-4">
				"I'm missing a semicolon, can you add it for me?"
			</p>
		</div>
	</div>
</div>

<style>
	.card-container {
		background: linear-gradient(to bottom right, #ff82ea 0%, #8932fa 100%);
		border-radius: 1rem;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}
</style>
