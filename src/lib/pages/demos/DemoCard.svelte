<script lang="ts">
	export let title: string;
	export let description: string;
	export let link: string;
	export let image: string;
	export let date: string;
</script>

<div class="flex flex-col w-full tablet:w-4/5 laptop:w-[50%]">
	<div class="py-12 w-full flex items-center justify-center">
		<img src={image} alt={title} width="100%" height="100%" class="z-10 demo" />
	</div>
	<div class="flex justify-between items-baseline">
		<h2 class="text-2xl font-sans-bold">{title}</h2>
		<p class="text italic font-sans">{date}</p>
	</div>
	<p class="font-sans text-text self-start mt-4 text-left z-10">
		{description} <a href={link} class="text-primary ">Read more</a>
	</p>
</div>
