<script lang="ts">
	import Amount from "./Amount.svelte";
    import Dialog from './Dialog.svelte'
    let isFront = true;
    let activeIndex = 0;

    let dialog: HTMLDialogElement

    const cardList = [
        { title: '喵星人之友', count: 9957, amount: 600 }, 
        { title: '喵星大使', count: 2000, amount: 600 }, 
        { title: '喵星傳奇', count: 6666, amount: 600 }, 
    ]

    const goBack = () => {
        isFront = !isFront
    }

    const handleClick = (index: number) => {
        activeIndex = index
    }

    const handleOpenDialog = () => {
        dialog.showModal()
    }

    const handleClose = () => {
        dialog.close()
    }
</script>
<section data-aos="fade-up" class="bg-no-repeat bg-cover wrapper bg-catHand">
    <div class="flex items-center h-full py-10 lg:py-0 container-box">
        <div class="flex flex-col items-center mx-auto w-full lg:mx-0 lg:w-1/2 lg:min-w-[660px] lg:h-[406px] px-12 py-6 bg-white rounded-[80px]">
            {#if isFront}
                <img class="title" src="/svg/donate.svg" alt="title">
                <p class="py-4 lg:cus-text-h4 cus-text-h6">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
                <img src="/svg/total.svg" alt="total">
                <Amount/>
                <button class="btn w-[222px] h-[82px]" on:click={goBack}>
                    <img class="w-10 mr-4" src="/svg/coin.svg" alt="coin">
                    前往捐款
                </button>
                {:else}
                <h3 class="pb-2 cus-text-h4">選擇捐款方案</h3>
                <ul class="flex items-center justify-between w-full mb-4">
                    {#each cardList as item, i}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <li on:click={() => handleClick(i)} class:active={activeIndex === i} 
                            class="w-[178px] h-[120px] flex flex-col items-center border-2 cursor-pointer justify-between py-3 border-secondary-darkGray rounded-lg">
                            <span class="cus-text-h5">{ item.title }</span>
                            <img src={`/svg/NT$${item.amount}.svg`} alt="amount">
                            <span class="text-gray-400 body-sm">已經有<span>{ item.count }</span>人贊助</span>
                        </li>
                    {/each}
                </ul>
                <div class='flex items-center justify-center h-[90px] w-full border-2 rounded-lg border-secondary-darkGray'>
                    <span class="w-1/3 pr-2 text-right cus-text-h5">自訂捐款金額</span>
                    <div class="flex items-center w-2/3 form-field">
                        <input class="w-full" placeholder="請輸入捐款金額" type="number">
                    </div>
                </div>
                <div class="flex items-center justify-center mt-4">
                    <button class="mr-4 btn-outline w-[176px] h-[82px]" on:click={goBack}>返回</button>
                    <button class="w-[222px] h-[82px] btn" on:click={handleOpenDialog}>
                        <img class="w-10 mr-4" src="/svg/coin.svg" alt="coin">
                        我要捐款
                    </button>
                </div>
            {/if}
        </div>
    </div>
</section>

<Dialog bind:dialog>
    <div class="dialog">
        <div class="h-[300px]">
            <h3 class="py-4 text-center cus-text-h4">非常感謝您的捐款！</h3>
            <p class="cus-text-h6">您是我人生的明燈</p>
        </div>
        <button on:click={handleClose} class="btn-outline mt-8 w-[176px] h-[82px]">返回</button>
    </div>
</Dialog>

<style lang="postcss">
    .active {
        @apply border-2 border-primary;
    }
    .form-field {
       @apply w-[360px]
       h-[50px]
       rounded-md
       border
       bg-white
       border-secondary-darkGray
       text-secondary-darkGray
       relative
       p-3;     
    }
</style>
