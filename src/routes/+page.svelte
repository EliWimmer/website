<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Icon from '@iconify/svelte';
	import flylighter_logo from '$lib/images/flylighter_64.png';
	import WebDevSnippets from '$lib/components/WebDevSnippets.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		console.log(WebDevSnippets(null, {}));
	});

	let projects = [
		{
			title: 'Dev',
			icon: 'tabler:code',
			color: 'var(--color-theme-1)',
			items: [
				{
					title: 'Flylighter',
					id: 'flylighter',
					description: 'The best web clipper ever made.',
					image: flylighter_logo,
					link: '#',
					snippet: WebDevSnippets(null, {})?.flylighter
				},
				{
					title: 'Notion Style Tweaks',
					id: 'notion-style-tweaks',
					description: 'A collection of UI tweaks for Notion.',
					image: null,
					link: '#'
				},
				{
					title: 'Fern VSCode Theme',
					id: 'fern-vscode-theme',
					description: 'Bespoke VSCode theme with 4 styles and file icons.',
					image: null,
					link: '#'
				}
			]
		},
		{
			title: 'Graphic Design',
			icon: 'tabler:palette',
			color: 'var(--color-theme-2)',
			items: [
				{
					title: 'Notion Icons',
					id: 'notion-icons',
					description: 'Hand-crafted icon pack for Notion.',
					image: null,
					link: 'https://eliwimm.gumroad.com/l/rXzvN'
				}
			]
		},
		{
			title: 'Dotfiles',
			icon: 'tabler:folder-code',
			color: 'var(--color-theme-3)',
			items: [
				{
					title: 'Sofle Choc Config',
					id: 'sofle-choc-layout',
					description: 'Personal config for the Sofle Choc keyboard.',
					image: null,
					link: 'https://github.com/eliwimm/sofle-choc-layout'
				},
				{
					title: 'ZSA Voyager Config',
					id: 'zsa-voyager-config',
					description: 'Personal config for the ZSA Voyager keyboard.',
					image: null,
					link: 'https://github.com/eliwimm/zsa-voyager-config'
				},
				{
					title: 'Karabiner Config',
					id: 'karabiner-config',
					description: 'Config for Karabiner Elements with Hyper, Meh, and home row mods.',
					image: null,
					link: 'https://github.com/eliwimm/karabiner-config'
				}
			]
		},
		{
			title: 'Game Development',
			icon: 'tabler:device-gamepad',
			color: 'var(--color-theme-4)',
			items: [
				{
					title: 'PSX PBR',
					id: 'psx-pbr',
					description: 'Collection of 1900 PBR materials in the style of the Playstation 1.',
					image: null,
					link: ''
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#each projects as project}
	<section style="--color: {project.color}">
		<div class="header">
			<Icon icon={project.icon} color={project.color} height="1.25rem" width="1.25rem" />
			<h2>{project.title}</h2>
		</div>
		<div class="table-header">
			<div class="indicator"></div>
			<div class="table-header-item first">Project</div>
			<div class="table-header-item second">Description</div>
		</div>
		{#each project.items as item, index (item.id)}
			<div
				class="project"
				class:last={index === project.items.length - 1}
				class:even={index % 2 === 0}
			>
				<div class="tree-indicator-top"></div>
				{#if index !== project.items.length - 1}
					<div class="tree-indicator-bottom"></div>
				{/if}
				<Card
					title={item.title}
					description={item.description}
					image={item.image}
					link={item.link}
					customSnippet={item.snippet}
				/>
			</div>
		{/each}
	</section>
{/each}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 0.6;
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
		background-color: hsl(162, 14%, 9%);
		border-radius: 0.375rem;
		overflow: hidden;
		margin-bottom: 1rem;
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
			border-bottom: 1px solid var(--color);

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
			height: calc(100% - 0.875rem);
			border-left: 1px solid rgba(255, 255, 255, 0.1);
			interpolate-size: allow-keywords;
			transition: height 100ms ease;
		}
		& .tree-branch {
			font-family: monospace;
			font-size: 1rem;
			color: var(--color-theme-1);
		}
	}
</style>
