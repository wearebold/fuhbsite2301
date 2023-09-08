<template>
  <section
    class="text-neutral-100 antialiased | py-16 sm:py-20 md:py-24 lg:py-28"
    style="background-color: var(--background-split)"
  >
    <h2
      class="text-xs uppercase tracking-widest font-body | flex flex-col items-center mb-6 | sm:mb-10 | md:mb-14 | lg:mb-20"
    >
      <span class="text-caps tracking-widest uppercase semibold">Journal</span>
      <span class="block w-px h-8 bg-neutral-100 mx-auto mt-4"></span>
    </h2>
    <ContentList
      path="/journal"
      :query="{
        only: [
          'title',
          'description',
          'tags',
          '_path',
          'img',
          'date',
          'dateFormated',
        ],
        $sort: {
          date: 'desc', // Replace 'date' with your actual date field name
        },
        $limit: 3, // Limit the results to the latest 3 articles
        $sensitivity: 'base',
      }"
    >
      <!-- Default list slot -->
      <template v-slot="{ list }">
        <div
          class="article-list | grid grid-cols-1 gap-x-4 gap-y-8 justify-center items-start h-full max-w-screen-xl w-full px-4 mx-auto | sm:grid-cols-2 sm:gap-8 | md:grid-cols-3"
        >
          <article
            v-for="(article, index) in list"
            :key="article._path"
            class="article-list__item | relative"
            :class="{
              'sm:hidden': index === list.length - 1,
              'md:block': index === list.length - 1,
            }"
          >
            <div class="flex flex-col-reverse gap-4">
                <NuxtLink
                    class="article-list__link | a11y-link | flex flex-col justify-center items-center text-center"
                    :to="article._path"
                >
                    <time
                    class="text-caps uppercase tracking-widest"
                    :datetime="article.date"
                    >
                    {{ article.dateFormated }}</time
                    >
                    <span
                    class="block w-px h-2 bg-neutral-100 mx-auto mt-4"
                    ></span>
                    <h3 class="text-h2 leading-tight">
                    {{ article.title }}
                    </h3>
                </NuxtLink>

              <img
                :src="`${article.img}`"
                :alt="article.title"
                class="aritcle-list__img | h-full w-full object-cover shrink-0"
              />
            </div>
          </article>
        </div>
      </template>

      <!-- Not found slot to display message when no content us is found -->
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </section>
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
</script>

<style lang="scss" scoped>
.aritcle-list__img {
    clip-path: inset(0% 0% 0% 0% round 100vw);
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform-origin: center;
  transform: scale(0.9);
  mix-blend-mode: luminosity;
}

.article-list__link {
  &:hover,
  &:focus {
    + .aritcle-list__img {
      will-change: clip-path;      
      clip-path: inset(0% 0% -100% 0% round 100vw);
      transform: scale(1);
      mix-blend-mode: normal;
    }
  }
}
</style>
