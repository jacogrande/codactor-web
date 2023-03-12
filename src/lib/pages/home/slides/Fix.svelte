<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div class="flex h-[600px] justify-center items-center mt-0">
	<div class="flex-1 flex justify-end mr-16">
		<div class="w-[500px]">
			<GradientHeading color1="#ff82ea" color2="#ff82ea">Fix</GradientHeading>
			<p class="font-sans text-left text-text mt-2">
				With Codactor's "Fix" mode, identifying and repairing errors in your code has never been
				easier. No more spending hours searching for that one missing semicolon. Simply input your
				code into Codactor and let our powerful AI algorithms do the rest. Our code editor will
				analyze your code, identify any errors, and suggest the best solutions to fix them.
			</p>
		</div>
	</div>
	<div class="flex-1 flex">
		<div class="flex flex-col">
			<div class="p-8 card-container">
				<img src="/images/fix.png" width={600} height={490} alt="test" />
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
