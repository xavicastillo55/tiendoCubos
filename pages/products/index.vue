<template>
  <div>
    <h1 class="ml-1">Inventario</h1>
    <div v-if="pending">
      Cargando...
      <v-progress-circular
        indeterminate
        color="deep-purple"
      ></v-progress-circular>
    </div>
    <v-container v-else class="pa-1" fluid>
      <v-row class="mx-1">
        <v-col v-for="prod in products" cols="12" sm="6" lg="4">
          <ProductCard :product="prod" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { pending, result: products } = await $fetch("/api/queryCol?col=inventary");
useHead({
  title: "Catalogo Tienda al Cubo",
  meta: [{ name: "description", content: "Catalogo de Cubos y puzzles" }],
});
</script>

<style lang="scss" scoped></style>
