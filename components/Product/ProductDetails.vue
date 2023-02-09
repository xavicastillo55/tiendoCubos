<template>
  <div>
    <v-breadcrumbs
      :items="[`${product.category}`, `${product.name}`]"
      class="text-capitalize"
    ></v-breadcrumbs>
    <v-container class="mt-2">
      <v-row align="center" justify="space-around">
        <v-col cols="12" md="6">
          <v-img :src="product.image" alt="product image" class="detailImage">
          </v-img>
        </v-col>
        <v-col cols="9" md="6">
          <v-row>
            <p class="text-h4">{{ product.name }}</p>
          </v-row>
          <v-row class="text-subtitle-2">
            <p>Precio: ${{ product.price }}</p>
            <v-spacer> </v-spacer>
            <p>Inventario: {{ product.quantity }}</p>
          </v-row>
          <v-row class="mb-3" align="center">
            <v-chip
              :ripple="false"
              class="mr-1"
              size="x-small"
              color="grey-darken-1"
              >{{ product.category }}</v-chip
            >
            <v-chip
              v-for="prod in product.type"
              :ripple="false"
              class="mr-1"
              size="x-small"
              color="grey-darken-1"
              >{{ prod }}</v-chip
            >
            <v-chip
              v-if="product.brand !== ''"
              :ripple="false"
              class="mr-1"
              size="x-small"
              color="grey-darken-1"
              >{{ product.brand }}</v-chip
            >
            <v-spacer></v-spacer>
            <!-- <v-rating
              v-model="rating"
              bg-color="orange-lighten-1"
              density="comfortable"
              color="purple-darken-4"
              empty-icon="mdi-robot-excited-outline"
              full-icon="mdi-robot-dead"
              readonly
            ></v-rating> -->
          </v-row>
          <v-row>
            <p class="text-caption">Descripcion:</p>
            <v-divider></v-divider>
            <p class="text-body-1 pt-1">{{ product.description }}</p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
