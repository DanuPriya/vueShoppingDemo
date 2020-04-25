<template>
  <div id="app" class="container my-5">
    
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <Cart />
      </div>
    </div>
      
     <div class="row">
     <HelloWorld v-for="product in items" 
       :key="product.id"
       :product="product"
       />
      </div>
 </div>
</template>



<script>
import HelloWorld from './components/HelloWorld.vue';
import Cart from './components/Cart.vue';


export default{
  name:'app',
  
  computed: {
    items() { 
      return this.$store.getters.items; 
      },
    
  },

  components:{
    HelloWorld,
    Cart,
},
};
</script>


