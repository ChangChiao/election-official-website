<script lang="ts">
    import { onMount } from 'svelte';
	import Cover from "../components/Cover.svelte";
	import Activity from "../components/Activity.svelte";
	import Issue from "../components/Issue.svelte";
	import Donate from "../components/Donate.svelte";
	import MailBox from "../components/MailBox.svelte";
    import { setActiveArea } from '../store'

    let pageTitle = '喵立翰 競選官網';

    const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    }

    onMount(() => {
        document.title = pageTitle;

        const sections = document.querySelectorAll('.wrapper');
        const handleIntersection = ((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(ele => {
                if(ele.isIntersecting){
                    setActiveArea(ele?.target?.id)
                }
            })
        })
        const observer = new IntersectionObserver(handleIntersection, option);
        sections.forEach(section => {
            observer.observe(section);
        });
    });
</script>

<div  class="outter border-[5px] border-primary overflow-hidden">
    <Cover />
    <Activity />
    <Issue />
    <Donate/>
    <MailBox />
</div>
