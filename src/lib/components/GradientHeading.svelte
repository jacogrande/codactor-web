<script lang="ts">
	export let color1: string;
	export let color2: string;
</script>

<h3 class="text-3xl font-sans-bold text-left">
	<span
		style={`background: -webkit-linear-gradient(135deg, ${color1} 0%, ${color2} 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`}
	>
		<slot />
	</span>
</h3>
