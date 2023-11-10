<script>
	import Amount from "./Amount.svelte";

</script>
<div class="bg-no-repeat bg-cover wrapper bg-catHand">
    <div class="container flex items-center h-full">
        <div class="flex flex-col items-center w-1/2 p-10 bg-white rounded-[80px]">
            <img src="/svg/donate.svg" alt="title">
            <p class="py-4 cus-text-h4">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
            <img src="/svg/total.svg" alt="total">
            <Amount/>
            <button class="flex w-[222px] h-[82px] text-white bg-primary rounded-[100px] items-center justify-center cus-text-h3 cursor-pointer">
                <iconify-icon icon="mdi:attach-money"></iconify-icon>
                前往捐款
            </button>
        </div>
    </div>
</div>
