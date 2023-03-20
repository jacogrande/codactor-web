<script>
	import DemoCard from './DemoCard.svelte';
</script>

<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">
			See Codactor in Action
		</h1>
		<p class="text-xl font-sans-semi">
			Read about some projects that showcase the power of AI assisted coding
		</p>
		<div class="flex flex-col mt-24 items-center mb-48">
			<DemoCard
				image="/images/rogue/rogue 1.webp"
				title="Building a GPT Powered Rogue-Like Game"
				description="We took Codactor's Multi-File Create feature for a spin and ended up with a fully featured, GPT powered, rogue-like game that showcases the speed, accuracy, and flexibility of developing with Codactor..."
				link="/demos/roguelike"
				date="03-17-2023"
			/>
		</div>
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
