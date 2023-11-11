<script lang="ts">
	import { onMount } from "svelte";

let flag = false;
let amountElemet: HTMLDivElement;
const option = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
}



onMount(() => {
  const handleIntersection = ((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(ele => {
      if(ele.isIntersecting){
        flag = true;
        observer.unobserve(ele.target)
      }
    })
  })
  const observer = new IntersectionObserver(handleIntersection, option);
  observer.observe(amountElemet);
})

</script>


<div bind:this={amountElemet} class="flex items-center font-oswald cus-text-h1 text-primary">
  {#if flag}  
  <span>NT$</span> <div class="amount"></div>
  {/if}
</div>


<style lang="postcss">
   @property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.amount {
  animation: counter 4s forwards ease-in-out;
  counter-reset: num var(--num);
  padding: 1rem 0;
}
.amount::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 987655000;
  }
  to {
    --num: 987655873;
  }
}

</style>
