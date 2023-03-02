<template>
	<div class="home">
			<div class="col-lg-6">
				<card-comp class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
								<input  v-model="nombre"
									type="text"
									class="form-control"
									placeholder="Ingresa tu nombre" />
							</div>
							<div class="mb-3 mt-2">
								<input  v-model="email"
									type="email"
									class="form-control"
									placeholder="Ingresa tu email" />
							</div>
							<div class="mb-3 mt-2">
								<input  v-model="contraseña"
									type="password"
									class="form-control"
									placeholder="Contraseña" />
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success" v-on:click="this.$router.push('home')">Registrarse</button>
						<button class="btn btn-success" v-on:click="this.$router.push('login')">Cancelar</button>
					</template>
				</card-comp>
			</div>
		</div>
</template>

<script>
	// @ is an alias to /src
	import CardComp from '../components/CardComp.vue'

	export default {
		name: 'HomeView',
		components: {
			CardComp,
		},

		data() {
			return {
				btnArray: [
					{
						txt: 'Iniciar sesión',
						class: 'btn-primary',
					},
				],
				nombre: "",
				email: "",
				contraseña: ""
			}
		},
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

	.col-lg-6{
		margin-left: 225px
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
