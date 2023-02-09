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
const { id } = useRoute().params;
const { pending, result: product } = await $fetch(
  `/api/queryDoc?col=inventary&id=${id}`
);
console.log(product);
useHead({
  title: `Tienda al Cubo ${product.title}`,
  meta: [{ name: "description", content: `${product.description}` }],
});
</script>

<style lang="scss" scoped></style>
