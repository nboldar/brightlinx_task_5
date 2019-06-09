<template>
    <div class="container-fluid">
      <b-nav pills>
        <b-nav-item to="/" ><b-nav-text class="text-white">Home</b-nav-text></b-nav-item>
        <b-nav-item to="/users"><b-nav-text class="text-white">Users</b-nav-text></b-nav-item>
        <b-nav-item to="/signin"><b-nav-text class="text-white">Sign In</b-nav-text></b-nav-item>
        <b-nav-item to="/login"><b-nav-text class="text-white">Log In</b-nav-text></b-nav-item>
      </b-nav>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.container-fluid{
  background-color: #42b983;
  margin-bottom: 5em;
  color: white;
}
</style>
