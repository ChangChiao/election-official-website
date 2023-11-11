<script lang="ts">
	import { afterUpdate } from 'svelte';
    import { menu } from '../configs/menu';
    import { createEventDispatcher } from 'svelte';

    export let isOpenMenu:boolean;

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('closeMenu');
    }
</script>

<div class:animate-swiper={isOpenMenu}  class:animate-swiperBack={!isOpenMenu} class="fixed px-8 w-screen h-screen text-white z-[999] translate-x-full bg-primary">
    <div class="h-[66px] flex items-center justify-between">
        <img class="w-[160px]" src="/svg/logo-white.svg" alt="logo">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={handleClick} class="cursor-pointer cross"></div>
    </div>
    <ul class="flex flex-col justify-end pt-4">
        {#each menu as item, i}
            <li class="mb-8 text-right cus-text-h5" >
                <a href={`#${item.id}`}>
                    {item.title}
                </a>                   
            </li>
        {/each}
    </ul>
    <button class="flex items-center float-right px-4 py-2 bg-white cursor-pointer text-primary cus-text-h5 rounded-3xl">
        <img class="mr-2" src="/svg/coin-p.svg" alt="coin">
        小額捐款
    </button>
</div>

<style lang="postcss">
    .cross {
        @apply relative
        w-[40px]
        h-[40px]
        after:absolute 
        after:top-1/2
        after:right-0
        after:w-full
        after:h-1
        after:z-10
        after:bg-white
        after:origin-center
        after:content-[''] 
        after:-rotate-45 
        before:absolute 
        before:top-1/2
        before:right-0
        before:w-full
        before:h-1
        before:z-10
        before:bg-white
        before:origin-center
        before:content-[''] 
        before:rotate-45;
    }

</style>
