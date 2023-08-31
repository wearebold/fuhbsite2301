<template>
    <div>
        <h1>Beauty</h1>

              <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/services/beauty"
        :query="{
          only: ['title', 'description', 'img', '_path'],
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="">
            <li v-for="article in list" :key="article._path" class="">
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-32 shrink-0">
                    <img :src="`${article.img}`" :alt="article.title" class="rounded-lg max-h-[8rem]" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});
// set meta for page
useHead({
  title: "All Beauty Services",
  meta: [{ name: "description", content: "{{ description }}" }],
});
</script>

<style lang="scss" scoped>

</style>