<template>
  <div>
    <div v-if="pending">
      Cargando...
      <v-progress-circular
        indeterminate
        color="deep-purple"
      ></v-progress-circular>
    </div>
    <ProductDetails v-else :product="product" />
  </div>
</template>

<script setup>
import { create } from 'domain';

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { pending, data: product } = await useLazyFetch(uri, { key: id });
if(!product.value && !pending){
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<style lang="scss" scoped></style>
