<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container justify-content-evenly">
			<h3>Soniel</h3>

			<section id="central">
				<router-link
					to="/"
					class="nav-link"
					:class="{ active: activePath.home }"
					aria-current="page">
					<p>Inicio</p>
				</router-link>

				<router-link
					to="/about"
					class="nav-link"
					:class="{ active: activePath.about }">
					<p>Catálogo</p>
				</router-link>

				<router-link
					to="/posts"
					class="nav-link"
					:class="{ active: activePath.posts }">
					<p>Contacto</p>
				</router-link>
			</section>

			<section id="ingreso">
				<router-link
					to="/"
					class="nav-link"
					:class="{ active: activePath.home }"
					aria-current="page">
					<p>Ingresar</p>
				</router-link>

				<router-link
					to="/posts"
					class="nav-link"
					:class="{ active: activePath.posts }">
					<p>Carrito (0)</p>
				</router-link>
			</section>
			
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'NavComp',
		methods: {
			checkActive() {
				console.log(this.$route.path)
			},
		},
		created() {
			this.checkActive()
		},
		computed: {
			activePath() {
				if (this.$route.path === '/') {
					return {
						home: true,
						about: false,
						posts: false,
					}
				} else if (this.$route.path === '/about') {
					return {
						home: false,
						about: true,
						posts: false,
					}
				} else if (this.$route.path === '/posts') {
					return {
						home: false,
						about: false,
						posts: true,
					}
				} else {
					return {
						home: false,
						about: false,
						posts: false,
					}
				}
			},
		},
	}
</script>

<style scoped>
	.material-icons-round {
		color: rgb(248, 244, 244);
		font-size: 1.4em;
		background-color: rgba(218, 218, 218, 0.158);
		padding: 0.3em;
		border-radius: 50%;
		margin: 0.1em;
	}
	.active .material-icons-round {
		color: white;
		background-color: rgba(133, 128, 128, 0.158);
		border: 1px solid rgba(248, 244, 244, 0.342);
	}

	.navbar{
		margin-top: 15px;
		position:static;
	}

	.navbar p{
		font-family: 'Inter', serif, black;
		color: black;
		margin-top: 10px;
	}

	.navbar #central{
		font-family: 'Inter', serif, black;
		display: inline-flex;
	}

	.navbar #ingreso{
		font-family: 'Inter', serif, black;
		display: inline-flex;
	}

	.navbar h3{
		font-family:'Playfair Display', bold, black;
		font-size: 30px;
	}
</style>
