<template>
  <div>
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
          <td>Rs.{{ item.product.price * item.quantity }}</td>
          <td>
            <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
          </td>
        </tr>
        <td class="text-center" v-if="totalPrice!=0">Total Rs.{{ totalPrice }}</td>
        <td class="text-center" v-if="totalPrice==0">Your Cart is Empty !!!</td>
        <tr></tr>
      </tbody>
    </table>
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