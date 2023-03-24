import { defineStore } from 'pinia';

import { Product } from '../types/product.type';

export const useProductStore = defineStore('product-store', {
  state: () => {
    return {
      products: [] as Array<Product>,
    };
  },
  actions: {
    fill() {
      this.products = [
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
      ];
    },
  },
  getters: {
    cheapPineapple(state): Product[] {
      return state.products.filter((e) => e.price < 10);
    },
  },
});
