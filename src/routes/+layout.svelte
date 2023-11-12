<script lang="ts">
	import 'iconify-icon'
	import Header from  '../components/Header.svelte'
	import Footer from '../components/Footer.svelte';
	import AOS from 'aos';	
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import 'aos/dist/aos.css';
	import '@splidejs/svelte-splide/css';
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
