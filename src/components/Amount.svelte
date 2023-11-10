<script lang="ts">

</script>


<div class="flex items-center font-oswald cus-text-h1 text-primary">
    <span>NT$</span> <div class="amount"></div>
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
