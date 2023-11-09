<script>
	import '../app.css';
</script>

<header class="bg-white h-[100px]" >
    <div class="container flex items-center justify-between h-full">
        <img class="logo w-[236px] h-[58px] flex-1" src="/svg/Logo.svg" alt="">
        <div class="flex items-center w-2/3">
            <ul class="flex">
                <li class="menu-item active cus-text-h5">候選人主張</li>
                <li class="menu-item cus-text-h5">最新活動</li>
                <li class="menu-item cus-text-h5">政策議題</li>
                <li class="menu-item cus-text-h5">民眾服務信箱</li>
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
