<template>
  <footer
    class="site-footer | text-neutral-100 antialiased | pb-16 | sm:pb-20 | md:pb-28"
  >
    <div class="bg-white relative">
      <div
        class="flex justify-center items-center | max-w-screen-xl w-full px-4 mx-auto"
      >
        <NuxtLink
          to="/"
          rel="home"
          class="site-footer__logo | flex justify-center items-center w-full absolute"
          style="
            color: var(--primary-bg);
          "
          aria-label="Book Now"
        >
          <svg
           style="max-width: clamp(4rem, 2.182rem + 9.09vw, 9rem);"
            class="site-footer__logo-svg motion-safe:hover:animate-spin-slow"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 102 102"
          >
            <path
              d="M.9 51C.9 23.3 23.4.8 51.1.8c27.7 0 50.2 22.5 50.2 50.2 0 27.7-22.5 50.2-50.2 50.2C23.4 101.3.9 78.8.9 51zm15.6-34.6C7.6 25.3 2.2 37.5 2.2 51s5.5 25.8 14.3 34.6c8.9 8.9 21.1 14.3 34.6 14.3s25.8-5.5 34.6-14.3C94.6 76.7 100 64.5 100 51s-5.5-25.8-14.3-34.6C76.9 7.5 64.7 2 51.1 2 37.6 2 25.4 7.5 16.5 16.4z"
            />
            <path
              d="M11.7 47.6h1l-.1 2.9h1.7l.1-2.3h1l-.1 2.3 2.9.1v1l-6.5-.2v-3.8zm.8-5.2.3-1 4 1.1c.8.2 1.5 0 1.7-.9.2-.8-.1-1.4-1-1.6l-4-1.1.3-1 4 1.1c1.5.4 2 1.6 1.7 2.9-.4 1.3-1.5 2-2.9 1.6l-4.1-1.1zm6.3-11.2c-.6 0-.9.1-1.1.5-.2.4-.1.7.3.9 1.1.6 2.3-1.9 4-.9 1 .6 1.3 1.7.7 2.7-.6 1-1.6 1.3-2.6.9v-1c.7.2 1.5.2 1.8-.4.3-.5.2-1.1-.3-1.3-1.1-.6-2.2 1.9-4 .9-.8-.5-1.1-1.5-.6-2.3.4-.8 1.1-1 1.8-1v1zm2.4-5.9.7-.8 4.8 4.3-.7.8-4.8-4.3zm11.2-5.4c1.3 1.8.8 3.5-.5 4.4-1.3.9-3 .8-4.3-1-1.3-1.8-.8-3.5.5-4.4 1.2-.9 3-.8 4.3 1zm-4 2.8c.9 1.3 2.1 1.4 2.9.8.8-.6 1.1-1.7.2-3-.9-1.3-2.1-1.4-2.9-.8-.8.6-1.1 1.7-.2 3zM40.2 13l2.2 6.1-1 .4-4-3.5 1.5 4.4-1 .3-2.2-6.1 1-.4 4 3.5-1.5-4.4 1-.3zM52 11.7l1 .1-.2 2.5 2.5.2.2-2.5 1 .1-.5 6.2-1-.1.2-2.9-2.5-.2-.2 2.9-1-.1.5-6.2zm12.6 2.4v6.7l-1-.3v-1.7l-2.1-.8-1 1.3-1-.3 4.2-5.2.9.3zm-2.5 3.1 1.6.5.1-2.7-1.7 2.2zm8.8-.1.8.5-3.2 5.4-.8-.5 3.2-5.4zm5.2 8.1-.6 3.4-.9-.8.6-3.3-.5-.5-1.9 2.1-.8-.7 4.3-4.6 1.6 1.5c.9.8.9 1.8.2 2.5-.6.6-1.3.8-2 .4zm1.3-1.1c.4-.4.3-.8-.1-1.2l-.9-.8-1.1 1.2.9.8c.4.4.8.4 1.2 0zM90.6 51c0 1.1-.6 1.8-1.7 1.8-.5 0-1-.3-1.3-.6-.3.6-.9 1-1.6 1-1.2 0-1.9-.7-1.9-2v-2.4l6.5-.1V51zm-3.5-1.2h-2V51c0 .7.4 1.1 1 1.1s1-.4 1-1.1v-1.2zm2.5-.1H88v1.2c0 .6.3.9.8.9s.8-.3.8-.9v-1.2zM89 62.4l-.9-.2.7-2.7-1.5-.4-.5 2.2-.9-.2.5-2.2-1.9-.5-.7 2.8-1.1-.2.9-3.8 6.3 1.5-.9 3.7zm-3.3 7.7L79 69l.5-.9 1.7.3 1.1-2-1.2-1.2.5-.9 4.6 5-.5.8zm-2.8-3-.8 1.5 2.7.5-1.9-2zm-1.2 9-.7.7-3-2.8c-.6-.6-1.3-.6-1.9 0-.6.6-.5 1.3.1 1.9l3.1 2.8-.7.7-3-2.8c-1.1-1.1-1.1-2.4-.2-3.3.9-1 2.2-1.1 3.3-.1l3 2.9zm-7.1 6.7-3.9 2.5-.5-.8 1.5-1-3-4.6.9-.6 3 4.6 1.5-1 .5.9zm-9.1 5-2.1-2.1-.3 3-1.1.3.5-4.1-.9-2.6 1-.3.9 2.6 3 2.9-1 .3zm19.1-51.7-.9 1.7h1.1l-.4.8c-.4.1-.8.1-1.2 0l-.8 1.5-.4-1 .4-.7c-.6-.2-1.1-.7-1.4-1.3-.5-1-.1-2.1 1-2.6 1-.4 1.8-.2 2.3.3.2-.3.4-.7.9-1 .7-.3 1.5 0 1.8.8.2.5.2.9 0 1.3l-.8-.3c.1-.2.2-.4.1-.6-.1-.3-.5-.4-.7-.3-.3.1-.5.3-.7.7l-.3.7zm-.7-.5c-.4-.3-1-.4-1.6-.2-.6.3-.7.8-.5 1.3.2.4.5.8 1 .9l1.1-2z"
            />
          </svg>
        </NuxtLink>        
      </div>      
    </div>

    <!-- <span class="block w-px h-8 mx-auto mt-24" style="background-color: var(--primary-bg);"></span> -->

    <div class="max-w-screen-xl w-full px-4 mx-auto mt-28 | md:mt-44">
      <div class="grid grid-cols-1 gap-20 mt-8 | sm:mt-16 | md:mt-24 md:grid-cols-3 md:gap-8 | lg:mt-28">

        <article class="flex flex-col items-center gap-8">
          <header>
            <h2 class="text-h3 mb-0">Join our newsletter</h2>
            <span class="block w-px h-4 bg-neutral-100 mx-auto mt-4"></span>
          </header>

          <form class="w-full max-w-xs mx-auto" action="#" method="POST">
            <div>
              <label
                for="email"
                class="sr-only"
                >Email address</label
              >
              <div class="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="Email address"
                  required
                  class="block w-full bg-transparent border-b border-neutral-100 focus:border-neutral-100 focus:ring-0 placeholder:text-neutral-100 placeholder:font-body placeholder:uppercase placeholder:tracking-widest placeholder:text-xs"
                />
              </div>
            </div>

            <!-- <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div> -->
          </form>

          <ul class="flex flex-col gap-2 justify-center text-center">
            <li>
              <NuxtLink
                class="text-caps tracking-widest uppercase"
                to="#"
                target="_blank"
              >
                Instagram
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-caps tracking-widest uppercase"
                to="#"
                target="_blank"
              >
                Facebook
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-caps tracking-widest uppercase"
                to="#"
                target="_blank"
              >
                TickTok
              </NuxtLink>
            </li>
          </ul>
        </article>

        <article class="flex flex-col items-center gap-8 order-first | md:order-none ">
          <header>
            <h2 class="text-h3 mb-0 text-center">50 Mardol<br> Shrewsbury<br> SY1 1PP</h2>
            <span class="block w-px h-8 bg-neutral-100 mx-auto mt-4"></span>
          </header>

          <ul class="flex flex-col gap-1 items-center justify-center">
            <li>
              <NuxtLink
                class="text-caps tracking-widest uppercase semibold"
                to="tel:07734375580"
                rel="tel"
              >
                Telephone
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-caps tracking-widest uppercase semibold"
                to="mailto:hello@fusionhairandbeautysalon.co.uk"
                rel="email"
              >
                Email
              </NuxtLink>
            </li>
          </ul>
    
        </article>

        <article class="flex flex-col items-center gap-8">
          <header>
            <h2 class="text-h3 mb-0 text-center">Our opening times</h2>
            <span class="block w-px h-4 bg-neutral-100 mx-auto mt-4"></span>
          </header>
    
                <table class="site-footer__times w-full max-w-xs mx-auto">
		            <tbody>
 
		              <tr>
		                <td>Sunday</td>
		                <td class="text-right">Closed</td>
		              </tr>
 
		              <tr>
		                <td>Monday</td>
		                <td class="text-right">Closed</td>
		              </tr>
 
		              <tr>
		                <td>Tuesday</td>
		                <td class="text-right">9:00 – 5:30</td>
		              </tr>
 
		              <tr>
		                <td>Wednesday</td>
		                <td class="text-right">9:00 – 5:30</td>
		              </tr>
 
		              <tr>
		                <td>Thursday</td>
		                <td class="text-right">9:00 – 8:30</td>
		              </tr>
 
		              <tr>
		                <td>Friday</td>
		                <td class="text-right">9:00 – 5:30</td>
		              </tr>
 
		              <tr>
		                <td>Saturday</td>
		                <td class="text-right">9:00 – 5:30</td>
		              </tr>

		            </tbody>
		          </table>
        </article>

      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-footer {
  background-color: var(--primary-bg);
}

.site-footer__logo-svg {
    background-color: white;
    border-radius: 50%;
    padding: 1rem;
    box-sizing: content-box;    
    // &::before,
    // &::after {
    //     content: '';
    //     position: absolute;
    //     top: calc(50% - 1px);
    //     left: 0;
    //     width: calc(50% - 100px);
    //     height: 1px;
    //     background-color: var(--primary-bg);
    // }

    // &::after {
    //     left: auto;
    //     right: 0;   
    // }
}

.site-footer__times {


    td {
        @apply text-caps tracking-widest uppercase py-1;        
    }
}
</style>
