<template>
  <section class="grid grid-cols-1" style="margin-top: clamp(4.5rem, 4.371rem + 0.86vw, 5.75rem);">
    <!-- Render the services here -->
    <article v-for="categoryData in data.services" :key="categoryData.category">
      <div
        v-show="categoryData.category"
        class="py-24 text-center"
        style="background-color: var(--primary-bg); color: white"
      >
        <h2 class="block font-header text-services">
          {{ categoryData.category }}
        </h2>
      </div>
      <div
        class="py-12 antialiased"
        style="background-color: var(--primary-secondary); color: white"
      >
        <div class="max-w-screen-xl w-full px-4 mx-auto">
          <div
            v-show="categoryData.subcategory"
            class="flex flex-col justify-center pb-12"
          >
            <h3
              class="text-caps font-body uppercase tracking-widest text-center"
            >
              {{ categoryData.subcategory }}
            </h3>
            <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
          </div>

          <ul class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 my-6">
            <li v-for="service in categoryData.services" :key="service.name">
              <h4 class="mb-2 font-body font-bold uppercase tracking-wider">
                {{ service.name }}
              </h4>
              <p>Price: {{ service.price }}</p>
              <p>{{ service.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("services/beauty/price-list", () =>
  queryContent("services/beauty/price-list").findOne()
);

console.log(data.value);

onMounted(() => {
  const primaryBg = "#E11D48";
  const primarySecondary = "#9F1239";

  // Update CSS custom properties
  document.documentElement.style.setProperty("--primary-bg", primaryBg);
  document.documentElement.style.setProperty(
    "--primary-secondary",
    primarySecondary
  );
  document.documentElement.style.setProperty("--cursor-fill", primarySecondary);
});
</script>
