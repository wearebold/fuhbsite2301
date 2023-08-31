<template>
  <div>
    <h1>Journal</h1>

    <ContentList
      path="/journal"
      :query="{
        only: ['title', 'description', 'tags', '_path', 'img'],
        // where: {
        //   tags: {
        //     $contains: filter,
        //   },
        // },
        $sensitivity: 'base',
      }"
    >
      <!-- Default list slot -->
      <template v-slot="{ list }">
        <ul class="article-list">
          <li v-for="article in list" :key="article._path" class="article-item">
            <NuxtLink :to="article._path">
              <div class="wrapper">
                <div class="img-cont w-32 shrink-0">
                  <img
                    :src="`${article.img}`"
                    :alt="article.title"
                    class="rounded-lg max-h-[8rem]"
                  />
                </div>
                <header>
                  <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                  <p>{{ article.description }}</p>
                  <!-- <ul class="article-tags">
                    <li
                      class="tag !py-0.5"
                      v-for="(tag, n) in article.tags"
                      :key="n"
                    >
                      {{ tag }}
                    </li>
                  </ul> -->
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

// get tag query
const {
  query: { tags },
} = useRoute();

const filter = ref(tags?.split(","));

// set meta for page
useHead({
  title: "Journal",
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});
</script>

<style lang="scss" scoped></style>
