<script lang="ts">
	import { string } from "zod";

    export let index: number = 0;
    export let order: string =''
    export let title: string = ''
    export let content: string[] = []
    export let ellipsis: number = 0    
    const getString = (str: string, count: number) => str.length >= count ? str.slice(0, count) + '...' : string;   
</script>

<div class:lg:mt-8={index === 1} class="bg-white p-4 rounded-lg w-full lg:w-[30%] mb-8 lg:max-w-[374px] lg:h-[374px] h-[400px] hover:translate-x-1 hover:translate-y-1 duration-300 ">
    <div class="w-16 p-2 text-white rounded-tl-lg rounded-br-lg body-md bg-secondary-green">
        政策{order}
    </div>
    <h3 class="my-2 cus-text-h4">
        {title}
    </h3>
    <ol class="pl-4 list-decimal body-md h-[190px]">
        {#each content as item, i}
            <li >
                {
                    i === content.length - 1 ? (ellipsis !== 0 ? getString(item, ellipsis): item)     :item
                }
            </li>
        {/each}
    </ol>
</div>

<style lang="postcss">
</style>
