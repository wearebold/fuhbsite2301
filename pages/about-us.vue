<template>
  <section id="p-about" style="margin-top: clamp(4.5rem, 4.371rem + 0.86vw, 5.75rem);">
    <article>
      <div
        class="py-24 text-center"
        style="background-color: var(--primary-bg); color: white"
      >
        <h1 class="block font-header text-services">About Us</h1>
      </div>
      <div
        class="py-12 antialiased"
        style="background-color: var(--primary-secondary); color: white"
      >
        <div class="max-w-screen-xl w-full px-4 mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="max-w-prose text-lg leading-140 mx-auto">
              <h2 class="text-h3 mb-6">Our Passion</h2>
              <p>
                At Fusion Hair and Beauty Salon, we are more than just a salon –
                we are a team of passionate professionals dedicated to our
                craft. Our mission is simple: to inspire and empower our clients
                through the artistry of hair and beauty.
              </p>

              <h2 class="text-h3 mt-8 mb-6">Services That Exceed Expectations</h2>
              <p>
                We offer a wide range of services designed to enhance your
                natural beauty and boost your confidence. From precision
                haircuts and creative color treatments to rejuvenating facials
                and relaxing massages, our services are tailored to meet your
                unique needs.
              </p>

              <h2 class="text-h3 mt-8 mb-6">Our Commitment</h2>
              <p>
                At Fusion Hair and Beauty Salon, we prioritize your comfort and
                satisfaction above all else. We understand that each client is
                unique, and we take the time to listen to your needs and
                desires. Our goal is to create a personalized experience that
                leaves you looking and feeling your absolute best.
              </p>

              <h2 class="text-h3 mt-8 mb-6">Meet Our Creative Team</h2>
              <p>
                Our salon is home to a talented and diverse team of
                hairstylists, beauty therapists, and professionals who are
                experts in their respective fields. With years of experience and
                a shared passion for innovation, they stay at the forefront of
                the latest trends and techniques in the industry.
              </p>

              <h3 class="text-h3 mt-8 mb-6">Join Us at Fusion Hair and Beauty Salon</h3>
              <p>
                >We invite you to join us at Fusion Hair and Beauty Salon for a
                transformational experience. Whether you're looking for a fresh
                hairstyle, a soothing spa treatment, or a complete beauty
                makeover, our team is here to make it happen.
              </p>

              <p>
                Experience the fusion of artistry, creativity, and relaxation at
                Fusion Hair and Beauty Salon. Contact us today to book your
                appointment and let us bring out your natural beauty.
              </p>
            </div>

            <img src="dummy-salon.jpg" alt="dummy-journal" />
          </div>
        </div>
      </div>
    </article>

    <section>
      <div
        class="py-24 text-center"
        style="background-color: var(--primary-bg); color: white"
      >
        <h2 class="block font-header text-services">Meet the Team</h2>
      </div>
      <div
        class="pt-24 pb-40 antialiased"
        style="background-color: var(--primary-secondary); color: white"
      >
        <!-- Display team data here -->
        <div class="max-w-screen-3xl w-full px-4 mx-auto">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          >
            <article
              class="c-team"
              v-for="member in teamData"
              :key="member.name"
            >
              <img :src="member.image" alt="member.name" />
              <div class="relative z-10">
                <h3
                  class="text-caps font-body uppercase tracking-widest text-center"
                >
                  {{ member.name }}
                </h3>
                <span class="block w-px h-2 bg-neutral-100 mx-auto mt-4"></span>
                <p class="text-h2 leading-tight font-header text-center">
                  {{ member.role }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl w-full px-4 mx-auto"></div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teamData: [
        {
          name: "Michele",
          role: "Artistic Director",
          specialisations: [
            "Creative Cutting",
            "Hair styling",
            "Bridal Hair",
            "Racoon Hair Extensions Specialist",
          ],
          image: "dummy-journal.jpg",
        },
        {
          name: "Rachael",
          role: "Premier Stylist",
          specialisations: [
            "Creative Colour",
            "Hair Up and styling",
            "Braiding & Cornrow's",
            "Specialist in 10 different applications of Hair Extensions",
          ],
          image: "dummy-journal.jpg",
        },
        {
          name: "Charlotte",
          role: "Premier Stylist",
          specialisations: ["Creative Colour", "Hair Treatments", "Nioxin"],
          image: "dummy-journal.jpg",
        },
        {
          name: "Mae",
          role: "Stylist",
          experience: "6 years",
          specialisations: ["All cutting and colouring techniques"],
          assists: "Up and coming Apprentices and Junior Stylists",
          image: "dummy-journal.jpg",
        },
        {
          name: "Kelly",
          role: "Beauty Therapist",
          specialisations: [
            "Gel Nail Technician",
            "HD Brow Stylist",
            "NovaLash Specialist",
            "Dermalogica Skin Therapist",
            "CACI Non-Surgical Specialist",
          ],
          image: "dummy-journal.jpg",
        },
        {
          name: "Laura",
          role: "Beauty Therapist",
          specialisations: [
            "Gel Nail Technician",
            "Dermalogica Skin Therapist",
            "HD Brow Stylist",
            "CACI Non-Surgical Specialist",
          ],
          image: "dummy-journal.jpg",
        },
        {
          name: "Anna",
          role: "Beauty Therapist",
          specialisations: [
            "HD Brow Stylist",
            "Gel Nail Technician",
            "LVL Lash Therapist",
            "Make-up Application",
          ],
          image: "dummy-journal.jpg",
        },
        {
          name: "Beth",
          role: "Junior Stylist and Apprentice",
          tasks: [
            "Shampoo's and Condition's Clients Hair",
            "Apply's Toners",
            "Training in cutting and Colouring at discounted prices",
          ],
          image: "dummy-journal.jpg",
        },
      ],
    };
  },
  setup() {
    // Use the onMounted hook to execute code when the component is mounted
    onMounted(() => {
      const primaryBg = "#0F766E";
      const primarySecondary = "#134E4A";

      // Update CSS custom properties
      document.documentElement.style.setProperty("--primary-bg", primaryBg);
      document.documentElement.style.setProperty("--primary-secondary", primarySecondary);
      document.documentElement.style.setProperty("--cursor-fill", primarySecondary);
    });

    // Your component logic
  }
};
</script>

<style lang="scss" scoped>
.c-team img {
  clip-path: inset(0% 0% -100% 0% round 100vw);
  transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform-origin: center;
  transform: scale(0.9);
  mix-blend-mode: luminosity;

  &:hover {
    //   will-change: clip-path;
    transform: scale(1.125);
    mix-blend-mode: normal;
  }
}
</style>
```
