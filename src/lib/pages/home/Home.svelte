<script>
	import GradientHeading from '$lib/components/GradientHeading.svelte';
	import ModeSlideshow from './ModeSlideshow.svelte';
</script>

<main class="bg-background">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<img src="/images/test.png" class="absolute width-[100vw] top-24 left-0" />
		<h1 class="text-6xl font-sans-extra w-[600px] leading-[4rem] pb-4">
			Your Personal AI Coding Assistant
		</h1>
		<p class="text-xl font-sans-semi mt-4">The First GPT Powered Code Editor</p>
	</section>
	<div class="h-[100vh] w-full" />
	<section
		class="w-full laptop:px-16 px-4 py-16 flex flex-col items-center justify-between text-white text-center pb-[200px]"
	>
		<h2 class="text-4xl font-sans-bold pb-4">Write AI Powered Code</h2>
		<p class="w-[60%] text-left text-text text mb-4 font-sans">
			Say goodbye to the hassle of writing code manually. With Codactor, you can write code faster
			and smarter than ever before. Our revolutionary code editor is fully integrated with the GPT
			API, enabling you to create AI-assisted code that is both accurate and efficient.
		</p>

		<h2 class="text-4xl font-sans-bold pb-4 pt-36">Multiple Modes</h2>
		<p class="w-[60%] text-left text-text text font-sans">
			Our code editor offers a range of modes, each designed to perform specific code actions that
			produce powerful results. Each mode offers a unique set of tools and features, giving you the
			freedom to choose the one that suits your specific coding needs. With Codactor, you'll have
			the power to write AI-powered code on your own terms.
		</p>
		<ModeSlideshow />

		<h2 class="text-4xl font-sans-bold pb-4 pt-36">Queue Multiple Edits</h2>
		<p class="w-[60%] text-left text-text text font-sans">
			Why waste time making one change at a time? With Codactor, you have the flexibility to edit
			selections and queue up multiple changes at once, making your coding process faster and more
			efficient. Our unique input box allows you to input multiple changes at once, including
			selections of code that you want to modify, fix, or translate. Codactor's AI-assisted code
			editor will analyze your selections and execute your edits in the order you specify, ensuring
			that your code is always accurate and error-free.
		</p>
	</section>
</main>

<style>
	h1 {
		/* text-gradient to bottom right from #33B1F8 to #91EED8 */
		background: -webkit-linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
