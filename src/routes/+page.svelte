<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Icon from '@iconify/svelte';
	import flylighter_logo from '$lib/images/flylighter_64.png';

	const projects = [
		{
			title: 'Flylighter',
			id: 'flylighter',
			description: 'A web clipper for power users.',
			image: flylighter_logo,
			link: '#'
		},
		{
			title: 'Notion Style Tweaks',
			id: 'notion-style-tweaks',
			description: 'A collection of tweaks for Notion.',
			image: null,
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
	<div class="table-header">
		<div class="indicator"></div>
		<div class="table-header-item first">Project</div>
		<div class="table-header-item second">Description</div>
	</div>
	{#each projects as project, index (project.id)}
		<div class="project" class:last={index === projects.length - 1} class:even={index % 2 === 0}>
			<div class="tree-indicator-top"></div>
			{#if index !== projects.length - 1}
				<div class="tree-indicator-bottom"></div>
			{/if}
			<Card
				title={project.title}
				description={project.description}
				image={project.image}
				link={project.link}
			/>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 0.6;

		background-color: hsl(162, 14%, 9%);
		border-radius: 0.375rem;
		overflow: hidden;
		& .table-header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			background-color: hsl(162, 14%, 12%);
			width: 100%;
			box-sizing: border-box;
			height: 1.5rem;
			& .indicator {
				width: calc(1rem + 1px);
				height: 100%;
				border-right: 1px solid rgba(255, 255, 255, 0.1);
				box-sizing: border-box;
			}
			& .table-header-item {
				font-size: 0.75rem;
				color: var(--color-text-tertiary);
				box-sizing: border-box;
				&.first {
					width: calc(33%);
					padding-left: 1.25rem;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					box-sizing: border-box;
				}
				&.second {
					padding-left: 0.5rem;
					border-left: 1px solid rgba(255, 255, 255, 0.05);
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					box-sizing: border-box;
				}
			}
		}
		& .header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 0.5rem;
			padding: 0.5rem 0.5rem;
			width: 100%;
			box-sizing: border-box;
			border-bottom: 1px solid var(--color-theme-1);

			& h2 {
				all: unset;
				padding-top: 1px;
				font-size: 1rem;
				color: var(--color-text-secondary);
			}
		}

		& .project {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding-left: 1.5rem;
			position: relative;
			box-sizing: border-box;
			background-color: hsl(162, 14%, 12%);
			&.even {
				background-color: hsl(162, 14%, 13%);
			}
			&:hover {
				background-color: #283531;
			}
		}
		& .tree-indicator-top {
			position: absolute;
			top: 0;
			left: 1rem;
			width: 0.5rem;
			height: 0.875rem;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			border-left: 1px solid rgba(255, 255, 255, 0.1);
		}
		& .tree-indicator-bottom {
			position: absolute;
			bottom: 0;
			left: 1rem;
			width: 0.5rem;
			height: 0.875rem;
			border-left: 1px solid rgba(255, 255, 255, 0.1);
		}
		& .tree-branch {
			font-family: monospace;
			font-size: 1rem;
			color: var(--color-theme-1);
		}
	}
</style>
