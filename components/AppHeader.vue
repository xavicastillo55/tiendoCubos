<template>
  <v-toolbar app class="bg-blue-darken-2">
    <img src="~/assets/img/LogoTTSmall.png" class="logo" />
    <v-toolbar-title>
      <NuxtLink to="/" class="navigation text-decoration-none"
        >Tienda al Cubo</NuxtLink
      ></v-toolbar-title
    >
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn variant="text" class="mx-2" rounded="xl" to="/products" nuxt>
        Catalog
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl" to="/about" nuxt
        >About
      </v-btn>
      <v-btn variant="text" class="mx-2" rounded="xl" to="contact" nuxt
        >Contact Us
      </v-btn>
    </v-toolbar-items>
    <v-btn class="hidden-md-and-up" id="menu-activator" color="white"
      ><v-icon class="text-h4">mdi-menu</v-icon></v-btn
    >
    <v-menu activator="#menu-activator">
      <v-list class="d-flex flex-column pa-n1">
        <v-list-item>
          <v-btn variant="text" class="mx-2" rounded="xl" to="/products" nuxt>
            Catalog
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" class="mx-2" rounded="xl" to="/about" nuxt
            >About
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" class="mx-2" rounded="xl" to="contact" nuxt
            >Contact Us
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
