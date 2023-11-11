<footer class="h-[176px] bg-primary py-10 relative cat">
    <div class="container">
        <div class="flex items-center justify-between">
            <img src="/svg/logo-white.svg" alt="">
            <ul class="text-white">
                <li>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</li>
                <li>電話：(02) 888-5678 </li>
                <li>郵件：meowoffice@linmeow.tw</li>
            </ul>
        </div>
        <div class="pt-4 text-sm text-center text-gray-400">版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</div>
    </div>
</footer>

<style lang="postcss">
    .cat {
        @apply after:absolute 
        after:-top-[170px]
        after:left-60
        after:bg-contain
        after:bg-no-repeat
        after:w-[500px]
        after:h-[300px]
        after:z-10
        after:bg-cat
        after:content-[''];  
    }
</style>
