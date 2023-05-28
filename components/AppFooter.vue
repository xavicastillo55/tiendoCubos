<template clas="v-footer-margin">
  <v-footer class="bg-grey-darken-4 d-flex flex-column" >
    <div>
      <span>Cubos Rubik </span>
      <v-icon>mdi-cube-outline</v-icon>
      <span> Rompecabezas </span>
      <v-icon>mdi-cube-outline</v-icon>     
      <span> Juegos de mesa </span>
    </div>
    <div>      
      <span> Figuras de colección </span>
      <v-icon>mdi-cube-outline</v-icon>
      <span> Detalles y accesorios </span> 
    </div>
    <div>
      <span class="mx-2">
        <a href="https://instagram.com/talcubo" class="social" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </a>
      </span>
      <span class="mx-2">
        <a href="https://wa.link/7xpqmm" target="_blank" class="social">
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
        <span>Tienda al Cubo</span>        
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
  max-height: 14vh;
}

p {
  color: #BDBDBD;
}
</style>
