<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
</script>

<div
	class="flex tablet:h-[600px] tablet:flex-row flex-col justify-center items-center w-full tablet:w-4/5"
>
	<div class="flex-1 flex  tablet:justify-end justify-center tablet:mr-16">
		<div class="w-full tablet:w-[500px]">
			<GradientHeading color2="#67f5ba" color1="#67f060">Translate</GradientHeading>
			<p class="font-sans text-left text-text mt-2">
				Tired of manually translating your code? Our powerful AI assistant has got you covered.
				Simply input your code, select the target language, and let Codactor do the rest. With
				support for a wide range of programming languages, you can be confident that Codactor's
				"Translate" feature will help you work seamlessly across different programming environments.
				Don't let language barriers hold you back - try Codactor today and experience the power of
				AI-assisted code translation.
			</p>
		</div>
	</div>
	<div class="flex-1 flex flex-col mt-8 tablet:mt-0">
		<div class="flex flex-col">
			<div class="p-2 card-container items-center justify-center flex flex-col">
				<img src="/images/translate1.png" width={340} height={313} alt="test" />
				<img src="/images/translate2.png" width={340} height={268} alt="test" />
			</div>
		</div>
		<p class="italic font-sans text-text mt-4">"Translate this rust code to javascript"</p>
	</div>
</div>

<style>
	.card-container {
		background: linear-gradient(to bottom right, #67f5ba 0%, #67f060 100%);
		border-radius: 1rem;
		box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}
</style>
