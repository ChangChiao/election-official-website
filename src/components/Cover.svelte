<div class="relative z-20 wrapper h-[1200px] bg-secondary-gray">
    <div class="container">
        <div class="flex items-end justify-between">
            <div class="slogan">
                <img class="pb-4" src="/svg/subtitle.svg" alt="subtitle">
                <img class="" src="/svg/slogan.svg" alt="slogan">
            </div>
            <img src="/svg/name.svg" alt="">
        </div>
        <div class="flex justify-between w-full pt-6">
            <img src="/svg/KEEP IT POSSIBLE.svg" alt="keep">
            <div class="pl-4 w-[85%]">
                <img class="mb-6" src="/svg/Miao Li-Han.svg" alt="name">
                <div class="w-full ml-10 p-8 rounded-tl-[50px]  rounded-br-[50px] border-4 border-primary bg-white h-[300px] relative boundary person ">
                    <h3 class="cus-text-h1">護航台灣幸福經濟  從照顧每一隻貓咪開始</h3>
                    <p class="cus-text-h4">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
                    </p>
                    <p class="pt-4 cus-text-h4">
                        因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。

                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .boundary {
        @apply before:absolute
        before:rounded-tl-[50px]  
        before:rounded-br-[50px] 
        before:bg-primary
        before:-left-4
        before:-z-10
        before:top-1
        before:h-[320px]
        before:w-full
        before:content-['']
    }    
    .person {
        @apply after:absolute 
        after:bottom-[294px]
        after:right-0
        after:bg-contain
        after:bg-no-repeat
        after:w-[600px]
        after:h-[600px]
        after:z-10
        after:bg-person
        after:content-[''];  
    }

</style>