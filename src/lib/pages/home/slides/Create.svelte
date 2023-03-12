<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div class="flex h-[1000px] tablet:h-[600px] tablet:flex-row flex-col justify-center items-center">
	<div class="flex-1 flex  tablet:justify-end justify-center tablet:mr-16">
		<div class="tablet:w-[500px] w-full">
			<GradientHeading color2="#91eed8" color1="#33b1f8">Create</GradientHeading>
			<p class="font-sans text-left text-text mt-2">
				Whether you need to generate new code from scratch or create an entire application
				framework, our powerful "Create" feature will help you do it in a snap. Simply input your
				requirements, hit the button, and let Codactor work its magic. With advanced AI algorithms
				and natural language processing capabilities, our code editor can create high-quality code
				that is tailored to your specific needs. So sit back, relax, and let Codactor handle the
				hard work for you - your perfect code is just a click away.
			</p>
		</div>
	</div>
	<div class="flex-1 flex mt-8 tablet:mt-0">
		<div class="flex flex-col items-center">
			<div class="p-8 card-container">
				<img src="/images/create.png" width={600} height={490} alt="test" />
			</div>
			<p class="italic font-sans text-text mt-4">
				"Write a two player game of tic tac toe in python"
			</p>
		</div>
	</div>
</div>

<style>
	.card-container {
		background: linear-gradient(to bottom right, #91eed8 0%, #33b1f8 100%);
		border-radius: 1rem;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}
</style>
