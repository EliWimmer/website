<script lang="ts">
	import Icon from '@iconify/svelte';
	export const flylighter = flylighterSnippet;
</script>

{#snippet flylighterSnippet()}
	<div class="main">
		<p>
			Flylighter is a Notion web clipper focused on speed and flexibility. Capture any web data,
			auto-fill database properties, and work at the speed of thought.
		</p>

		<div class="links">
			<a href="https://flylighter.com">
				<Icon icon="mdi:web" />
				Website</a
			>
			<a
				href="https://chromewebstore.google.com/detail/flylighter-capture-articl/dlmdffmkcggiicjbfnjcnikkpahgplmd?authuser=1&hl=en&pli=1"
			>
				<Icon icon="simple-icons:chromewebstore" />
				Chrome Web Store</a
			>
			<a
				href="https://addons.mozilla.org/en-US/firefox/addon/flylighter-beta/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
			>
				<Icon icon="mdi:firefox" />
				Firefox Add-ons</a
			>
		</div>
	</div>
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
        box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.075) inset,0 10px 10px 0 rgba(0, 0, 0, 0.075) inset;
        & p {
            unset: all;
            font-size: 0.875rem;

        }
        /* &::before {
            content: '';
            display: block;
            width: 1px;
            height: calc(100% + 0.5rem);
            background-color: rgba(255, 255, 255, 0.1);
            position: absolute;
            left: .5rem;
            top: -.875rem;
        } */
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
