<script lang="ts">
	import Icon from '@iconify/svelte';
	import ImageAnnotator from '$lib/components/ImageAnnotator.svelte';
	const options: {
		label: string;
		value: string;
		icon: string;
	}[] = [
		{ label: 'Snake', value: 'snake', icon: 'game-icons:sand-snake' },
		{ label: 'Cat', value: 'cat', icon: 'game-icons:cat' },
		{ label: 'Dog', value: 'dog', icon: 'game-icons:dog' },
		{ label: 'Hamster', value: 'hamster', icon: 'game-icons:hamster' },
		{ label: 'Chicken', value: 'chicken', icon: 'game-icons:chicken' },
		{ label: 'Fish', value: 'fish', icon: 'game-icons:fish' }
	];
</script>

<main>
	<h1>Playground</h1>
	<ImageAnnotator />
	<form>
		<p>
			<label for="pet-select">Select pet:</label>
			<select id="pet-select">
				<!-- {@render selectedOption()} -->
				{#each options as option}
					<option value={option.value}>
						{@render selectOption(option.label, option.icon)}
					</option>
				{/each}
			</select>
		</p>
	</form>
</main>

{#snippet selectedOption()}
	<selectedcontent></selectedcontent>
{/snippet}

{#snippet selectOption(label, icon)}
	<span class="icon" aria-hidden="true">
		<Icon icon="game-icons:sand-snake" height={14} width={14} />
	</span>
	<span class="option-label">{label}</span>
{/snippet}

<style>
	select,
	::picker(select) {
		appearance: base-select;
	}
	@starting-style {
		::picker(select):popover-open {
			opacity: 0;
		}
		::checkmark {
			display: none;
		}
	}
	select {
		border: 1px solid var(--color-border);
		background: var(--color-bg--1);
		padding: 4px 12px;
		transition: 0.4s;
		margin: 0 8px;
		width: 200px;
	}
	selectedcontent {
		background-color: var(--color-bg-1);
	}
	.option-icon {
		display: inline-block;
		width: 14px;
		height: 14px;
		vertical-align: middle;
		color: var(--color-text);
	}
	.option-label {
		color: var(--color-text);
	}

	select:hover,
	select:focus {
		background: var(--color-bg-1);
	}

	select::picker-icon {
		color: var(--color-text-secondary);
		transition:
			0.2s rotate,
			0.2s opacity;
		opacity: 0.1;
		rotate: 0deg;
	}
	select:open::picker-icon {
		rotate: 180deg;
		opacity: 1;
	}
	::picker(select) {
		border: 1px solid var(--color-border);
		background: var(--color-bg--1);
		padding: 3px;
		border-radius: 0.375rem;
		margin-top: 0.25rem;
		display: flex;
		flex-direction: column;
		interpolate-size: allow-keywords;

		transform: scale(0.95);
		opacity: 0;
		width: 200px;
		height: 0px;
		transition:
			all 0.1s allow-discrete,
			transform 200ms ease-in-out,
			height 500ms ease-in-out;
	}
	::picker(select):popover-open {
		opacity: 1;
		transform: scale(1);
		height: auto;
	}
	option {
		display: flex;
		justify-content: flex-start;
		gap: 8px;
		font-size: 0.875rem;
		margin: 1px 0;
		background: transparent;
		padding: 3px 6px;
		transition: 0.4s;
		color: var(--color-text);
		border-radius: 0.375rem;
		&::checkmark {
			display: none;
			order: 1;
			margin-left: auto;
			content: '☑️';
		}
		&:hover {
			background: var(--color-bg-1);
		}
	}
</style>
