<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div class="flex h-[1000px] laptop:h-[600px] laptop:flex-row flex-col justify-center items-center">
	<div class="flex-1 flex  laptop:justify-end justify-center laptop:mr-16">
		<div class="laptop:w-[500px] w-full">
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
	<div class="flex-1 flex mt-8 laptop:mt-0">
		<div class="flex flex-col items-center">
			<div class="p-8 card-container">
				<img src="/images/inquire_demo.webp" width={600} height={490} alt="test" />
			</div>
			<p class="italic font-sans text-text mt-4">"What is the salt work factor?"</p>
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
