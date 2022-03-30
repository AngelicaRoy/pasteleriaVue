<template>
    <h2 class='combina'>Combinar Sabores</h2>
    <p class="selecSabores">Selecciona los sabores a combinar:</p>
    <div class="opcion">
        <form>
            <input type="checkbox" name="vainilla">Vainilla<br>
            <input type="checkbox" name="fresa">Fresa<br>          
            <input type="checkbox" name="chocolate">Chocolate<br>            
            <input type="checkbox" name="cajeta">Cajeta<br>         
            <input type="checkbox" name="cafe">Café<br>     
        </form>
    </div>
</template>
<style scoped>
</style>

<script>
export default{
    name:'CombiSabores',
}
</script>