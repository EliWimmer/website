<script lang="ts">
	import Icon from '@iconify/svelte';
	let {
		children = () => null,
		title = 'Project',
		description = 'Description',
		image = 'https://via.placeholder.com/150',
		link = '#'
	} = $props();
</script>

<div class="card">
	{#if image}
		<div class="image">
			<img src={image} alt={title} />
		</div>
	{:else}
		<div class="image">
			<Icon icon="mdi:document" color="var(--color-text-secondary)" />
		</div>
	{/if}
	<div class="body">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
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
			align-items: center;
			justify-content: flex-start;
			gap: 0.5rem;
			width: 100%;
		}
		& h3 {
			all: unset;
			font-size: 1rem;
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
			height: 1.75rem;
			padding-left: 0.5rem;
		}
		&:hover {
			& img {
				opacity: 1;
			}
		}
	}
</style>
