<script lang="ts">
	import 'iconify-icon'
	import Header from  '../components/layout/Header.svelte'
	import Footer from '../components/layout/Footer.svelte';
	import AOS from 'aos';	
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import 'aos/dist/aos.css';
	import '@splidejs/svelte-splide/css';
	import '../app.css';

	const options = {
		duration: 3000,
  	}

	const removeUrlHash = (event: Event) => {
		event.preventDefault()
		const oldUrl = window.location.href
		if(oldUrl.includes('#')){
			const newUrl = oldUrl.split('#')[0]
			window.location.href = newUrl
		}
	}

	onMount(() => {
		AOS.init({
			offset: 30,
			once: true,
		});
		// window.addEventListener('beforeunload', removeUrlHash);
	})

	onDestroy(() => {
		if (browser) {
			// window.removeEventListener('beforeunload', removeUrlHash);
		}
	})

</script>

<Header />
<slot />
<Footer />
<SvelteToast {options} />


<style lang="postcss">

</style>
