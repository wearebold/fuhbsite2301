<template> 
      <section
      class="site-nav | text-neutral-100 antialiased | py-16 sm:py-20 md:py-24 lg:py-28" 
      style="background-color: var(--background-split);"      
      >
        <h2 class="text-xs uppercase tracking-widest font-body | flex flex-col items-center">
          <span class="text-caps tracking-widest uppercase semibold">Services</span>
          <span class="block w-px h-8 bg-neutral-100 mx-auto mt-4"></span>
        </h2>
        <ul class="grid grid-cols-2 gap-8 justify-center items-center h-full max-w-screen-xl w-full px-4 mx-auto | md:grid-cols-3 md:gap-0">
          <li class="basis-4/12">
            <ul class="flex flex-col gap-4 items-center | md:gap-8">
              <li>
                <span class="text-caps uppercase tracking-widest">Hair</span>
                <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
              </li>
              <li>
                <NuxtLink to="/services/hair/bridal" class="block font-header text-services">Bridal</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/hair/cutting" class="block font-header text-services">Cutting</NuxtLink>
              </li>                
              <li>
                <NuxtLink to="/services/hair/balayage-colour" class="block font-header text-services">Balayage</NuxtLink>
              </li> 
              <li>
                <NuxtLink to="/services/hair/colouring" class="block font-header text-services">Colouring</NuxtLink>
              </li>                    
              <li>
                <NuxtLink to="/services/hair/treatments" class="block font-header text-services">Treatments</NuxtLink>
              </li>                                                                  
            </ul>
          </li>
          <li class="basis-4/12 | flex-col gap-4 items-center hidden | md:flex md:gap-8">
              <NuxtLink to="/book" class="block w-full" style="max-width: clamp(4rem, 2.182rem + 9.09vw, 9rem);" aria-label="Book Now">
                  <img class="motion-safe:hover:animate-spin-slow" src="~/assets/img/book-now.svg" alt="Book Now" />
              </NuxtLink>
          </li>
          <li class="basis-4/12">
            <ul class="flex flex-col gap-4 items-center | md:gap-8">
              <li>
                  <span class="text-caps uppercase tracking-widest">Beauty</span>
                  <span class="block w-px h-6 bg-neutral-100 mx-auto mt-4"></span>
              </li>
              <li>
                <NuxtLink to="/services/beauty/caci" class="block font-header text-services">CACI</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/beauty/nails" class="block font-header text-services">Nails</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/beauty/waxing" class="block font-header text-services">Waxing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/beauty/hd-brows" class="block font-header text-services">HD Brows</NuxtLink>
              </li>                            
              <li>
                <NuxtLink to="/services/beauty/dermalogica" class="block font-header text-services">Dermalogica</NuxtLink>
              </li>              
            </ul>
          </li>          
        </ul>
        <div class="px-4 mx-auto flex flex-col items-center justify-center mt-4 | md:hidden">
          <span class="block w-px h-8 bg-neutral-100 mx-auto my-4"></span>
        </div>
        <div class="flex flex-col gap-4 items-center | md:hidden">
              <NuxtLink to="/book" class="block w-full" style="max-width: clamp(4rem, 2.182rem + 9.09vw, 9rem);" aria-label="Book Now">
                  <img class="motion-safe:hover:animate-spin-slow" src="~/assets/img/book-now.svg" alt="Book Now" />
              </NuxtLink>
            </div>
            <div class="px-4 mx-auto flex flex-col items-center justify-center | md:hidden3">
          <span class="block w-px h-8 bg-neutral-100 mx-auto my-4"></span>
        </div>            
    </section>
  </template>
  
  <script>
  
  </script>
  
  <style lang="scss" scoped>
      a {
          transition: color 0.2s ease-in-out;
          /* Hover effect to make hovered <a> tags white */
          &:hover {
              @apply text-neutral-400; /* Hovered links stay white */
          }
  
          /* Make other <a> tags greyed out */
          &:not(:hover):not(:focus) {
             color: white; /* Change to your desired grey color */
          }        
      }

  </style>
  