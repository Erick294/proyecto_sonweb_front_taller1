<template>
  <!--  <Login/>-->
  <!--  <Register/>-->
  <Factura/>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Factura from "@/components/Factura.vue";

export default {
  name: 'App',
  components: {
    Factura
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
