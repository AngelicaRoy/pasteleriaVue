<template>
    <section>
        <h1 class='combina'>Hacer Pedido</h1>

        <div class='form-input'>
            <input type='text' id='name' placeholder='Ingresa el nombre' class='form-input-size' required />
        </div>
        <div class='form-input'>
            <input type='text' id='phone' placeholder='Ingresa el telefono' class='form-input-size' required />
        </div>
        <div class='form-input'>
            <input type='text' id='email' placeholder='Ingresa el correo electronico' class='form-input-size' required />
        </div>
        <div class='form-input'>
            <input type='textarea' id='descr' placeholder='Ingresa la descripción del pastel' class='form-input-size' required />
        </div>
        <button type='submit' id='submit' class='boton'>Enviar</button>
                    
    </section>

</template>

<style scoped>
.container{
  width: 100%;
  margin: 3.2rem auto 0 auto;
}
section{
    margin-left:90px;
    background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
    margin-right:90px;
    padding-top:20px; 
    width:450px;  
}
@media(min-width: 576px){
  .container{
    max-width: 540px;
  }
}
.combina{
    padding:10px;
    width:330px;
    height:30px;
}
@media(min-width: 768px){
  .container{
    max-width: 720px
  }
}
.selecAdorno{
    font-size:17px;
    margin-top:-20px;
    margin-left:50px;
    text-align:left;
}
.opcion{
    font-size: 15px;
    margin-top:-10px;
}
.opcion input[type="checkbox"]{
    margin-left:10px;
 vertical-align: left;
}
input[type="text"]{
	font-size: 15px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: #fafafa;
	color: #636363;
	width: 70%;
	border: none;
	border-radius: 10px;
	border-bottom: 1px solid #757575;
    margin-left:60px;
}
input[type="textarea"]{
	font-size: 15px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: #fafafa;
	color: #636363;
	width: 70%;
    height:70px;
	border: none;
	border-radius: 10px;
	border-bottom: 1px solid #757575;
    margin-left:60px;
}
.combina{
    margin-left:60px;
    margin-top:10px;
}
header{
    text-align: center;
    margin-bottom: 1.5rem;
}

h1{
  font-weight: 400;
}

#description{
  font-weight: 200;
  font-style: italic;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5)
}
.boton{
  height:40px;
  weight:90px;
    background:#fff;
    color:#000;
    border:0px;
    border-radius:20px;
}
</style>
<script>
export default{
    name:'Formulario.vue',
}
</script>