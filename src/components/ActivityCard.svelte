<script lang="ts">
    export let imgSrc:string = ''
    export let date:string = ''
    export let title:string = ''
    export let content:string = ''
</script>

<div class="overflow-hidden rounded-lg flex items-center relative w-full h-[232px] bg-white">
    <div class="w-[276px] h-full overflow-hidden">
        <img src={imgSrc} alt="activity">
    </div>
    <div class="flex-1 h-full p-4 mt-4">
        <div class="text-white flex justify-center items-center w-[104px] h-[34px] rounded-tl-lg rounded-br-lg body-md bg-secondary-green">
            {date}
        </div>
        <h3 class="my-2 cus-text-h4">{title}</h3>
        <p class="body-md">
            {content}
        </p>
    </div>
</div>

<style lang="postcss">

</style>
