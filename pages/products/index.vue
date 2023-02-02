<template>
  <div>
    <h1>Product Page</h1>
    <div v-if="pending">
      Cargando...
      <v-progress-circular
        indeterminate
        color="deep-purple"
      ></v-progress-circular>
    </div>
    <v-container v-else class="pa-1" fluid>
      <v-row class="mx-1">
        <v-col v-for="prod in products" cols="4">
          <ProductCard :product="prod" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { pending, data: products } = await useLazyFetch(
  "https://fakestoreapi.com/products"
);
</script>

<style lang="scss" scoped></style>
