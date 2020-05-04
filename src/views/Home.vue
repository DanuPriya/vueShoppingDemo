  <template>
  <div class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>Shopping Store</h1>
      </div>
    </div>

    <div class="row">
      <HelloWorld v-for="product in items" :key="product.id" :product="product" />
    </div>
  </div>
</template>



  <script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  components: {
    HelloWorld
  }
};
</script>


