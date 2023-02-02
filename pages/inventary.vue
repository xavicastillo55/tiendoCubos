<template>
  <div>
    <h1>Welcome to the Inventary</h1>
    <v-container>
      <v-row>
        <v-col v-for="n in 24" :key="n" cols="4">
          <ProductCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
