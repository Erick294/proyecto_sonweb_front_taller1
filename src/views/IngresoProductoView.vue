<template>
	<div class="home">
			<div class="col-lg-6">
				<card-comp class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
								<input v-model="nombre"
									type="text"
									class="form-control"
									placeholder="Ingresa el nombre" />
							</div>
							<div class="mb-3 mt-2">
								<input v-model="codigo"
									type="number"
									class="form-control"
									placeholder="Código" />
							</div>
							<div class="mb-3 mt-2">
								<input v-model="categoria"
									type="text"
									class="form-control"
									placeholder="Categoría" />
							</div>
							<div class="mb-3 mt-2">
								<input  v-model="descripcion"
									type="text"
									class="form-control"
									placeholder="Descripción" />
							</div>
							<div class="mb-3 mt-2" >
								<input v-model="stock"
									type="number"
									class="form-control"
									placeholder="Stock" />
							</div>
							<div class="mb-3 mt-2" >
								<input v-model="precio"
									type="text"
									class="form-control"
									placeholder="Ingrese el precio:" />
							</div>
							<div class="mb-3 mt-2">
								<input  v-model="photo"
									type="text"
									class="form-control"
									placeholder="Foto" />
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success" v-on:click="insertarCliente()">Crear producto</button>
						<button class="btn btn-success" v-on:click="this.$router.push('home')">Cancelar</button>
					</template>
				</card-comp>
				
				<div v-if="mostrar" class="alert alert-success" role="alert">
  					<p>Producto ingresado correctamente</p>
				</div>
			</div>
		</div>
</template>

<script>
	// @ is an alias to /src
	import CardComp from '../components/CardComp.vue'
	import ingresarProducto from '../js/productos/ProcesarProductos.js'

	export default {
		name: 'HomeView',
		components: {
			CardComp,
		},

		data() {
			return {
				nombre: "",
				codigo: 0,
				descripcion: "",
				stock: 0,
				categoria: "",
				precio: 0,
				photo: "",
				mostrar: false
			}
		},
		methods:{
       			 async insertarProducto(){
            			const miProducto = {
               			 nombre: this.nombre,
				 codigo: this.codigo,
				 categoria: this.categoria,
				 descripcion: this.descripcion,
				 stock: this.stock,
				 precio: this.precio,
				 photo: this.photo
            			}
            			await insertarProducto(miProducto)
				this.mostrar = true
        		   }
    		}
	}
</script>

<style scoped>
	h2 {
		max-width: 470px;
		margin: auto;
		font-size: 1.8rem;
	}
	.home {
		max-width: 895px;
		margin: auto;
	}
	.img-cont {
		display: flex;
		flex-direction: column;
	}

	img {
		max-width: 315px;
		margin: 1em auto 0 auto;
	}

	.card-comp {
		max-width: 398px;
	}
	.btn-success {
		margin: auto;
		min-width: 195px;
		background-color: #F25781;
	}

	@media (min-width: 992px) {
		.home {
			margin: 4em auto;
		}
		img {
			margin: 0;
			margin-top: 5.6em;
		}
		h2 {
			margin: 0;
			margin-top: -0.8em;
			margin-left: 0.8em;
		}
		.card-comp {
			margin-top: 3rem;
		}
	}
</style>
