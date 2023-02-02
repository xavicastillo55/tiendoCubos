<template>
  <v-footer class="bg-cyan-lighten-1 d-flex flex-column">
    <div>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/">Home</NuxtLink>
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/inventary">Inventary</NuxtLink>
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/about">About</NuxtLink>
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl">
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </v-btn>
    </div>
    <div>
      <span class="mx-2">
        <a href="https://instagram.com/talcubo?igshid=YmMyMTA2M2Y">
          <v-icon>mdi-instagram</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a href="https://walink.co/c80ad7">
          <v-icon>mdi-whatsapp</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a href="https://www.facebook.com/tiendaalcubo">
          <v-icon>mdi-facebook</v-icon>
        </a>
      </span>
    </div>
    <div class="text-center mt-1">
      {{ new Date().getFullYear() }} — <strong>Tienda al Cubo</strong>
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
button span a {
  color: white;
}
div span a i {
  color: black;
}
.v-footer {
  max-height: 100px;
}
</style>
