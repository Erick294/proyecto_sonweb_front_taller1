<template>
<div class="posts container">
			     <h1 class="titulo">Cuidado corporal</h1>
			     <card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
							    <img src="../assets/img/productos/CuidadoCorporal/jabon_leche_ss004.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$8.79</h3>
							    <h5 id="descripcion">Delicioso aroma y perfecto para todo tipo de pieles.</h5>
							    <h2>Jabon de leche</h2>
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success">Añadir al carrito</button>
					</template>
				</card-comp>

				<card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
							    <img src="../assets/img/productos/CuidadoCorporal/corporal_patch_rodilla.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$5.79</h3>
							    <h5 id="descripcion">Perfecto para dolores reumáticos, solo pongalo y olvidese del dolor.</h5>
							    <h2>Parche corporal</h2>
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success">Añadir al carrito</button>
					</template>
				</card-comp>

				<card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
							    <img src="../assets/img/productos/CuidadoCorporal/jabon_vitaminac_ss002.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$6.79</h3>
							    <h5 id="descripcion">Deliciosos aroma a naranja, con toques suaves y cítricos que rejuveneceran su piel.</h5>
							    <h2>Jabón de vitamina C</h2>
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
	export default {
		name: 'CorporalView',
		components: {
			CardComp,
		},
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