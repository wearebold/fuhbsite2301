<template>
    <div>
        <h1>Services</h1>


      
    </div>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// set meta for page
useHead({
  title: "Services",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>

<style lang="scss" scoped>

</style>