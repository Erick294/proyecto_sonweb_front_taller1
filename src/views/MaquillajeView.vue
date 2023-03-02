<template>
<div class="posts container">
			     <h1 class="titulo">Maquillaje</h1>
			     <card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
							    <img src="../assets/img/productos/Maquillaje/maquillaje_yuxuling.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$12.79</h3>
							    <h5 id="descripcion">Llevate las 24 sombras a un precio increible.</h5>
							    <h2>Maquillaje Yuxuling</h2>
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
							    <img src="../assets/img/productos/Maquillaje/maquillaje_kevinycoco_kc211013.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$15.79</h3>
							    <h5 id="descripcion">Para aquellas almas que buscan resaltar y dar a notar su belleza.</h5>
							    <h2>Kevin y Coco</h2>
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
							    <img src="../assets/img/productos/Maquillaje/maquillaje_polvo_hadas.jpeg" alt="producto">
							</div>
							<div class="texto">
							    <h3>$6.79</h3>
							    <h5 id="descripcion">Resalta tu estilo y u piel con este hermoso polvo color dorado.</h5>
							    <h2>Polvo de hadas</h2>
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
		name: 'MaquillajeView',
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