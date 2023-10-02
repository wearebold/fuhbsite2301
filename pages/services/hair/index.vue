<template>
    <div>
        <h1>Hair</h1>

        <ContentList
      path="/services/hair"
      :query="{
        only: ['title', 'description', 'tags', '_path', 'img', 'themePrimary', 'themeSecondary'],
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
                <h2>{{ article.title }}</h2>              
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

</script>

<style lang="scss" scoped>

</style>