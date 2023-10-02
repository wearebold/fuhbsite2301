<template>
  <li class="basis-4/12">
    <ul class="flex flex-col gap-4 items-center | md:gap-8">
      <li>
        <span class="text-caps uppercase tracking-widest">Hair</span>
        <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
      </li>

      <ContentList
        path="/services/hair"
        :query="{
          only: [
            'title',
            'description',
            '_path',
            'img',
            'themePrimary',
            'themeSecondary',
          ],
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <template v-for="article in list" :key="article._path">
            <li v-if="article._path !== '/services/hair/price-list'" class="article-item">
                <NuxtLink
                class="block font-header text-services"
                :to="article._path"
                @mouseenter="onMouseEnterTheme"
                @mouseleave="onMouseLeaveTheme"
                :data-theme-primary="article.themePrimary"
                :data-theme-secondary="article.themeSecondary"
                data-anim-hover
                >
                {{ article.title }}
                <NuxtImg v-if="article.img"
                    class="h-full w-full object-cover hidden"
                    :src="article.img"
                    alt=""
                    layout="fill"
                    object-fit="cover"
                />
                </NuxtLink>
            </li>
          </template>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <li>No articles found.</li>
        </template>
      </ContentList>

      <li>
        <span class="block w-px h-6 bg-neutral-100 mx-auto mb-4"></span>
        <NuxtLink 
        to="/services/hair/price-list"
        class="text-caps uppercase tracking-widest">Price List</NuxtLink>        
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      originalPrimaryBg: "#d999bf",
      originalPrimarySecondary: "#7b064d",
    };
  },
  methods: {
    onMouseEnterTheme(event) {
      const primaryBg = event.target.getAttribute("data-theme-primary");
      const primarySecondary = event.target.getAttribute(
        "data-theme-secondary"
      );

      // Store the original values
      this.originalPrimaryBg = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--primary-bg");
      this.originalPrimarySecondary = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--primary-secondary");

      // Update CSS custom properties
      document.documentElement.style.setProperty("--primary-bg", primaryBg);
      document.documentElement.style.setProperty(
        "--primary-secondary",
        primarySecondary
      );
      document.documentElement.style.setProperty(
        "--cursor-fill",
        primarySecondary
      );
    },
    onMouseLeaveTheme() {
      // Revert to the original CSS custom properties
      document.documentElement.style.setProperty(
        "--primary-bg",
        this.originalPrimaryBg
      );
      document.documentElement.style.setProperty(
        "--primary-secondary",
        this.originalPrimarySecondary
      );
      document.documentElement.style.setProperty(
        "--cursor-fill",
        this.originalPrimarySecondary
      );
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  transition: color 0.2s ease-in-out;
  /* Hover effect to make hovered <a> tags white */
  &:hover {
    color: var(--primary-state); /* Hovered links stay white */
  }

  /* Make other <a> tags greyed out */
  &:not(:hover):not(:focus) {
    color: white; /* Change to your desired grey color */
  }
}
</style>
