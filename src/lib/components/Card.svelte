<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	let {
		title = 'Project',
		description = 'Description',
		image = null,
		link = '#',
		customSnippet
	}: {
		title?: string;
		description?: string;
		image?: string | null;
		link?: string;
		customSnippet?: Snippet | null;
	} = $props();

	let open = $state(false);
</script>

<div class="card-container">
	<div
		class="card"
		onclick={() => {
			if (customSnippet) {
				open = !open;
			} else {
				window.open(link, '_blank');
			}
		}}
	>
		<!-- {#if image}
		<div class="image">
			<img src={image} alt={title} />
		</div>
	{:else}
		<div class="image">
			<Icon icon="ph:dot-duotone" color="var(--color-text-secondary)" />
		</div>
	{/if} -->
		<div class="body">
			<h3>
				{title}
				{#if !customSnippet && link}
					<Icon
						icon="tabler:external-link"
						style="margin-left: auto;"
						height=".75rem"
						width=".75rem"
						color="var(--color-text-secondary)"
					/>
				{/if}
			</h3>
			<p>{description}</p>
		</div>
	</div>

	{#if open && customSnippet}
		<div class="custom-snippet-container" transition:slide={{ duration: 100 }}>
			{@render customSnippet()}
		</div>
	{/if}
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		width: 600px;
		max-width: 600px;
		& .custom-snippet-container {
			width: 624px;
			margin-left: -1.5rem;
			padding: 0 0.5rem 0 0.5rem;
			box-sizing: border-box;
			border-top: 1px solid rgba(255, 255, 255, 0.05);
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			background-color: #181f1d;
		}
	}
	.card {
		padding: 0 0.75rem;
		min-width: 300px;
		width: 100%;
		cursor: pointer;
		transition:
			border-color 100ms ease,
			box-shadow 100ms ease;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		box-sizing: border-box;
		&.even {
		}
		& .image {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 16px;
			height: 16px;
			object-fit: contain;
			& img {
				width: 16px;
				height: 16px;
				object-fit: contain;
				opacity: 0.75;
				transition: opacity 100ms ease;
			}
		}
		& .body {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 0.5rem;
			width: 100%;
		}
		& h3 {
			all: unset;
			font-size: 0.875rem;
			width: 32%;
			height: 1.75rem;
			display: flex;
			align-items: center;
		}
		& p {
			all: unset;
			display: flex;
			align-items: center;
			font-size: 0.875rem;
			color: var(--color-text-secondary);
			width: 68%;
			border-left: 1px solid rgba(255, 255, 255, 0.05);

			padding-left: 0.5rem;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
		}
		&:hover {
			& img {
				opacity: 1;
			}
		}
	}
</style>
