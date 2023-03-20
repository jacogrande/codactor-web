<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">Feature Roadmap</h1>
		<p class="text-xl font-sans-semi">Our Plan for the Future of AI-Assisted Coding</p>
		<ul class="flex flex-col mt-24 mb-48">
			<li class="flex flex-col mb-8">
				<div class="orb" style="background: #88FFE3; top:0px" />
				<h2 class="text-xl font-sans-bold" style="margin-top:-2px">GPT-4 Sketch Tool</h2>
			</li>
			<li class="flex flex-col mt-8 mb-8">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">IntelliJ Plugin</h2>
			</li>
			<li class="flex flex-col mt-8 mb-8">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">Dark Theme</h2>
			</li>
			<li class="flex flex-col mt-8">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">Multi-File Fix and Modify</h2>
			</li>
		</ul>
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

	ul {
		list-style: none;
		border-left: 4px solid #11161d;
	}

	li {
		position: relative;
		padding-left: 64px;
		align-items: start;
	}

	.orb {
		position: absolute;
		top: 4px;
		left: -13px;
		width: 24px;
		height: 24px;
		border-radius: 100px;
		background: #fff;
	}
</style>
