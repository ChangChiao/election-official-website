<script>
	import ActivityCard from "./ActivityCard.svelte";
    import { actData } from '../configs/activity';


</script>

<section data-aos="fade-up" id="activity" class="wrapper bg-secondary-gray h-[650px]">
    <div class="flex flex-col items-center container-box">
        <img class="my-8 title" src="/svg/latest.svg" alt="">
        <div class="flex items-center justify-between">
            <div class="overflow-hidden rounded-lg relative w-[500px] h-[500px]">
                <div class="absolute top-0 right-0 w-[74px] h-[74px] flex flex-col items-center justify-center text-white bg-secondary-green">
                    <div class="leading-none cus-text-h2">26</div>
                    <div class="cus-text-h6">DEC.</div>
                </div>
                <div class="h-[332px] overflow-hidden">
                    <img src="/Img-act01.png" alt="">
                </div>
                <div class="h-[168px] bg-white p-3">
                    <h3 class="pb-2 cus-text-h4">參與台北寵物論壇 爭取貓咪友善環境</h3>
                    <p class="body-md line-clamp-4">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
                </div>
            </div>
            <div class="w-[calc(100%-530px)] h-[500px] flex flex-col justify-between">
                {#each actData.slice(1) as item}
                    <ActivityCard {...item} /> 
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="postcss">


</style>
