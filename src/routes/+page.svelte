<script>
    import { onMount } from 'svelte';
	import Cover from "../components/Cover.svelte";
	import Activity from "../components/Activity.svelte";
	import Issue from "../components/Issue.svelte";
	import Donate from "../components/Donate.svelte";
	import MailBox from "../components/MailBox.svelte";

    let pageTitle = '喵立翰 競選官網';

    onMount(() => {
        document.title = pageTitle;
    });
</script>

<div class="border-[5px] border-primary overflow-hidden">
    <Cover />
    <Activity />
    <Issue />
    <Donate/>
    <MailBox />
</div>
