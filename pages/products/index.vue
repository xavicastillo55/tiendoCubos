<template>
  <div>
    <h1>Product Page</h1>
    <v-container class="pa-1" fluid>
      <v-row class="mx-1">
        <v-col v-for="prod in products" cols="4">
          <ProductCard :product="prod" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
