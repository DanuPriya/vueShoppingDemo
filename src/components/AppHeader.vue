<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Logout</router-link>
          <router-link :to="{name: 'home'}" class="nav-tem nav-link">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
          <router-link :to="{name: 'cart'}" class="nav-tem nav-link">Cart</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>