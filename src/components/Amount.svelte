<script lang="ts">
	import { onMount } from "svelte";

  let amountElemet: HTMLDivElement;
  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }



  onMount(() => {
    const counterUp = window.counterUp.default;
    const handleIntersection = ((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(ele => {
        if(ele.isIntersecting){
          counterUp( amountElemet, {
            duration: 1000,
            delay: 16,
          })
          observer.unobserve(ele.target)
        }
      })
    })
    const observer = new IntersectionObserver(handleIntersection, option);
    observer.observe(amountElemet);
  })

</script>


<div bind:this={amountElemet} class="flex h-[100px] items-center font-oswald cus-text-h1 lg:text-6xl text-primary">
    <span>NT$</span> <div bind:this={amountElemet} class="amount">987,655,873</div>
</div>

