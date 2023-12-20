<script>
</script>

<svelte:head>
	<title>Coming Soon | Codactor</title>
	<meta
		name="description"
		content="Coming soon to codactor: Turn your system designs into working systems"
	/>
</svelte:head>

<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] laptop:w-[800px] leading-[4rem] pb-4">
			Visual Code Generation
		</h1>
		<p class="text-xl font-sans-semi">
			Introducing Codactor’s upcoming feature—turning system diagrams into functional code,
			specializing in the use of LLMs.
		</p>

		<div class="py-24 w-full flex items-center justify-center">
			<img
				src="/images/new/diagram.png"
				alt="Prototype of Codactor's upcoming diagram feature"
				height="100%"
				class="z-10 demo laptop:w-[75%] w-[90%] rounded-lg shadow-xl"
			/>
		</div>

		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text font-sans leading-relaxed">
			Codactor’s trailblazing feature is set to redefine LLM project development. We aim to break
			the barrier between abstract system diagrams and dynamic, LLM-optimized codebases. Codactor’s
			forthcoming functionality is not just about bridging the gap between design and development;
			it’s about pioneering a path for projects centered around Large Language Models. This tool
			isn’t simply a translator from visual to virtual; it’s a specialized architect, crafting
			bespoke code that seamlessly integrates the complexities of LLM chains into your software
			ecosystem.
		</p>

		<div class="flex flex-col mt-24 items-center mb-48" />
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
</style>
