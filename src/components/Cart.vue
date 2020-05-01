<template>
  <div>
    <button
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#shoppingCart"
    >Cart ({{ inCart.length }})</button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in inCart" :key="item.product.id">
                  <td>{{ item.product.name }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="decrement(id)">&mdash;</button>
                  </td>
                  <td>{{ item.quantity }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="increment(id)">&#xff0b;</button>
                  </td>
                  <td>Rs.{{ item.product.price}}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
                <td class="text-center">Total Rs.{{ totalPrice }}</td>
                <tr></tr>
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
export default {
  name: "cart",
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },

    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },

  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    },

    increment(id) {
      for (let index = 0; index < this.inCart.length; index++) {
        if (this.inCart[index].id == id) {
          this.inCart[index].quantity++;
        }
      }
    },

    decrement(id) {
      for (let index = 0; index < this.inCart.length; index++) {
        if (this.inCart[index].id == id) {
          this.inCart[index].quantity--;
        }
      }
    }
  }
};
</script>