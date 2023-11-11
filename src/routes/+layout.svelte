<script lang="ts">
	import 'iconify-icon'
	import Header from  '../components/Header.svelte'
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import '../app.css';
	import Footer from '../components/Footer.svelte';

	const options = {
		duration: 3000,
  	}
</script>

<Header />
<slot />
<Footer />
<SvelteToast {options} />


<style lang="postcss">

</style>
