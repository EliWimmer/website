<script lang="ts">
	import Icon from '@iconify/svelte';
	import rttImage from '$lib/images/rtt.png';
	import fernImage from '$lib/images/fern-colors.png';
	import { fade } from 'svelte/transition';
	import CodeBlock from './CodeBlock.svelte';
	export const flylighter = flylighterSnippet;
	export const retroTextureTool = retroTextureToolSnippet;
	export const karabinerConfig = karabinerConfigSnippet;
	export const fernTheme = fernThemeSnippet;
	let showLargeRttImage = $state(false);
	let showLargeFernImage = $state(false);
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
		<div class="links" style="">
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

{#snippet karabinerConfigSnippet()}
	<div class="main karabiner">
		<p>
			Each of the following code snippets are for complex modifications in the Karabiner-Elements
			config.
		</p>
		<CodeBlock
			language="JSON"
			code={`{
	"description": "Home Row Mods",
	"manipulators": [
		{
			"from": {
				"key_code": "j",
				"modifiers": { "optional": ["any"] }
			},
			"to": [{ "key_code": "left_command" }],
			"to_if_alone": [{ "key_code": "j" }],
			"type": "basic"
		},
		{
			"from": {
				"key_code": "f",
				"modifiers": { "optional": ["any"] }
			},
			"to": [{ "key_code": "left_command" }],
			"to_if_alone": [{ "key_code": "f" }],
			"type": "basic"
		},
		{
			"from": {
				"key_code": "k",
				"modifiers": { "optional": ["any"] }
			},
			"to": [{ "key_code": "left_option" }],
			"to_if_alone": [{ "key_code": "k" }],
			"type": "basic"
		},
		{
			"from": {
				"key_code": "d",
				"modifiers": { "optional": ["any"] }
			},
			"to": [{ "key_code": "left_option" }],
			"to_if_alone": [{ "key_code": "d" }],
			"type": "basic"
		},
		{
			"from": {
				"key_code": "s",
				"modifiers": { "optional": ["any"] }
			},
			"to": [{ "key_code": "left_control" }],
			"to_if_alone": [{ "key_code": "s" }],
			"type": "basic"
		},
		{
			"from": {
				"key_code": "l",
				"modifiers": { "optional": ["any"] }
			},
			"to": [{ "key_code": "left_control" }],
			"to_if_alone": [{ "key_code": "l" }],
			"type": "basic"
		}
	]
},
`}
		/>
		<CodeBlock
			language="JSON"
			code={`{
		"description": "Space -> Tap/Hold Space/Meh",
		"manipulators": [
			{
				"from": {
					"key_code": "spacebar",
					"modifiers": { "optional": ["any"] }
				},
				"to": [
					{
						"key_code": "left_shift",
						"modifiers": ["left_control", "left_option"]
					}
				],
				"to_if_alone": [{ "key_code": "spacebar" }],
				"type": "basic"
			}
		]
	},
`}
		/>
		<CodeBlock
			language="JSON"
			code={`{
		"description": "Capslock -> Tap/Hold Esc/Hyper",
		"manipulators": [
			{
				"from": {
					"key_code": "caps_lock",
					"modifiers": { "optional": ["any"] }
				},
				"to": [
					{
						"key_code": "left_shift",
						"modifiers": ["left_command", "left_control", "left_option"]
					}
				],
				"to_if_alone": [{ "key_code": "escape" }],
				"type": "basic"
			}
		]
	}
`}
		/>
	</div>
{/snippet}

{#snippet fernThemeSnippet()}
	<div class="main fern">
		<p>
			Fern is a rare green-based color theme for your shell and editor. Originally derived from
			Gruvbox, it's been infused with colors of a temperate forest. Includes modified Catppuccin
			icons to match.
		</p>
		<img
			src={fernImage}
			alt="Fern Theme"
			on:click={() => (showLargeFernImage = !showLargeFernImage)}
		/>
		<div class="links">
			<span class="link-section">Editors</span>
			<a href="https://marketplace.visualstudio.com/items?itemName=EliWimmer.fern" target="_blank">
				<Icon icon="codicon:vscode" />
				VSCode Theme</a
			>
			<a href="https://marketplace.visualstudio.com/items?itemName=EliWimmer.fern" target="_blank">
				<Icon icon="simple-icons:zedindustries" />
				Zed</a
			>
			<a href="https://marketplace.visualstudio.com/items?itemName=EliWimmer.fern" target="_blank">
				<Icon icon="devicon-plain:neovim" />
				Neovim</a
			>
		</div>
		<div class="links pad">
			<span class="link-section">Shells</span>
			<a href="https://marketplace.visualstudio.com/items?itemName=EliWimmer.fern" target="_blank">
				<Icon icon="bxs:ghost" />
				Ghostty</a
			>
			<a href="https://marketplace.visualstudio.com/items?itemName=EliWimmer.fern" target="_blank">
				<Icon icon="solar:cat-outline" />
				Kitty</a
			>
		</div>
	</div>
	{#if showLargeFernImage}
		<div
			class="large"
			on:click={() => (showLargeFernImage = false)}
			transition:fade={{ duration: 100 }}
		>
			<img src={fernImage} alt="Fern Theme" />
		</div>
	{/if}
{/snippet}

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 1rem;
		box-sizing: border-box;
		position: relative;
		width: 100%;
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
		width: 100%;
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
		& .link-section {
			font-size: 0.75rem;
			color: var(--color-text-tertiary);
			width: 3.5rem;
			text-transform: uppercase;
		}
		&.pad {
			padding-top: 1rem;
		}
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

	.karabiner {

		& pre {
			margin-left: 0;
			margin-right: 0;
			padding-left: 0;
			padding-right: 0;
			border-left: none;
			border-right: none;
			border-top: none;
			border-bottom: none;
			border-radius: 0;
			box-shadow: none;
		}
	}
</style>
