<template>
  <v-app-bar app class="bg-blue-darken-2">
    <img src="~/assets/img/LogoTTSmall.png" class="logo" />
    <v-toolbar-title>
      <NuxtLink to="/" class="navigation text-decoration-none"
        >Tienda al Cubo</NuxtLink
      ></v-toolbar-title
    >
    <v-toolbar-items class="hidden-sm-and-down">
      <NuxtLink
        to="/products"
        class="navigation text-decoration-none"
        custom
        v-slot="{ navigate }"
      >
        <v-btn variant="text" class="mx-2" rounded="xl" @click="navigate">
          Catalog
        </v-btn>
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="navigation text-decoration-none"
        custom
        v-slot="{ navigate }"
      >
        <v-btn variant="text" class="mx-2" rounded="xl" @click="navigate">
          About
        </v-btn>
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="navigation text-decoration-none"
        custom
        v-slot="{ navigate }"
      >
        <v-btn variant="text" class="mx-2" rounded="xl" @click="navigate">
          Contact Us
        </v-btn>
      </NuxtLink>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-app-bar-nav-icon slot="activator"></v-app-bar-nav-icon>
    </v-menu>
    <v-btn class="hidden-md-and-up" id="menu-activator" color="white"
      ><v-icon class="text-h4">mdi-menu</v-icon></v-btn
    >
    <v-menu activator="#menu-activator">
      <v-list class="d-flex flex-column pa-n1">
        <v-list-item>
          <NuxtLink
            to="/products"
            class="navigationMenu text-decoration-none"
            custom
            v-slot="{ navigate }"
          >
            <v-btn variant="text" class="mx-2" rounded="xl" @click="navigate">
              Catalog
            </v-btn>
          </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink
            to="/about"
            class="navigationMenu text-decoration-none"
            custom
            v-slot="{ navigate }"
          >
            <v-btn variant="text" class="mx-2" rounded="xl" @click="navigate">
              About
            </v-btn>
          </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink
            to="/contact"
            class="navigationMenu text-decoration-none"
            custom
            v-slot="{ navigate }"
          >
            <v-btn variant="text" class="mx-2" rounded="xl" @click="navigate">
              Contact Us
            </v-btn>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<style scoped>
.navigation {
  color: white;
}
.navigationMenu {
  color: black;
}
.logo {
  width: 60px;
  height: 60px;
}
</style>
