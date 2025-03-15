<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Icon from '@iconify/svelte';
	import flylighter_logo from '$lib/images/flylighter_64.png';

	const projects = [
		{
			title: 'Flylighter',
			description: 'A web clipper for power users.',
			image: flylighter_logo,
			link: '#'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="header">
		<Icon
			icon="ant-design:code-twotone"
			color="var(--color-theme-1)"
			height="1.25rem"
			width="1.25rem"
		/>
		<h2>Web Dev</h2>
	</div>
	{#each projects as project}
		<Card
			title={project.title}
			description={project.description}
			image={project.image}
			link={project.link}
		/>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 0.6;
		& .header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			margin-bottom: 0.75rem;
			& h2 {
				all: unset;
				padding-top: 1px;
				font-size: 1rem;
				color: var(--color-text-secondary);
			}
		}
	}
</style>
