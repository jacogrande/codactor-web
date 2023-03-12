<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div class="flex h-[600px] justify-center items-center mt-0">
	<div class="flex-1 flex justify-end mr-16">
		<div class="w-[500px]">
			<GradientHeading color1="#ff4aa1" color2="#ff8c4a">Inquire</GradientHeading>
			<p class="font-sans text-left text-text mt-2">
				Whether you're stuck on a tricky coding problem or need clarification on a specific feature,
				getting answers to your coding questions has never been easier. Simply input your question,
				and let Codactor's advanced natural language processing capabilities analyze your code and
				provide instant answers. With intelligent suggestions and real-time feedback, you can be
				confident that you're getting accurate information that will help you make the most of your
				coding experience.
			</p>
		</div>
	</div>
	<div class="flex-1 flex">
		<div class="flex flex-col">
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
		background: linear-gradient(to bottom right, #ff8c4a 0%, #ff4aa1 100%);
		border-radius: 1rem;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}
</style>
