<template>
  <v-footer class="bg-deep-purple-lighten-1 d-flex flex-column">
    <div>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/" class="navigation">Home</NuxtLink>
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/products" class="navigation">Inventary</NuxtLink>
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/about" class="navigation">About</NuxtLink>
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/contact" class="navigation">Contact Us</NuxtLink>
      </v-btn>
    </div>
    <div>
      <span class="mx-2">
        <a
          href="https://instagram.com/talcubo?igshid=YmMyMTA2M2Y"
          class="social"
        >
          <v-icon>mdi-instagram</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a href="https://walink.co/c80ad7" class="social">
          <v-icon>mdi-whatsapp</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a href="https://www.facebook.com/tiendaalcubo" class="social">
          <v-icon>mdi-facebook</v-icon>
        </a>
      </span>
    </div>
    <div
      class="text-center mt-1 text-subtitle-2 text-medium-emphasis font-weight-thin"
    >
      <span>{{ new Date().getFullYear() }}</span> &copy;
      <span class="">Tienda al Cubo</span> —
      <span class="font-italic">mbuitragoc</span>
    </div>
  </v-footer>
</template>
<script>
export default {};
</script>
<style scoped>
a {
  text-decoration: none;
}
.navigation {
  color: white;
}
.social {
  color: black;
}
.v-footer {
  max-height: 100px;
}
</style>
