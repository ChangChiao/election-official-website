<script lang="ts">
    import { menu } from '../configs/menu';
	import MobileMenu from './MobileMenu.svelte';
    let activeIndex = 0
    let isOpenMenu: boolean | null = null;
    const handleClick = (index: number) => {
        activeIndex = index
    }

    const handleOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    }

</script>

<header class="bg-white h-[66px] lg:h-[100px] fixed w-screen top-0 left-0 z-50 border-[5px] border-primary border-b-0">
    <div class="flex items-center justify-between h-full container-box">
        <img class="logo w-[160px] lg:w-auto" src="/svg/Logo.svg" alt="logo">
        <div class="flex items-center justify-end w-2/3">
            <ul class="hidden lg:flex">
                {#each menu as item, i}
                    <li class="menu-item cus-text-h5 hover:opacity-80" class:active={i === activeIndex} >
                        <a href={`#${item.id}`} on:click={() => handleClick(i)}>
                            {item.title}
                        </a>                   
                    </li>
                {/each}
            </ul>
            <button class="items-center hidden px-4 py-2 text-white cursor-pointer lg:flex cus-text-h5 rounded-3xl bg-primary">
                <img class="mr-2" src="/svg/coin.svg" alt="coin">
                小額捐款
            </button>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={handleOpenMenu} class="hamburger lg:hidden cursor-pointer flex flex-col items-end w-[50px] h-[50px]">
                <div class="w-1/2 line"></div>
                <div class="w-3/4 line"></div>
                <div class="w-1/3 line"></div>
            </div>
        </div>
    </div>
</header>

<MobileMenu on:closeMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />


<style lang="postcss">
    .menu-item{
        @apply mr-8 relative cursor-pointer;
    }
    .active {
        @apply after:absolute 
        after:left-0
        after:-bottom-2
        after:h-1
        after:w-full 
        after:bg-primary
        after:content-[''];
    }

    .line{
       @apply h-1 bg-primary rounded-sm mt-2; 
    }
</style>
