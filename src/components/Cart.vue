<template>
<div>


<button class="btn btn-primary" data-toggle="modal" 
data-target="#shoppingCart">Cart ({{ inCart.length }})</button>

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
       Cart Shopping items.
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
        <button class="btn btn-primary">Check out</button>
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

  },



};
</script>