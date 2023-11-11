<script lang="ts">
	import 'iconify-icon'
	import Header from  '../components/Header.svelte'
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import '../app.css';

	const options = {
		duration: 3000,
  	}
</script>

<Header />
<slot />
<SvelteToast {options} />

<style lang="postcss">

</style>
