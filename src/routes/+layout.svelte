<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	// import Matter from 'matter-js';
	let { children } = $props();

	let matterElement: HTMLCanvasElement | null = $state(null);
	// onMount(() => {
	// 	if (!matterElement) return;
	// 	// module aliases
	// 	var Engine = Matter.Engine,
	// 		Render = Matter.Render,
	// 		Runner = Matter.Runner,
	// 		Bodies = Matter.Bodies,
	// 		Composite = Matter.Composite;

	// 	// create an engine
	// 	var engine = Engine.create();

	// 	// create a renderer
	// 	var render = Render.create({
	// 		canvas: matterElement,
	// 		engine: engine,
	// 		options: {
	// 			width: matterElement.clientWidth,
	// 			height: matterElement.clientHeight,
	// 			background: '#181F1D'
	// 		}
	// 	});

	// 	// create two boxes and a ground
	// 	var boxA = Bodies.rectangle(100, 200, 80, 80);
	// 	var boxB = Bodies.rectangle(450, 50, 80, 80);
	// 	var ground = Bodies.rectangle(matterElement.clientWidth / 2, matterElement.clientHeight,
	// 		matterElement.clientWidth,
	// 		60,
	// 		{
	// 			isStatic: true
	// 		}
	// 	);

	// 	// add all of the bodies to the world
	// 	Composite.add(engine.world, [boxA, boxB, ground]);

	// 	// run the renderer
	// 	Render.run(render);

	// 	// create runner
	// 	var runner = Runner.create();

	// 	// run the engine
	// 	Runner.run(runner, engine);
	// });
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
	<!-- <canvas class="matter-bg" bind:this={matterElement}></canvas> -->
</div>

<style>
	:global(::-webkit-scrollbar-track) {
		background-color: red;
		width: 30px;
	}
	:global(::-webkit-scrollbar-thumb) {
		background-color: red;
		width: 30px;
	}
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		max-height: 100vh;
		padding-top: 2rem;
		box-sizing: border-box;
		overflow-y: scroll;

		& main {
			flex: 1;
			margin: 0 auto;
			min-width: 600px;
			max-width: 1200px;
			padding: 0 1rem;
			z-index: 2;
		}
	}
	.matter-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1;
		background: #181f1d !important;
	}
</style>
