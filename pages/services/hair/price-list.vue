<template>
    <section class="grid grid-cols-1">
      <!-- Render the services here -->
      <article v-for="categoryData in data.services" :key="categoryData.category">
        <div v-show="categoryData.category" class="py-24 text-center" style="background-color: var(--primary-bg); color: white;">
            <h2 class="block font-header text-services">{{ categoryData.category }}</h2>
        </div>
        <div class="py-12 antialiased" style="background-color: var(--primary-secondary); color: white;">
            <div class=" max-w-screen-xl w-full px-4 mx-auto">
                <div v-show="categoryData.subcategory" class="flex flex-col justify-center pb-12">                    
                    <h3 class="text-caps font-body uppercase tracking-widest text-center">{{ categoryData.subcategory }}</h3>
                    <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
                </div>

                <ul class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 my-6">
                    <li v-for="service in categoryData.services" :key="service.name">
                        <h4 class="mb-2 font-body font-bold uppercase tracking-wider">{{ service.name }}</h4>
                        <ul>
                            <li v-for="(price, priceType) in service.prices" :key="priceType">
                                <p>{{ priceType }}: {{ price }}</p>
                            </li>
                        </ul>                       
                    </li>
                </ul>
            </div>
        </div>
      </article>
    </section>
  </template>
  
  <script setup>

        const { data } = await useAsyncData('services/hair/price-list', () => queryContent('services/hair/price-list').findOne())

        console.log(data.value)

 
  </script>
  