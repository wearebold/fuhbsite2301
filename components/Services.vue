<template> 
      <section
      class="site-nav | bg-neutral-950 text-neutral-100 antialiased | py-24"       
      >
        <h2 class="text-xs uppercase tracking-widest font-body | flex flex-col items-center">
          <span class="text-xs tracking-widest uppercase semibold">Services</span>
          <span class="block w-px h-8 bg-neutral-100 mx-auto mt-4"></span>
        </h2>
        <ul class="flex flex-wrap flex-row justify-center items-center h-full max-w-screen-xl px-4 mx-auto">
          <li class="basis-4/12">
            <ul class="flex flex-col gap-8 items-start | md:items-center">
              <li>
                <span class="text-caps uppercase tracking-widest">Hair</span>
                <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
              </li>
              <li>
                <NuxtLink to="/services/bridal" class="block font-header text-h1">Bridal</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/cutting" class="block font-header text-h1">Cutting</NuxtLink>
              </li>                
              <li>
                <NuxtLink to="/services/balayage-colour" class="block font-header text-h1">Balayage</NuxtLink>
              </li> 
              <li>
                <NuxtLink to="/services/balayage-colour" class="block font-header text-h1">Colouring</NuxtLink>
              </li>                    
              <li>
                <NuxtLink to="/services/treatments" class="block font-header text-h1">Treatments</NuxtLink>
              </li>                                                                  
            </ul>
          </li>
          <li class="basis-4/12 | flex flex-col gap-8 items-center">
              <NuxtLink to="/book" class="block w-full" style="max-width: clamp(4rem, 2.182rem + 9.09vw, 9rem);" aria-label="Book Now">
                  <img class="motion-safe:hover:animate-spin-slow" src="~/assets/img/book-now.svg" alt="Book Now" />
              </NuxtLink>
          </li>
          <li class="basis-4/12">
            <ul class="flex flex-col gap-8 items-end | md:items-center">
              <li>
                  <span class="text-caps uppercase tracking-widest">Beauty</span>
                  <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
              </li>
              <li>
                <NuxtLink to="/services/caci" class="block font-header text-h1">CACI</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/nails" class="block font-header text-h1">Nails</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/waxing" class="block font-header text-h1">Waxing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/hd-brows" class="block font-header text-h1">HD Brows</NuxtLink>
              </li>                            
              <li>
                <NuxtLink to="/services/dermalogica" class="block font-header text-h1">Dermalogica</NuxtLink>
              </li>              
            </ul>
          </li>          
        </ul>
    </section>
  </template>
  
  <script>
  
  </script>
  
  <style lang="scss" scoped>
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

  </style>
  