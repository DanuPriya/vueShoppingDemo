<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="product.image" :alt="product.name" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="{name: 'product' ,  params: {id: product.id} }">{{product.name}}</router-link>
        </h5>
        <div class="card-text">Rs.{{product.price}}</div>

        <button class="btn btn-primary" v-if="!show" @click="addToCart()">Add To Cart</button>

        <button class="btn btn-primary" v-if="show" @click="addToCart()">Added ({{quantity}})</button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "HelloWorld",
  props: ["product"],
  data() {
    return {
      show: false,
      quantity: 0
    };
  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    }
  },

  methods: {
    addToCart() {
      (this.show = true),
        this.quantity++,
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1
        });
    }
  }
};
</script>



