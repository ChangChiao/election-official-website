<script>
	import ActivityCard from "./ActivityCard.svelte";
    import { actData } from '../configs/activity';
	import ActivityItem from "./ActivityItem.svelte";
	import ActivitySwiper from "./ActivitySwiper.svelte";


</script>

<section data-aos="fade-up" id="activity" class="wrapper bg-secondary-gray h-[650px]">
    <div class="flex flex-col items-center container-box">
        <img class="my-8 title" src="/svg/latest.svg" alt="">
        <div class="items-center justify-between hidden lg:flex">
            <ActivityItem {...actData[0]} />
            <div class="w-[calc(100%-530px)] h-[500px] flex flex-col justify-between">
                {#each actData.slice(1) as item}
                    <ActivityCard {...item} /> 
                {/each}
            </div>
        </div>
        <ActivitySwiper />
    </div>
</section>

<style lang="postcss">


</style>
