<div class="flex items-center cus-text-h2">
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
  padding: 2rem;
}
.amount::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 987650000;
  }
  to {
    --num: 987655873;
  }
}

</style>
