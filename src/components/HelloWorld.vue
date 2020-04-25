<template>
 <div class="col-md-3">
         <div class="card">
        <img :src="product.image" :alt="product.name" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
          <div class="card-text">Rs.{{product.price}}</div>
         <button class="btn btn-primary" v-on:click="addToCart()">Add To Cart</button>
       </div>
       </div>
       </div>
</template>



<script>

export default {
  name: 'HelloWorld',
  props: ["product"],

  methods:{
 addToCart(){
   this.$store.dispatch('addProductToCart',{
product:this.product,
quantity:1
   });
 }
  },
  
};
</script>



