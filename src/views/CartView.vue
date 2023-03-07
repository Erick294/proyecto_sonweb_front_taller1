<template>
<div class="posts container">
	<h1 class="titulo">Tu carrito</h1>
	<CardComp
			class="mt-2 mx-auto single-spot"
			parrafo="segunda carta"
			:header="{
				name: 'Susana Perez',
				picture: 'https://randomuser.me/api/portraits/women/81.jpg',
			}"
			:likes="true" />
</div>
</template>

<script>
	import CardComp from '../components/CardComp.vue'
	import obtenerCarritoFachada from '../js/carrito/ProcesarCarrito.js'

	export default {
		name: 'FraganciasView',
		data(){
		   return {
			listaCarrito:[]
		   }
		},
		components: {
			CardComp,
		},
		methods:{
			verificarCarrito(){
			     this.listaCarrito = obtenerCarritoFachada()
			}
		},
		mounted(){
			this.verificarCarrito()
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