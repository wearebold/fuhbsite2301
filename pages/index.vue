<template>
    <div>
        <Hero
        title="Welcome to My Website"
        description="Explore our amazing content and services."
        buttonLabel="Get Started"
        :heroImagePath="heroURL"
        />

        <Services />

        <PostsLatest />

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
  },
  setup() {
    // Use the onMounted hook to execute code when the component is mounted
    onMounted(() => {
        const primaryBg = "#d999bf";
        const primarySecondary = "#7b064d";
        const primaryTertiary = "#ce1985";

      // Update CSS custom properties
      document.documentElement.style.setProperty("--primary-bg", primaryBg);
      document.documentElement.style.setProperty("--primary-secondary", primarySecondary);
      document.documentElement.style.setProperty("--cursor-fill", primaryTertiary);
    });

    // Your component logic
  }
};
</script>
