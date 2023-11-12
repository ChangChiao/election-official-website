<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { actData } from '../configs/activity';
    import ActivityItem from "./ActivityItem.svelte";
</script>

<div class="block w-full lg:hidden">
    <Splide 
        options={{
            type: 'loop',
            gap: '3rem',
            autoWidth: true,
            autoplay: true,
            padding: '20%'
        }}>
        {#each actData as item}
            <SplideSlide>
                <ActivityItem {...item} />
            </SplideSlide>
        {/each}
    </Splide>
</div>


