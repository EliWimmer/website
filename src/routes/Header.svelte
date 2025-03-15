<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<header>
	<div class="corner">
		<a href="/">
			<h1>Eli Wimmer</h1>
		</a>
	</div>

	<nav>
		<ul>
			<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li> -->
			<li>
				<a href="https://www.github.com/eliwimmer">
					<Icon icon="mdi:github" height="1rem" width="1rem" />
				</a>
			</li>
			<li>
				<a href="https://bsky.app/profile/eliwimm.com">
					<Icon icon="ri:bluesky-fill" height="1rem" width="1rem" />
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		max-width: 600px;
		width: 100%;
	}

	.corner {
		& a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			& h1 {
				all: unset;
				font-size: 0.875rem;

				letter-spacing: 0.1em;
				width: fit-content;
				white-space: nowrap;
				color: var(--color-text);
				padding-left: .5rem;
			}
		}
	}
	nav {
		display: flex;
		justify-content: flex-end;
		--background: rgba(255, 255, 255, 0.7);

	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		&[aria-current='page'] {
			& a {
				color: var(--color-theme-1);
			}
			&::before {
				--size: 9px;
				content: '';
				width: 1rem;
				height: 1px;
				position: absolute;
				bottom: 0;
				left: calc(50% - var(--size));
				border-top: 2px solid var(--color-theme-1);
			}
		}
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);

		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 100ms ease;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
