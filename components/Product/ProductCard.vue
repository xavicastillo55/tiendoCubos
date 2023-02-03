<template>
  <v-card max-height="300">
    <v-img :src="product.image" alt="product image" class="thumb"> </v-img>
    <v-card-text>
      <div class="text-body-1 text-truncate">{{ product.title }}</div>
      <div class="text-caption">${{ product.price }}</div>
      <div class="d-flex justify-start mt-2 mb-1">
        <v-chip
          :ripple="false"
          class="mr-1"
          size="x-small"
          color="grey-darken-1"
          >{{ product.category }}</v-chip
        >
        <v-chip
          :ripple="false"
          class="mr-1"
          size="x-small"
          color="grey-darken-1"
          >Tipo</v-chip
        >
        <v-chip
          :ripple="false"
          class="mr-1"
          size="x-small"
          color="grey-darken-1"
          >Variante</v-chip
        >
      </div>
      <v-btn rounded="lg" color="light-blue-accent-3" width="100%" class="mt-1">
        <NuxtLink
          :to="`/products/${product.id}`"
          class="text-decoration-none"
          style="color: white"
          >Ver Detalles
        </NuxtLink>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
