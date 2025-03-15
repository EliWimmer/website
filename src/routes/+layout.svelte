<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		& main {
			flex: 1;
			margin: 0 auto;
			min-width: 600px;
			max-width: 1200px;
			padding: 0 1rem;
		}
	}
</style>
