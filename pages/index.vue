<template>
    <div>
        <Hero
        title="Welcome to My Website"
        description="Explore our amazing content and services."
        buttonLabel="Get Started"
        :heroImagePath="heroURL"
        />

        <Services />

        <NuxtErrorBoundary @error="someErrorLogger">
            <!-- You use the default slot to render your content -->
            <template #error="{ error, clearError }">
            You can display the error locally here: {{ error }}
            <button @click="clearError">
                This will clear the error.
            </button>
            </template>
        </NuxtErrorBoundary>
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