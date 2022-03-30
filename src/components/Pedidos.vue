<template>
    <section class="container">     
        <h2 class="m-2">Listado de Pedidios</h2>      
        <div class="container">
            <table  class="table">
                <thead class="thead-dark">
                   <tr>
                        <td>No.</td>
                        <td>Nombre</td>
                        <td>Telefono</td>
                        <td>Correo</td>
                        <td>Descripcion del pastel</td>
                        <td>Fecha Pedidio</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Ana Maria Torres</td>
                        <td>4459999199</td>
                        <td>anator34@gmail.com</td>
                        <td>Pastel de sabor chocolate<br>
                        decorado con chispas de chocolate</td>
                        <td>22-03-22</td>                        
                    </tr>
                    <tr>
                        <td scope="row">1</td>
                        <td>Ana Maria Torres</td>
                        <td>4459999199</td>
                        <td>anator34@gmail.com</td>
                        <td>Pastel de sabor chocolate<br>
                        decorado con chispas de chocolate</td>
                        <td>22-03-22</td>                    
                    </tr>
                    <tr>
                        <td scope="row">1</td>
                        <td>Ana Maria Torres</td>
                        <td>4459999199</td>
                        <td>anator34@gmail.com</td>
                        <td>Pastel de sabor chocolate<br> decorado con chispas de chocolate</td>
                        <td>22-03-22</td>
                    </tr>
                </tbody>                    
            </table>
        </div>
    </section>
    
</template>
<style scoped>
</style>

<script>
export default{
    name:'Pedidos',
}
</script>