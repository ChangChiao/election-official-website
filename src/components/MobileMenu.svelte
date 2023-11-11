<script lang="ts">
    import { menu } from '../configs/menu';
</script>

<div class="w-screen h-screen text-white bg-primary">
    <div class="h-[66px] flex items-center justify-between">
        <img src="/svg/logo-white.svg" alt="logo">
        <div class="cross"></div>
    </div>
    <ul class="flex justify-end">
        {#each menu as item, i}
            <li class="mb-4 cus-text-h5" >
                <a href={`#${item.id}`}>
                    {item.title}
                </a>                   
            </li>
        {/each}
    </ul>
    <button class="flex items-center px-4 py-2 bg-white text-primary cus-text-h5 rounded-3xl">
        <img class="mr-2" src="/svg/coin-p.svg" alt="coin">
        小額捐款
    </button>
</div>

<style lang="postcss">
    .cross {
        @apply relative
        w-[50px]
        h-[50px]
        after:absolute 
        after:top-50%
        after:right-0
        after:w-full
        after:h-2
        after:z-10
        after:bg-white
        after:origin-center
        after:content-[''] 
        after:-rotate-45 
        before:absolute 
        before:top-50%s
        before:right-0
        before:w-full
        before:h-2
        before:z-10
        before:bg-white
        before:origin-center
        before:content-[''] 
        before:rotate-45;
    }

</style>
