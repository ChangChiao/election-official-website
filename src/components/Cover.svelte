<script lang="ts">
    import gsap from "gsap";
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
	import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        const nameAnimation = gsap.from(".name", {
            y: -200, 
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            paused: true
        });

        const keepAnimation = gsap.from(".keep", {
            y: 200, // 向上移動的距離
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            paused: true
        });

        const engNameAnimation = gsap.from(".eng-name", {
            x: 300, 
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            paused: true
        });

        // 監聽滾動事件
        ScrollTrigger.create({
            trigger: "#cover",
            start: "top 90%",
            onEnter: () => {
                nameAnimation.play(),
                engNameAnimation.play(),
                keepAnimation.play()
            },
            onLeaveBack: () => {
                nameAnimation.reverse()
                engNameAnimation.reverse()
                keepAnimation.reverse()
            }
        });
    })  
</script>

<div data-aos="fade-up" id="cover" class="relative z-20 wrapper pt-32 lg:h-[1200px] h-[1600px] bg-secondary-gray">
    <div class="container-box">
        <div class="flex items-end justify-center lg:justify-between">
            <div class="flex flex-col items-center w-full lg:block">
                <img class="pb-4" src="/svg/subtitle.svg" alt="subtitle">
                <img class="hidden lg:block" src="/svg/slogan.svg" alt="slogan">
                <img class="lg:hidden w-[90%]" src="/svg/slogan-m.svg" alt="slogan">
            </div>
            <img class="hidden name lg:block" src="/svg/name.svg" alt="">
        </div>
        <div class="flex justify-between w-full pt-6" id="advocate">
            <img class="scale-75 keep lg:scale-100" src="/svg/KEEP IT POSSIBLE.svg" alt="keep">
            <div class="w-full pl-4">
                <img class="hidden mb-8 lg:block eng-name" src="/svg/Miao Li-Han.svg" alt="name">
                <img class="w-full mb-64 lg:hidden eng-name" src="/svg/Miao Li-Han-m.svg" alt="name">
                <div class="w-full lg:w-full ml-10 p-8 lg:rounded-tl-[50px]  lg:rounded-br-[50px] rounded-tl-[100px]  rounded-br-[100px] border-4 border-primary bg-white h-[400px] relative boundary person ">
                    <h3 class="pb-6 text-xl font-bold text-center lg:cus-text-h1">護航台灣幸福經濟  從照顧每一隻貓咪開始</h3>
                    <p class="body-md lg:cus-text-h4">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
                    </p>
                    <p class="pt-4 body-md lg:cus-text-h4">
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
        lg:before:rounded-tl-[50px]  
        lg:before:rounded-br-[50px] 
        before:rounded-tl-[100px]  
        before:rounded-br-[100px] 
        before:bg-primary
        before:-z-10
        before:-left-2
        before:-top-0
        lg:before:-left-4
        lg:before:top-2
        before:h-[400px]
        before:w-full
        before:content-['']
    }    
    .person {
        @apply after:absolute
        after:bg-contain
        after:bg-no-repeat
        after:bg-person
        after:z-10
        after:bottom-[394px]
        after:-right-10
        after:w-[500px]
        after:h-[500px]
        md:after:w-[600px]
        md:after:h-[600px]
        lg:after:bottom-[394px]
        lg:after:right-0
        /* lg:after:w-[600px]
        lg:after:h-[600px] */
        after:content-[''];  
    }

</style>
