<template>
  <div class="row mt-5">
    <div class="col-4">
      <img :src="item.image" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ item.name }}</h1>
      <h3>Rs.{{ item.price }}</h3>

      <button class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.items;
    },
    item() {
      let id = this.$route.params.id;
      if (this.items.length >= id) {
        let filterArr = this.items.filter(item => {
          return item.id == id;
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  }
};
</script>

<style>
</style>
