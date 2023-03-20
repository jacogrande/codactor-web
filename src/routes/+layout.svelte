<script>
	import '../app.css';
	import '../fonts.css';
	import Footer from '$lib/nav/Footer.svelte';
	import Nav from '$lib/nav/Nav.svelte';
</script>

<div class="w-[100vw] h-[100vh] flex flex-col">
	<Nav />
	<slot />
	<Footer />
</div>
