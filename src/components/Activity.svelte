<script>
	import ActivityCard from "./ActivityCard.svelte";

    const cardData = [
        {
            imgSrc: '/Img-act02.png',
            date: '2023/12/20',
            title: '帶著你的貓耳，來和我一起走！',
            content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。'   
        },
        {
            imgSrc: '/Img-act03.png',
            date: '2023/12/08',
            title: '收容所模特兒大比拼！',
            content: '活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'   
        },
    ]
</script>

<div data-aos="fade-up" id="activity" class="wrapper bg-secondary-gray h-[650px]">
    <div class="container flex flex-col items-center">
        <img class="my-8" src="/svg/latest.svg" alt="">
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
                    <p class="body-md">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
                </div>
            </div>
            <div class="w-[calc(100%-530px)] h-[500px] flex flex-col justify-between">
                {#each cardData as item}
                    <ActivityCard {...item} /> 
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="postcss">


</style>
