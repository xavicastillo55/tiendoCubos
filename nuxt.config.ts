// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "Tienda al Cubo",
      meta: [
        {
          name: "description",
          content: "A catalog of different Rubik cubes and puzzl es",
        },
      ],
    },
  },
});
