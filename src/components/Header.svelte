<script lang="ts">
    let activeIndex = 0
    const handleClick = (index: number) => {
        activeIndex = index
    }

    const menu = [
        {id: 'advocate', title: '候選人主張'},
        {id: 'activity', title: '最新活動'},
        {id: 'issue', title: '政策議題'},
        {id: 'mailBox', title: '民眾服務信箱'},
    ]

</script>

<header class="bg-white h-[100px] fixed w-full top-0 left-0 z-50 border-[5px] border-primary border-b-0">
    <div class="container flex items-center justify-between h-full">
        <img class="logo w-[236px] h-[58px] flex-1" src="/svg/Logo.svg" alt="logo">
        <div class="flex items-center w-2/3">
            <ul class="flex">
                {#each menu as item, i}
                    <li class="menu-item cus-text-h5" class:active={i === activeIndex} >
                        <a href={`#${item.id}`} on:click={() => handleClick(i)}>
                            {item.title}
                        </a>                   
                    </li>
                {/each}
            </ul>
            <button class="flex items-center px-4 py-2 text-white cursor-pointer cus-text-h5 rounded-3xl bg-primary">
                <iconify-icon icon="mdi:attach-money"></iconify-icon>
                小額捐款
            </button>
        </div>
    </div>
</header>


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
</style>
