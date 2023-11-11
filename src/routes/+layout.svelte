<script lang="ts">
	import 'iconify-icon'
	import Header from  '../components/Header.svelte'
	import Footer from '../components/Footer.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import '../app.css';
	import { onMount } from 'svelte';

	const options = {
		duration: 3000,
  	}

	onMount(() => {
		AOS.init();
	})
</script>

<Header />
<slot />
<Footer />
<SvelteToast {options} />


<style lang="postcss">

</style>
