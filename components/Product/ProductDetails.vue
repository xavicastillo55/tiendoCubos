<template>
  <v-container>
    <v-row align="center">
      <v-col cols="6">
        <v-img :src="product.image" alt="product image" class="detailImage">
        </v-img>
      </v-col>
      <v-col cols="6">
        <v-row>
          <p class="text-h4">{{ product.title }}</p>
        </v-row>
        <v-row class="text-subtitle-2">
          <p>Precio: ${{ product.price }}</p>
          <v-spacer> </v-spacer>
          <p>Inventario: 12</p>
        </v-row>
        <v-row class="mb-3" align="center">
          <v-chip
            :ripple="false"
            size="x-small"
            color="grey-darken-1"
            class="mr-2 text-capitalize"
            >{{ product.category }}</v-chip
          >
          <v-chip
            :ripple="false"
            size="x-small"
            color="grey-darken-1"
            class="mx-2 text-capitalize"
            >Fabricante</v-chip
          >
          <v-spacer></v-spacer>
          <v-rating
            v-model="rating"
            bg-color="orange-lighten-1"
            density="comfortable"
            color="purple-darken-4"
            empty-icon="mdi-robot-excited-outline"
            full-icon="mdi-robot-dead"
            readonly
          ></v-rating>
        </v-row>
        <v-row>
          <p class="text-caption">Descripcion:</p>
          <v-divider></v-divider>
          <p class="text-body-1 pt-1">{{ product.description }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { product } = defineProps(["product"]);
let rating = 4;
</script>

<style scoped>
.detailImage {
  max-height: 500px;
}
</style>
