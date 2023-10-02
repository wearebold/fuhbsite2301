<template>
  <div>


      <article class="article | h-full py-24">
      <h1>{{ data.article.title }}</h1>
      <p>{{ data.article.description }}</p>
    </article>

    <!-- PrevNext Component -->
  <PrevNext class="my-24" :prev="prev" :next="next" />
  </div>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
// fetch document where the document path matches with the cuurent route
let article = queryContent().where({ _path: path }).findOne();
// get the surround information,
// which is an array of documeents that come before and after the current document
let surround = queryContent()
    .where({ _dir: ['services/hair'] }) // Add the category filter
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

return {
  article: await article,
  surround: await surround,
};
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// set the meta
useHead({
title: data.value.article.title,
meta: [
  { name: "description", content: data.value.article.description },
  {
    hid: "og:image",
    property: "og:image",
    content: `https://site.com/${data.value.article.img}`,
  },
],
});

// After fetching data, set the CSS variables
onMounted(() => {
  const root = document.documentElement;
  root.style.setProperty('--primary-bg', data.value.article.themePrimary);
  root.style.setProperty('--primary-secondary', data.value.article.themeSecondary);
  root.style.setProperty('--cursor-fill', data.value.article.themeSecondary);
});

</script>

<style lang="scss" scoped>

</style>