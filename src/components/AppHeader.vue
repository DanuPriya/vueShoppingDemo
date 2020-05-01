<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cart from "./Cart";
export default {
  components: { Cart }
};
</script>

<style>
</style>