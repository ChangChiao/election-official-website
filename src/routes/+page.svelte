<script>
	import Amount from "../components/Amount.svelte";
    import { onMount } from 'svelte';

    let pageTitle = '喵立翰 競選官網';

    onMount(() => {
    document.title = pageTitle;
    });
</script>

<Amount/>
