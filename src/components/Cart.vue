<template>
<div>


<button class="btn btn-primary" data-toggle="modal" 
data-target="#shoppingCart">Home ({{ inCart.length }})</button>

<div id="shoppingCart" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Shopping cart</h5>
        <button class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
  <tbody>
    <tr v-for="item in inCart" :key="item.product.id">
     
      <td>{{ item.product.name }}</td>
      <td>{{ item.quantity }}</td>
      <td>Rs.{{ item.product.price}}</td>
       
    </tr>
 <td class="text-center">Total Rs.{{ totalPrice }}</td>
   <tr>
     </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
        
      </div>
    </div>
  </div>


  
</div>

    </div>
</template>

<script>

export default{
name:'cart',
computed: {
    inCart() { 
      return this.$store.getters.inCart; 
      },

      totalPrice(){
          return this.$store.getters.totalPrice; 
      }

     

    },

    

};
</script>