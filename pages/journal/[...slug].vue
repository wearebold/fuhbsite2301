<template>
  <div>
    <article class="c-article">
      <header
        class="py-24 text-center"
        style="background-color: var(--primary-bg); color: white"
      >
        <h1 class="block font-header text-services mb-0">
          {{ data.article.title }}
        </h1>
        <span class="block w-px h-2 bg-neutral-100 mx-auto my-4"></span>
        <p class="text-caps font-body uppercase tracking-widest text-center">
            {{ data.article.dateFormated }}
        </p>
      </header>
      <div
        class="py-12 antialiased"
        style="background-color: var(--primary-secondary); color: white"
      >
        <div class="max-w-screen-xl w-full px-4 mx-auto">
          <img :src="data.article.img" alt="dummy-journal" style="max-width: 320px;" class="c-article__hero mx-auto mb-12"/>
          <ContentRenderer :value="data.article" class="max-w-prose mx-auto c-content">
            <!-- render rich text from document
            <MarkdownRenderer :value="data.article" /> -->

            <!-- display if document content is empty -->
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>

      <!-- PrevNext Component -->
      <PrevNext :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent("journal")
    .only(["_path", "title", "img", "description"])
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
</script>

<style lang="scss">
.c-article__hero {
    clip-path: inset(0% 0% -100% 0% round 100vw);
  transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform-origin: center;
//   transform: scale(0.9);
//   mix-blend-mode: luminosity;
}

.c-content {
    * + * {
        margin-bottom: 1rem;
    }

    h2,h3,h4,h5,h6  {
        margin-top: 1rem;
        margin-bottom: 2rem;        
    }
}
</style>
