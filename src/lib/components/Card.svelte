<script lang="ts">
	let {
		children = () => null,
		title = 'Project',
		description = 'Description',
		image = 'https://via.placeholder.com/150',
		link = '#'
	} = $props();
</script>

<div class="card">
	<div class="image">
		<img src={image} alt={title} />
	</div>
	<div class="body">
		<h3>{title}</h3>
		<p>- {description}</p>
	</div>
</div>

<style>
	.card {
		border: 1px solid var(--color-border);
		border-radius: 0.375rem;
		padding: 0.5rem .75rem;
		min-width: 300px;
		cursor: pointer;
		transition:
			border-color 100ms ease,
			box-shadow 100ms ease;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: .5rem;
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
			gap: .5rem;
		}
		& h3 {
			all: unset;
			font-size: 1rem;
		}
		& p {
			all: unset;
			font-size: 0.875rem;
			color: var(--color-text-secondary);
		}
		&:hover {
			border-color: var(--color-theme-1);
			box-shadow: 0 0 4px 0 #34744c;
			& img {
				opacity: 1;
			}
		}
	}
</style>
