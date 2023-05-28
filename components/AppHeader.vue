<template>
  <v-toolbar app class="bg-blue-darken-2">
    <img src="~/assets/img/LogoTTSmall.png" class="logo" />
    <v-toolbar-title>
      <NuxtLink to="/" class="navigation text-decoration-none texto">TIENDA AL cUBO</NuxtLink>
      <h1 class="subtexto">cUBE StORE</h1>        
      </v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn variant="text" class="mx-2" rounded="xl" to="/products" nuxt>
        Catalogo
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl" to="/about" nuxt
        >Tutoriales
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl" to="contact" nuxt
        >Contactanos
      </v-btn>
    </v-toolbar-items>
    <v-btn class="hidden-md-and-up" id="menu-activator" color="white"
      ><v-icon class="text-h4">mdi-menu</v-icon></v-btn
    >
    <v-menu activator="#menu-activator">
      <v-list class="d-flex flex-column pa-n1">
        <v-list-item>
          <v-btn variant="text" class="mx-2" rounded="xl" to="/products" nuxt>
            Catalogo
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" class="mx-2" rounded="xl" to="/about" nuxt
            >Tutoriales
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" class="mx-2" rounded="xl" to="contact" nuxt
            >Contactanos
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<style scoped>
.navigation {
  color: white;
}
.logo {
  width: 60px;
  height: 60px;
}
</style>


<style>
  .texto{
     font-family: "Cubic_2", Helvetica, Arial;
     font-size: 100%;
  }

  .subtexto{
     font-family: "Cubic_2", Helvetica, Arial;
     font-size: 60%;
  }
</style>
