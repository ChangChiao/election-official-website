<script lang="ts">
    export let imgSrc:string = ''
    export let date:string = ''
    export let title:string = ''
    export let content:string = ''

    
    $: day = date.split('/')[2];
</script>

<div class="overflow-hidden hover:translate-x-1 hover:translate-y-1 duration-300 rounded-lg relative w-[300px] h-[368px] lg:w-[500px] lg:h-[500px]">
    <div class="absolute top-0 right-0 w-[74px] h-[74px] flex flex-col items-center justify-center text-white bg-secondary-green">
        <div class="leading-none cus-text-h2">{day}</div>
        <div class="cus-text-h6">DEC.</div>
    </div>
    <div class="h-[200px] lg:h-[332px] overflow-hidden">
        <img src={imgSrc} alt="activity">
    </div>
    <div class="h-[168px] bg-white p-3 relative triangle">
        <h3 class="pb-2 cus-text-h4">{ title }</h3>
        <p class="body-md line-clamp-3">{ content }</p>
    </div>
</div>

<style lang="postcss">
.triangle {
    @apply after:absolute
    after:content-['']
    after:left-1/2
    after:-top-5
    after:-translate-x-1/2
    after:w-0
    after:h-0
    after:border-l-transparent
    after:border-r-transparent
    after:border-r-[22px]
    after:border-b-[20px]
    after:border-l-[22px]
    after:border-b-white;
}
</style>
