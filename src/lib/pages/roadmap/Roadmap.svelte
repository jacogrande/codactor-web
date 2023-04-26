<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">Feature Roadmap</h1>
		<p class="text-xl font-sans-semi">Our Plan for the Future of AI-Assisted Coding</p>
		<ul class="flex flex-col mt-24 mb-48 w-3/5">
			<li class="flex flex-col mb-8">
				<div class="orb" style="background: #88FFE3; top:0px" />
				<h2 class="text-xl font-sans-bold" style="margin-top:-2px">IntelliJ Plugin</h2>
				<p class="text-base font-sans text-left text-text">
					Supercharge your IntelliJ experience with our powerful plugin, integrating Codactor's
					advanced features seamlessly into your favorite IDE.
				</p>
			</li>
			<li class="flex flex-col mb-8">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">Sonarqube powered bug fixer / unit test generator</h2>
				<p class="text-base font-sans text-left text-text">
					Elevate your code quality with our Sonarqube-integrated bug fixer and automatic unit test
					generator, ensuring your software stays robust and reliable.
				</p>
			</li>
			<li class="flex flex-col mb-8">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">GPT-4 Powered Sketch Tool and Image Inputs</h2>
				<p class="text-base font-sans text-left text-text">
					Unleash the potential of your diagrams and designs with our versatile GPT-4 powered sketch
					tool, seamlessly transforming visuals into code.
				</p>
			</li>
			<li class="flex flex-col mb-8">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">Dark Theme</h2>
				<p class="text-base font-sans text-left text-text">
					Code in style and comfort with Codactor's sleek dark theme, designed to reduce eye strain
					and enhance focus during late-night coding sessions.
				</p>
			</li>
			<li class="flex flex-col">
				<div class="orb" />
				<h2 class="text-xl font-sans-bold">Multi-File Fix and Modify</h2>
				<p class="text-base font-sans text-left text-text">
					Effortlessly manage and modify multiple files at once with our innovative multi-file fix
					feature, streamlining your code maintenance process.
				</p>
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
