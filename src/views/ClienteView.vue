<template>
    <div class="cliente">
        <!--<h1>Vista Cliente</h1>-->
        <DifeAdornos/>
        <CombiAdornos/>
        <DifeSabores/>
        <CombiSabores/>
        <Formulario/>
        <InfoPasteleria/>
        
    </div>
</template>
    
<script>
import DifeAdornos from "../components/DifeAdornos.vue";
import DifeSabores from "../components/DifeSabores.vue";
import CombiSabores from "../components/CombiSabores.vue";
import CombiAdornos from "../components/CombiAdornos.vue";
import InfoPasteleria from "../components/InfoPasteleria.vue";
import Formulario from "../components/Formulario.vue";

export default{
    name: 'ClienteView',
    components:{
        DifeSabores,
        DifeAdornos,
        CombiSabores,
        CombiAdornos,
        Formulario,
        InfoPasteleria

    }
}
</script>

<style>
    div{
        margin-top:10px;
    }
</style>