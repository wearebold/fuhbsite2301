<!-- components/Hero.vue -->
<template>
    <div class="relative">

        <div class="hero__bg | grid grid-rows-2">
          <div></div>
          <div style="background: var(--primary-bg);"></div>
        </div>

        <section class="hero">
        <!-- <div class="hero-content">
            <h1 class="hero-title">{{ title }}</h1>
            <p class="hero-description">{{ description }}</p>
            <div class="hero-button">
            <button class="cta-button">{{ buttonLabel }}</button>
            </div>
        </div> -->
          <div class="hero-image">
              <NuxtImg
              @load="animateHeroImage"
              class="hero__img h-full w-full object-cover"
              preload
              :src="heroImagePath"
              alt="Hero Image"
              layout="fill"
              object-fit="cover"
              />
          </div>
        </section>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      buttonLabel: String,
      heroImagePath: String, // Add imagePath as a prop
    },
    methods: {
      animateHeroImage() {
        // Animate the hero image by adding a class to remove grayscale effect
        const hero = this.$el.querySelector(".hero");
        hero.classList.add('anim-scale');
        // const heroImage = this.$el.querySelector('.grayscale-transition');
        // heroImage.classList.remove('grayscale');
        
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  /* Add your styles for the hero section here */
  .hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: 100svh;
    height: calc(100svh - 94px);
    transform: scale(1);       
    transform-origin: top center;
    will-change: transform;
    transition: all 0.3s 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);

    &.anim-scale {
        transform: scale(0.9);
        // clip-path: inset(0% 35% -100% 35% round 100vw);
    }
  }

  .hero__bg {
    height: 100vh;
    height: 100svh;
    height: calc(100svh - 94px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    //background: linear-gradient(0deg, var(--primary-bg) 0%, var(--primary-bg) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
  .hero-content {
    text-align: center;
    z-index: 1;
  }
  
  .hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-button {
    margin-top: 1rem;
  }
  
  /* Style the button and other elements as needed */
  
  /* Ensure the image container takes the full hero section */
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  /* Define a CSS transition for the grayscale property */
  .grayscale-transition {
    transition: filter 0.3s 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  } 

  </style>
  