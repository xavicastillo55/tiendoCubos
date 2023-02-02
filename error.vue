<template>
  <div class="mt-7">
    <p>{{ error.statusCode }}</p>
    <p>Opps...</p>
    <p>{{ error.message }}</p>
    <v-btn @click="handleClearError">Go Home...</v-btn>
  </div>
</template>

<script setup>
defineProps(["error"]);
const handleClearError = () => clearError({redirect:'/'})
</script>

<style scoped></style>
