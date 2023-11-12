<footer class="lg:h-[176px] bg-primary lg:py-10 py-8 relative cat">
    <div class="container-box">
        <div class="flex items-center justify-between w-full pt-10 lg:pt-0">
            <img class="hidden lg:block" src="/svg/logo-white.svg" alt="">
            <ul class="mx-auto text-white lg:mx-0">
                <li>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</li>
                <li>電話：<a href="tel:028885678">(02) 888-5678</a> </li>
                <li>郵件：<a href="mailto:meowoffice@linmeow.tw">meowoffice@linmeow.tw</a></li>
            </ul>
        </div>
        <div class="pt-4 text-sm text-center text-secondary-gray">版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</div>
    </div>
</footer>

<style lang="postcss">
    .cat {
        @apply after:absolute 
        lg:after:-top-[170px]
        after:-top-[136px]
        lg:after:left-60
        lg:after:translate-x-0
        after:left-1/2
        after:-translate-x-1/2
        after:bg-contain
        after:bg-no-repeat
        lg:after:w-[500px]
        lg:after:h-[300px]
        after:w-[400px]
        after:h-[300px]
        after:z-10
        after:bg-cat
        after:content-[''];  
    }
</style>
