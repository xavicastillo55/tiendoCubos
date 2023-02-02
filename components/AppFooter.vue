<template>
  <v-footer class="bg-grey-darken-4 d-flex flex-column">
    <div>
      <span class="mx-2">
        <a href="https://instagram.com/talcubo" class="social" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a href="https://walink.co/c80ad7" target="_blank" class="social">
          <v-icon>mdi-whatsapp</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a
          href="https://www.facebook.com/tiendaalcubo"
          target="_blank"
          class="social"
        >
          <v-icon>mdi-facebook</v-icon>
        </a>
      </span>
    </div>
    <div
      class="text-center mt-1 text-subtitle-2 text-medium-emphasis font-weight-thin"
    >
      <p>
        <span>{{ new Date().getFullYear() }}</span> &copy;
        <span>Tienda al Cubo</span> —
        <span class="font-italic">mbuitragoc</span>
      </p>
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
.social {
  color: #BDBDBD;
}
.v-footer {
  max-height: 70px;
}
p {
  color: #BDBDBD;
}
</style>
