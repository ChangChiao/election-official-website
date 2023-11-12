<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { actData } from '../configs/activity';
    import ActivityItem from "./ActivityItem.svelte";
	import { onMount } from 'svelte';
	import { throttle } from '../utils/throttle';

    let mySlider: Splide
    let option = {
        type: 'loop',
        gap: '3rem',
        autoWidth: true,
        autoplay: true,
        padding: '20%',
        arrows: false,
    }
    
    const setOption = () => {
        console.log('window.innerWidth', window.innerWidth)
        const window_width = window.innerWidth
        if(window_width > 768){
            option = {
                ...option,
                gap: '5rem',
                padding: '35%'
            }
        }else if(window_width > 480){
            option = {
                ...option,
                gap: '3rem',
                padding: '20%'
            }
        }else{
            option = {
                ...option,
                gap: '0rem',
                padding: '6%'
            }
        }
        console.log('mySlider.splide')
        mySlider.splide.refresh();
    }
    
    onMount(() => {
        window.addEventListener(
            "resize",
            throttle((event: Event) => setOption(), 250)
        );  
        setOption()
    })
</script>

<div class="block w-full lg:hidden">
    <Splide 
        bind:this={ mySlider }
        on:refresh={() => console.log('rrrrr')}
        options={option}>
        {#each actData as item}
            <SplideSlide>
                <ActivityItem {...item} />
            </SplideSlide>
        {/each}
    </Splide>
</div>


