<!-- ./app.vue -->
<script setup>

useHead({
  title: "Fusion Hair & Beauty Salon – Shrewsbury",
  meta: [
    { name: 'description', content: '' }
  ],
})

</script>
<template>
  <div>
    <div class="bg-noise"></div>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
    <svg class="cursor" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
		  <circle class="cursor__inner" cx="10" cy="10" r="5"/>
	  </svg>
  </div>
</template>