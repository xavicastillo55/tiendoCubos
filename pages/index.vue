
import ProductCard from '~~/components/Product/ProductCard.vue';

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <v-container>
      <v-row>
        <v-col v-for="n in 24" :key="n" cols="4">
          <ProductCard/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
