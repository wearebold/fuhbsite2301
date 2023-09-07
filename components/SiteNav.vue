<template>
  <div>
    <button
      class="text-caps tracking-widest uppercase semibold relative z-20"
      :class="{ 'text-neutral-100': isOpen, 'text-neutral-950': !isOpen }"
      ref="menuButton"
      @click="toggleMenu"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
    >
      {{ isOpen ? "Close" : "Menu" }}
    </button>
    <nav
    class="site-nav | bg-neutral-950 text-neutral-100 antialiased | py-24"
      ref="menu"
      :aria-hidden="!isOpen"
      v-if="isOpen"
      role="menu"
      @keydown.escape="closeMenu"
    >
      <h2 class="text-xs uppercase tracking-widest font-body | flex flex-col items-center">
        <span class="text-caps tracking-widest uppercase semibold">Menu</span>
        <span class="block w-px h-8 bg-neutral-100 mx-auto mt-4"></span>
      </h2>
      <ul class="flex flex-wrap flex-row justify-center items-center h-full max-w-screen-xl px-4 mx-auto">
        <li class="basis-6/12 | md:basis-4/12">
          <ul class="flex flex-col gap-4 items-center | md:gap-8">
            <li>
              <span class="text-caps uppercase tracking-widest">Services</span>
              <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
            </li>
            <li>
              <NuxtLink to="/services/hair" class="block font-header text-nav-header">Hair</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/bridal" class="block font-header text-nav-header">Bridal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/beauty" class="block font-header text-nav-header">Beauty</NuxtLink>
            </li>            
          </ul>
        </li>
        <li class="basis-4/12 | hidden flex-col gap-8 items-center | md:flex">
            <NuxtLink to="/book" class="block w-full" style="max-width: clamp(4rem, 2.182rem + 9.09vw, 9rem);" aria-label="Book Now">
                <img class="motion-safe:hover:animate-spin-slow" src="~/assets/img/book-now.svg" alt="Book Now" />
            </NuxtLink>
        </li>
        <li class="basis-6/12 | md:basis-4/12">
          <ul class="flex flex-col gap-4 items-center | md:gap-8">
            <li>
                <span class="text-caps uppercase tracking-widest">Info</span>
                <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
            </li>
            <li>
              <NuxtLink to="/faqs" class="block font-header text-nav-header">FAQs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/journal" class="block font-header text-nav-header">Journal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us" class="block font-header text-nav-header">About Us</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="basis-12/12 | flex flex-col items-center">
            <span class="text-caps uppercase tracking-widest">
                <span>Get in touch</span>
                <span class="block w-px h-8 bg-neutral-100 mx-auto mt-4"></span>
            </span>
            <NuxtLink to="/contact-us" class="block font-header text-nav-header">Contact Us</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SiteNav",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$nextTick(() => {
          this.$refs.menu.querySelector("a").focus(); // Focus on the first link when opening
        });
      } else {
        this.$refs.menuButton.focus(); // Focus back on the button when closing
      }
    },
    closeMenu() {
      this.isOpen = false;
      this.$refs.menuButton.focus(); // Focus back on the button when closing
    },
  },
};
</script>

<style lang="scss" scoped>
.site-nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    height: 100vh;
    height: 100svh;
    width: 100%;

    a {
        transition: color 0.2s ease-in-out;
        /* Hover effect to make hovered <a> tags white */
        &:hover {
            color: white; /* Hovered links stay white */
        }

        /* Make other <a> tags greyed out */
        &:not(:hover):not(:focus) {
            @apply text-neutral-400; /* Change to your desired grey color */
        }        
    }
}
</style>
