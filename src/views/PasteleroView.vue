<template>
  <div class="pastelero">
    <!--<h1>Vista Pastelero</h1>-->
  
  </div>
  <CantAdornos/>
  <CantSabores/>
  <Pedidos/>

</template>

<script>
import CantAdornos from "../components/CantAdornos.vue";
import CantSabores from "../components/CantSabores.vue";
import Pedidos from "../components/Pedidos.vue";
export default {
    name: 'PasteleroView',
    components:{
        CantAdornos,
        CantSabores,        
        Pedidos
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
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}    
</style>