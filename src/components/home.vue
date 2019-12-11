<template>
  <div>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">Welcome  </b-navbar-brand>
  </b-navbar>	
  <b-link to="product"><b-button block variant="primary">Continue..!!</b-button></b-link>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>