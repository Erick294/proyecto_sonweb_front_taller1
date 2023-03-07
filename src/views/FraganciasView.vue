<template>
<div class="posts container">
			     <h1 class="titulo">Fragancias</h1>
			     <card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
							    <img src="../assets/img/productos/Fragancias/fragancias_pack_love.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$9.99</h3>
							    <h5 id="descripcion">Para enamorar no solo basta un buen aroma también una piel delicada, aprovecha y lleva estos increibles productos juntos.</h5>
							    <h2>Pack: Love + Crema corporal</h2>
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success">Añadir al carrito</button>
					</template>
				</card-comp>

				<card-comp v-for:="item in lista" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
							    <img :src=item.photo alt="producto">
							</div>
							<div class="texto">
							    <h3>{{item.precio}}</h3>
							    <h5 id="descripcion">{{item.descripcion}}</h5>
							    <h2>{{item.nombre}}</h2>
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success">Añadir al carrito</button>
					</template>
				  </card-comp>
</div>
</template>

<script>
	import CardComp from '../components/CardComp.vue'
	import obtenerProductosCategoria from '../js/productos/ProcesarProductos.js'

	export default {
		name: 'FraganciasView',
		components: {
			CardComp,
		},
		data(){
			return{
			   precio: null,
			   nombre: "",
			   descripción: "",
			   photo:"",
			   lista: null,
			}
		},
		mounted(){
			this.consultarProductos()
		},
		methods:{
          		async consultarProductos(){
              			const productos = await obtenerProductosCategoria("Fragancias")
				this.lista = productos
              			return productos
			}
          	}
	}
</script>
<style scoped>
	template{
		font-family:'Playfair Display', bold, black;
        	font-size: 18px;
	}

	card-comp{
		margin-top: 15px;
	}
	
	.titulo{
		font-family:'Playfair Display', bold, black;
		text-align:center;
		align-content: center
        }

	.mb-3 img{
		max-width: 170px;
		position: relative;
	}

	.mb-3 texto{
		font-family:'Playfair Display', bold, black;
        	font-size: 18px;
	}

	.btn{
		width: fit-content;
		margin-left: 700px;
	}

	.texto{
		position: relative;
		margin-left: 200px;
		margin-top: -135px;
	}
	.posts {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
	}
	.single-spot {
		max-width: 550px;
	}
	.logo {
		max-width: 115px;
		padding: 0.2rem;
	}
</style>