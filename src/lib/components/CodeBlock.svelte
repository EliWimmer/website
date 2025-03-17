<script lang="ts">
	import type { Snippet } from 'svelte';
	import { highlightCode } from '$lib/actions/syntax-highlighter.svelte';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	let {
		language = 'JSON',
		code
	}: {
		language?: 'JSON';
		code: string;
	} = $props();

	let copied = $state(false);
</script>

<div class="code-block">
	<div class="code-block__header">
		<span class="code-block__language">{language}</span>
		<button
			class="code-block__copy"
			class:copied
			on:click={() => {
				navigator.clipboard.writeText(code);
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 2000);
			}}
		>
			{#if copied}
				<span style="white-space: nowrap;" transition:slide={{ duration: 100, axis: 'x' }}>Copied!</span>
			{/if}
			<Icon icon="tabler:copy" />
		</button>
	</div>
	<pre class="code-block__content" use:highlightCode={{ language, code }}></pre>
</div>

<style>
	.code-block {
		background-color: var(--color-bg-0);
		color: var(--color-text-tertiary);
		border-radius: 0.375rem;
		margin: 1rem 0;
		font-size: 0.875rem;
		line-height: 1.5;
		overflow-x: auto;
		white-space: pre-wrap;
		word-wrap: break-word;
		tab-size: 2;
		hyphens: none;
		box-sizing: border-box;
		position: relative;
		width: 100%;
		box-shadow: none;
		box-sizing: border-box;
		& .code-block__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.25rem 0.25rem 0.25rem 0.5rem;
			border-bottom: 1px solid var(--color-border-secondary);
			& .code-block__copy {
				all: unset;
				background-color: var(--color-bg-1);
				border: none;
				height: 1.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.25rem;
				border-radius: 0.25rem;
				color: var(--color-text-secondary);
				font-size: 0.875rem;
				line-height: 1;
				cursor: pointer;
				interpolate-size: allow-keywords;
				width: auto;
                padding: 0 0.3rem;
				transition: 80ms ease-in-out;
				&:hover {
					color: var(--color-text);
				}
				&.copied {
					width: auto;
					height: 1.5rem;
                    color: var(--color);
                    padding: 0 0.3rem;
				}
			}
		}
		& pre {
			margin: 0;
			padding: 0.5rem;
			background-color: transparent;
			border: none;
			box-sizing: border-box;
			font-size: 0.875rem;
			box-shadow: none;
			box-sizing: border-box;
			width: 100%;
		}
	}
</style>
