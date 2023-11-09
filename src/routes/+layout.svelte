<script lang="ts">
	import 'iconify-icon'
	import '../app.css';
	let name = 'world';
</script>

<nav>
	<iconify-icon icon="mdi:home"></iconify-icon>
	<h1 class="bg-blue-500 title-h1">你好我的朋友</h1>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
