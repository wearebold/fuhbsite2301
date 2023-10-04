<!-- ./components/PrevNext.vue -->

<script setup>
// define prev and next props
defineProps(["prev", "next"]);
</script>

<template>
  <ul class="prev-next-cont flex flex-row justify-between items-center">
    <li class="link-item prev">
      <NuxtLink v-if="prev" :to="prev._path" aria-label="Prev">
        <span class="font-header text-h2"> Prev </span>
      </NuxtLink>
    </li>
    <li class="link-item next self-end">
      <NuxtLink v-if="next" :to="next._path" arai-label="Next">
        <span class="font-header text-h2"> Next</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.prev-next-cont {
  position: fixed;
  top: 50%;
  width: 100%;
  left: 0;
  right: 0;
  mix-blend-mode: soft-light;

  a {
    transform: rotate(-90deg);
    display: block;
    transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);  
    &:hover,
    &:focus {      
      color: var(--color-primary);
      transform: scale(0.9) rotate(0deg);
    }
  }
}
</style>