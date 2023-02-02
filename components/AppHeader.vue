<template>
  <v-app-bar app class="bg-deep-purple-lighten-3">
    <img src="~/assets/img/LogoTTSmall.png" class="logo" />
    <v-toolbar-title>
      <NuxtLink to="/" class="navigation text-decoration-none"
        >Tienda al Cubo</NuxtLink
      ></v-toolbar-title
    >
    <div>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/products" class="navigation text-decoration-none"
          >Catalog</NuxtLink
        >
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/about" class="navigation text-decoration-none"
          >About</NuxtLink
        >
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/contact" class="navigation text-decoration-none"
          >Contact Us</NuxtLink
        >
      </v-btn>
    </div>
  </v-app-bar>
</template>
<style scoped>
.navigation {
  color: black;
}
.logo {
  max-width: 60px;
  max-height: 60px;
}
</style>
