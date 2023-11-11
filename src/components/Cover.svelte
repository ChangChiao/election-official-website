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

<div data-aos="fade-up" id="cover" class="relative z-20 wrapper pt-36 h-[1150px] bg-secondary-gray">
    <div class="container">
        <div class="flex items-end justify-between">
            <div class="slogan">
                <img class="pb-4" src="/svg/subtitle.svg" alt="subtitle">
                <img class="" src="/svg/slogan.svg" alt="slogan">
            </div>
            <img class="name" src="/svg/name.svg" alt="">
        </div>
        <div class="flex justify-between w-full pt-6" id="advocate">
            <img class="keep" src="/svg/KEEP IT POSSIBLE.svg" alt="keep">
            <div class="pl-4 w-[90%]">
                <img class="mb-6 eng-name" src="/svg/Miao Li-Han.svg" alt="name">
                <div class="w-full ml-10 p-8 rounded-tl-[50px]  rounded-br-[50px] border-4 border-primary bg-white h-[400px] relative boundary person ">
                    <h3 class="pb-6 text-center cus-text-h1">護航台灣幸福經濟  從照顧每一隻貓咪開始</h3>
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
        before:top-2
        before:h-[400px]
        before:w-full
        before:content-['']
    }    
    .person {
        @apply after:absolute 
        after:bottom-[394px]
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
