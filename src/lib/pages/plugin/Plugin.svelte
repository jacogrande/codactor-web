<main class="bg-background flex-1">
	<section
		class="w-full laptop:px-16 px-4 pt-24 flex flex-col items-center justify-between text-white text-center z-10 mb-[300px] "
	>
		<h1 class="text-5xl font-sans-bold tablet:w-[600px] leading-[4rem] pb-4">
			Codactor IntelliJ Plugin
		</h1>
		<p class="text-xl font-sans-semi laptop:w-3/5">
			Our plugin allows you to use Codactor's powerful features directly in your favorite IDE.
		</p>
		<div class="py-24 w-full tablet:w-4/5 flex flex-col items-center justify-center">
			<iframe
				class="w-full laptop:h-[800px] tablet:h-[450px] h-[400px] rounded-xl shadow-lg"
				src="https://www.youtube.com/embed/ev_B-GBSc5Y"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>

		<h2 class="text-4xl font-sans-bold pb-4 mt-32">GPT Functions Integration</h2>
		<p class="tablet:w-4/5 laptop:w-3/5 w-full text-left text-text text mb-4 font-sans">
			Experience the future of coding with the Inquiry Functions feature, all managed through our
			Inquiry chat. Your inquiries can now perform complex operations to read, write, and manage
			your code for you.
		</p>
		<div class="py-24 w-full flex items-center justify-center">
			<img
				src="/images/plugin/functions.png"
				alt="Codactor in action"
				height="100%"
				class="z-10 demo laptop:w-[75%] w-[90%] rounded-lg shadow-lg"
			/>
		</div>
		<h2 class="text-4xl font-sans-bold pb-4 mt-32 mb-12">What can Inquiry Functions do?</h2>
		<ul class="laptop:w-3/5 text-left z-10 list-disc text-text">
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">Review Code Files</p>
				Codactor can read the contents of the currently selected code file in the Intellij editor, read
				a code file given its path or its package in the project directory, and read the file directory
				structure at provided path.
			</li>
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">Modifications and Inquiries</p>
				Codactor can get a list of recent historical modification IDs and inquiry IDs, read the contents
				of a file modification given its ID, and read the contents of a queued modification given its
				position in the queue.
			</li>
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">Manage Queued Modifications</p>
				Codactor can retry a queued modification or remove queued modifications.
			</li>
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">File Modifications</p>
				Codactor can request a new file modification to be processed by the file modifier 'LLM. This
				can involve modifying existing code or fixing an error. Codactor can also create new code where
				none existed before. Additionally, Codactor can request these modifications and wait for a response.
			</li>
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">File Creation</p>
				If you need a new file, Codactor can request a new file to be created following a provided description
				that will be processed by the file modifier LLM, and wait to review the code it suggests.
			</li>
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">File Deletion</p>
				If you no longer need a file, I can request a file deletion.
			</li>
			<li class="text-sm">
				<p class="text-base font-bold mb-1 text-white">Run programs</p>
				If you want to run a program file and read its command line output, I can do that by providing
				the path to the file and the interpreter language.
			</li>
		</ul>
		<div class="py-24 w-full laptop:w-3/5 tablet:w-4/5 flex flex-col items-center justify-center">
			<iframe
				class="w-full laptop:h-[650px] tablet:h-[350px] h-[300px] rounded-lg"
				src="https://www.youtube.com/embed/wKoB-5TxVpY"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
			<p class="italic mt-4 text-text">Watch the Inquiry Function feature at work</p>
		</div>
		<a href="https://plugins.jetbrains.com/plugin/21640-codactor" class="mt-24 z-10">
			<button class="text-2xl py-4 px-8 rounded-full font-bold text-background">
				Download Now
			</button>
		</a>
	</section>
</main>

<style>
	li {
		margin-bottom: 2rem;
	}
	h1 {
		/* text-gradient to bottom right from #33B1F8 to #91EED8 */
		background: -webkit-linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	button {
		background: linear-gradient(135deg, #91eed8 0%, #33b1f8 100%);
	}
</style>
