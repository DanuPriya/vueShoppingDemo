<template>
  <div class="row mt-5">
    <div class="col-4">
      <img :src="product.image" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ product.name }}</h1>
      <h3>Rs.{{ product.price }}</h3>

      <input type="text" v-model.number="quantity" class="text-center-col-1 mr-2 p-1" />

      <button class="btn btn-primary" v-on:click="addToCart()">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    product() {
      let id = this.$route.params.id;
      if (this.items.length >= id) {
        let filterArr = this.items.filter(product => {
          return product.id == id;
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },

  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: this.quantity
      });
    }
  }
};
</script>

<style>
</style>
