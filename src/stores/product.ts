import { defineStore } from 'pinia';

export const useProductStore = defineStore('product-store', {
  state: () => {
    return {
      products: [
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
      ],
    };
  },
  // actions
  // getters
});
