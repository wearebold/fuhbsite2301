<template>
    <div>
        <Hero
        title="Welcome to My Website"
        description="Explore our amazing content and services."
        buttonLabel="Get Started"
        :heroImagePath="heroURL"
        />

        <Services />
    </div>
</template>

<script>
export default {
  data() {
    return {
        heroURL: '/dummy-hero.jpg', // Initial image path
    };
  }
};
</script>

<style lang="scss" scoped>
</style>