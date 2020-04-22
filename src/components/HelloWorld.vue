<template>
 <div class="col-md-3">
         <div class="card">
        <img :src="image" :alt="name" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
          <div class="card-text">{{price}}</div>
         <button class="btn btn-primary" v-on:click="cart(id)">Add To Cart</button>
       </div>
       </div>
       </div>
</template>



<script>

export default {
  name: 'HelloWorld',
  props: ['id','name','image','price'],
  methods:{
 cart(id){
   this.$store.dispatch('cart', id);
 }
  },
};
</script>



