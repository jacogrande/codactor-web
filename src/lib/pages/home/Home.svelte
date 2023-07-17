<script>
	import ModeSlideshow from './ModeSlideshow.svelte';
</script>

<main class="bg-background leading-relaxed">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center"
	>
		<img
			src="/images/test.png"
			class="absolute width-[100vw] top-24 left-0 hidden laptop:flex"
			alt="wave"
		/>
		<h1
			class="text-4xl tablet:text-6xl font-sans-extra w-full tablet:w-[600px] leading-[4rem] pb-4"
		>
			Your Personal AI Coding Assistant
		</h1>
		<p class="text-xl font-sans-semi mt-4">The First GPT Powered Code Editor</p>
	</section>
	<div class="py-24 w-full flex items-center justify-center">
		<img
			src="/images/demo2.webp"
			alt="Codactor in action"
			height="100%"
			class="z-10 demo laptop:w-[75%] w-[90%]"
		/>
	</div>
	<section
		class="w-full laptop:px-16 px-4 py-16 flex flex-col items-center justify-between text-white text-center pb-[200px]"
	>
		<h2 class="text-4xl font-sans-bold pb-4">Write AI Powered Code</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text mb-4 font-sans">
			Say goodbye to the hassle of writing code manually. With Codactor, you can write code faster
			and smarter than ever before. Our revolutionary code editor is fully integrated with the GPT
			API, enabling you to create AI-assisted code that is both accurate and efficient.
		</p>
		<div class="py-24 laptop:w-3/5 tablet:w-4/5 flex items-center justify-center">
			<img src="/images/demo 3.webp" alt="Codactor in action" class="z-10 demo" />
		</div>

		<h2 class="text-4xl font-sans-bold pb-4 pt-24">Create Entire Projects From Scratch</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text font-sans">
			Building an entire project can be a time-consuming and tedious process, but with Codactor's
			'Create Files' feature, it's never been easier. Our editor allows you to create multiple files
			all with just one command, saving you time and effort.
		</p>

		<div class="py-24 laptop:w-3/5 tablet:w-4/5 flex flex-col items-center justify-center">
			<img src="/images/multifile.webp" alt="Codactor in action" class="z-10 demo" />
			<p class="italic font-sans text-text mt-4">
				*This feature requires GPT-4 access. If you're not signed up for the beta, you can <a
					href="https://openai.com/waitlist/gpt-4-api"
					class="text-primary">sign up here.</a
				>
			</p>
		</div>

		<h2 class="text-4xl font-sans-bold pb-4 pt-24">IntelliJ Plugin Coming Soon</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text font-sans">
			Elevate your IntelliJ experience to new heights with our upcoming Codactor plugin. Seamlessly
			integrate our AI-powered code generation, multi-file management, and unique coding modes
			directly into your favorite IDE. Stay tuned for a smarter, more efficient, and intuitive
			coding experience with the Codactor IntelliJ plugin.
		</p>

		<div class="py-24 w-full laptop:w-3/5 tablet:w-4/5 flex flex-col items-center justify-center">
			<iframe
				class="w-full laptop:h-[650px] tablet:h-[350px] h-[300px] rounded-lg"
				src="https://www.youtube.com/embed/ev_B-GBSc5Y"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>

		<h2 class="text-4xl font-sans-bold pb-4 pt-36">Multiple Modes</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text font-sans mb-12">
			Our code editor offers a range of modes, each designed to perform specific code actions that
			produce powerful results. Each mode offers a unique set of tools and features, giving you the
			freedom to choose the one that suits your specific coding needs. With Codactor, you'll have
			the power to write AI-powered code on your own terms.
		</p>
		<ModeSlideshow />

		<h2 class="text-4xl font-sans-bold pb-4 pt-36">Queue Multiple Edits</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text font-sans">
			Why make only one change at a time? With Codactor, you have the flexibility to edit selections
			and queue up multiple changes at once, making your coding process faster and more efficient.
			Our unique input box allows you to input multiple changes at once, including selections of
			code that you want to modify, fix, or translate. Codactor's AI-assisted code editor will
			analyze your selections and execute your edits in the order you specify, ensuring that your
			code is always accurate and error-free.
		</p>
		<div class="flex mt-16 laptop:w-3/5 tablet:w-4/5">
			<video
				autoplay
				loop
				muted
				playsinline
				class="rounded-xl"
				aria-label="A user using the WYSIWYG nps theme editor. First, they use our Point and Click editor to easily change the background color of the nps survey. Then, they use our CSS editor to add custom styles."
			>
				<source src="/images/demo_video.webm" type="video/webm" />
			</video>
		</div>
		<h2 class="text-4xl font-sans-bold pb-4 pt-36">You're Invited</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text font-sans z-10">
			Join the revolution of AI-assisted coding with Codactor today and experience faster, more
			efficient, and error-free coding. <a href="/signup" class="text-primary">Sign up now</a> and take
			the first step towards a new era of AI-powered code.
		</p>
		<a href="/signup" class="mt-24 z-10">
			<button class="text-2xl py-4 px-8 rounded-full font-bold text-background">
				Sign up now
			</button>
		</a>
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
	.demo {
		box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5);
		border-radius: 1rem;
	}

	button {
		background: linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
	}
</style>
