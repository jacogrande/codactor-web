<svelte:head>
	<title>Creating a GPT-Powered Rogue-Like Game with Codactor</title>
	<meta
		name="description"
		content="Learn how to create a fully-featured GPT-powered rogue-like game using Codactor's advanced AI features. Our step-by-step demo will show you how to generate custom game content, handle player input, and more."
	/>
</svelte:head>
<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center mb-48"
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">
			Building a GPT Powered Rogue-Like Game
		</h1>
		<p class="text-xl font-sans-semi text-text w-full laptop:w-3/5">
			We took Codactor's Multi-File Create feature for a spin and ended up with a fully featured,
			GPT powered, rogue-like game that showcases the speed, accuracy, and flexibility of developing
			with Codactor...
		</p>
		<div class="flex flex-col mt-24 items-center mb-48 w-full laptop:w-3/5">
			<img
				src="/images/rogue/rogue 1.webp"
				alt="A terminal containing the rogue like text adventure game"
				class="rounded-xl"
			/>

			<h2 class="text-3xl font-sans-bold mt-48 mb-4">Scaffolding the Project</h2>
			<p class="text font-sans text-text self-start text-left">
				Creating a new game from scratch can be a daunting task, but with Codactor's Multi-File
				Create feature, we can quickly scaffold the project and start building our rogue-like game
				in no time. By simply selecting the 'Create Files' mode, we can generate multiple files with
				all at once, allowing us to focus on the game's logic rather than boilerplate code.
			</p>

			<img
				src="/images/rogue/rogue 2.webp"
				alt="A screenshot of the input prompt"
				class="mt-16 rounded-xl"
			/>
			<p class="italic text-text text-sm text-center mt-2">
				First we prompt Codactor to create the game.
			</p>
			<img
				src="/images/rogue/rogue 3.webp"
				alt="A view of the outputted directory"
				class="mt-16 rounded-xl"
			/>
			<p class="italic text-text text-sm text-center mt-2">
				And within minutes we have all of the files required for our game.
			</p>

			<h2 class="text-3xl font-sans-bold mt-48 mb-4">Squashing the Bugs</h2>
			<p class="text font-sans text-text self-start text-left">
				GPT-powered code generation is a powerful tool, but it's not perfect. As we began building
				our rogue-like game, we encountered a few bugs that needed to be squashed. Fortunately,
				Codactor's 'Fix' feature made it easy to identify and correct these issues. By selecting
				'Fix' from the input box, Codactor analyzes our code and provides us with suggestions for
				fixing syntax errors, variable naming conventions, and other common issues.
			</p>

			<img
				src="/images/rogue/rogue 4.webp"
				alt="A fix command to fix a class implementation error"
				class="mt-16 rounded-xl"
			/>
			<p class="italic text-text text-sm text-center mt-2">
				Here we're fixing a class implementation error.
			</p>
			<img
				src="/images/rogue/rogue 5.webp"
				alt="A modify command that updated the code to use the openai library"
				class="mt-16 rounded-xl"
			/>
			<p class="italic text-text text-sm text-center mt-2">
				Here we're updating our code to properly use the openai library.
			</p>

			<h2 class="text-3xl font-sans-bold mt-48 mb-4">Coding Has Never Been This Easy</h2>
			<p class="text font-sans text-text self-start text-left">
				And that's it! Our entire game is done and ready to be played. With features like Multi-File
				Create and Fix, we were able to quickly scaffold our project, squash bugs, and create an
				amazing rogue-like game in just a few simple commands. With Codactor, we can spend less time
				on menial coding tasks and more time on building amazing games that showcase the power of
				AI. Whether we're building games, web applications, or anything in between, Codactor is the
				ultimate tool for developers who want to take their skills to the next level. So what are
				you waiting for? <a href="/signup" class="text-primary">Join the Codactor community today</a
				> and start coding smarter.
			</p>
		</div>
	</section>
</main>
