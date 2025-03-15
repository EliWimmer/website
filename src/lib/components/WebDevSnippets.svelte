<script lang="ts">
	import Icon from '@iconify/svelte';
	import rttImage from '$lib/images/rtt.png';
	import { fade } from 'svelte/transition';
	export const flylighter = flylighterSnippet;
	export const retroTextureTool = retroTextureToolSnippet;

	let showLargeRttImage = $state(false);
</script>

{#snippet flylighterSnippet()}
	<div class="main fly">
		<p>
			Flylighter is a Notion web clipper focused on speed and flexibility. Capture any web data,
			auto-fill database properties, and work at the speed of thought.
		</p>

		<div class="links">
			<a href="https://flylighter.com" target="_blank">
				<Icon icon="mdi:web" />
				Website</a
			>
			<a
				href="https://chromewebstore.google.com/detail/flylighter-capture-articl/dlmdffmkcggiicjbfnjcnikkpahgplmd?authuser=1&hl=en&pli=1"
				target="_blank"
			>
				<Icon icon="simple-icons:chromewebstore" />
				Chrome Web Store</a
			>
			<a
				href="https://addons.mozilla.org/en-US/firefox/addon/flylighter-beta/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
				target="_blank"
			>
				<Icon icon="mdi:firefox" />
				Firefox Add-ons</a
			>
		</div>
	</div>
{/snippet}

{#snippet retroTextureToolSnippet()}
	<div class="main rtt">
		<p>
			RTT is a Windows tool written in Python for batch-processing PBR maps into playstation 1 style
			textures. Allows for resizing with multiple sampling options, bit depth selection, and
			dithering with a selection of algorithms with a live preview. Automatically handles various
			file formats.
		</p>
		<img
			src={rttImage}
			alt="Retro Texture Tool"
			on:click={() => (showLargeRttImage = !showLargeRttImage)}
		/>
		<div class="links">
			<a href="https://sykoknot.itch.io/retro-texture-tool" target="_blank">
				<Icon icon="la:itch-io" />
				Buy on Itch.io</a
			>
			<a href="http://personal-site-po9vg.sevalla.storage/RetroTextureTool.zip" target="_blank">
				<Icon icon="tabler:download" />
				Download (Windows)</a
			>
		</div>
	</div>
	{#if showLargeRttImage}
		<div
			class="large"
			on:click={() => (showLargeRttImage = false)}
			transition:fade={{ duration: 100 }}
		>
			<img src={rttImage} alt="Retro Texture Tool" />
		</div>
	{/if}
{/snippet}

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding-left: 3.5rem;
		padding-right: 1rem;
		padding-bottom: 1rem;
		padding-top: 0.25rem;
		box-sizing: border-box;
		position: relative;
		width: calc(100% + 3rem);
		margin-left: -1.5rem;
		background-color: hsl(162, 14%, 9%);
		box-shadow:
			0 -10px 10px 0 rgba(0, 0, 0, 0.075) inset,
			0 10px 10px 0 rgba(0, 0, 0, 0.075) inset;
		& p {
			unset: all;
			font-size: 0.875rem;
		}
	}
	img {
		position: relative;
		margin: 0.5rem 1rem 1rem 0;
		box-sizing: border-box;
		width: calc(100% - 1rem);
		height: 100%;
		object-fit: cover;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.5rem;
		box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
		cursor: pointer;
		transition:
			height 0.2s ease-in-out,
			width 0.2s ease-in-out,
			top 0.2s ease-in-out,
			left 0.2s ease-in-out,
			position 0.2s ease-in-out 0.2s;
		interpolate-size: allow-keywords;
	}
	.large {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 90%;
			height: auto;
			object-fit: cover;
		}
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		font-size: 0.875rem;
		& a:not(:first-child) {
			margin-left: 1rem;
		}
		& a:not(:last-child) {
			border-right: 1px solid rgba(255, 255, 255, 0.1);
			padding-right: 1rem;
		}
		& a {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 0.5rem;
			height: 14px;
			vertical-align: middle;
		}
	}
</style>
