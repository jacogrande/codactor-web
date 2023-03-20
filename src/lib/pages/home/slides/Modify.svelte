<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div
	class="flex h-[1000px] laptop:h-[600px] laptop:flex-row flex-col justify-center items-center w-full laptop:w-4/5"
>
	<div class="flex-1 flex  laptop:justify-end justify-center laptop:mr-16">
		<div class="w-full laptop:w-[500px]">
			<GradientHeading color1="#ff553b" color2="#ff9245">Modify</GradientHeading>
			<p class="font-sans text-left text-text mt-2">
				Say goodbye to the headache of sifting through lines of code to make small tweaks. With our
				AI-powered code editor, you can easily modify your code with just a few clicks. Need to
				change a variable name or update a function? No problem. Simply input your desired
				modifications and let Codactor do the rest. Our advanced AI algorithms will analyze your
				code, identify the areas that need modification, and suggest the best solutions for you.
				With Codactor, making changes to your code has never been easier. So sit back, relax, and
				let our AI assistant handle the heavy lifting.
			</p>
		</div>
	</div>
	<div class="flex-1 flex flex-col mt-8 laptop:mt-0">
		<div class="flex flex-col">
			<div class="p-2 card-container items-center justify-center flex flex-col">
				<img src="/images/modify1.webp" width={380} height={295} alt="test" />
				<img src="/images/modify2.webp" width={380} height={295} alt="test" />
			</div>
			<p class="italic font-sans text-text mt-4">
				"Optimize this code to use a list of winning combinations"
			</p>
		</div>
	</div>
</div>

<style>
	.card-container {
		background: linear-gradient(to bottom right, #ff9245 0%, #ff553b 100%);
		border-radius: 1rem;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}
</style>
