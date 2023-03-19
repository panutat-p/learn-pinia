<script setup lang="ts">
import { ref } from 'vue';

import TheHeader from './components/TheHeader.vue';
import ProductCard from './components/ProductCard.vue';

const products = ref([
  {
    name: "Plain Ol' Pineapple",
    image: 'pineapple-original.jpg',
    price: 4,
  },
  {
    name: 'Dried Pineapple',
    image: 'pineapple-dried.jpg',
    price: 5,
  },
  {
    name: 'Pineapple Gum',
    image: 'pineapple-gum.jpg',
    price: 3,
  },
  {
    name: 'Pineapple T-Shirt',
    image: 'pineapple-tshirt.jpg',
    price: 12,
  },
]);
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard v-for="product in products" :key="product.name" :product="product" />
    </ul>
  </div>
</template>
