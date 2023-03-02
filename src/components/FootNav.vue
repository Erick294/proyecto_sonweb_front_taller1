<template>
	<footer class="table table mx-auto">

		<thead class="cabeza mx-auto">
			<tr>
				<th scope="col">Redes sociales</th>
				<th scope="col">Recursos</th>
				<th scope="col">Sobre nosotros</th>
			</tr>
		</thead>

		<tbody class="cuerpo mx-auto">
			<tr>
				<th scope="col"></th>
				<td><router-link class="router-link" to="/">Instagram</router-link></td>
				<td><router-link class="router-link" to="/">Política de devolución</router-link></td>
				<td><router-link class="router-link" to="/">Quienes somos</router-link></td>
			</tr>

			<tr>
				<th scope="col"></th>
				<td><router-link class="router-link" to="/about">Facebook</router-link></td>
				<td><router-link class="router-link" to="/about">Política de privacidad</router-link></td>
			</tr>

			<tr>
				<th scope="col"></th>
				<td><router-link class="router-link" to="/posts">Twitter</router-link></td>
			</tr>
		</tbody>
	
		<img src="../assets/img/logoJEK.jpeg" alt="JEK logo" />
		<div class="pie text-black-50 text-center">JEK Development &#169; 2023</div>
	</footer>
</template>

<style scoped>
	footer {
		width: 100%;
	}
	img {
		max-width: 95px;
		margin: 0 auto;
		display: block;
	}

	.text-center {
		margin-top: -0.5em;
		margin-bottom: 0.5em;
	}

	.table {
		justify-content: center;
		text-align: center;
		display: block;
	}

	#titulo{
		font-family:'Playfair Display', bold, black;
		font-size: 30px;
		width: fit-content;
		height: fit-content;
		margin-right: 1000px;
	}
	.cuerpo{
		width: max-content;
		display: block;
	}

	.cuerpo td{
		font-family:'Playfair Display', bold, black;
		width: fit-content;
		height: fit-content;
	}

	.cabeza{
		width: max-content;
		display: block;
		padding: 10px;
	}

	.cabeza th{
		font-family:'Playfair Display', bold, black;
		width: fit-content;
		height: fit-content;
		padding: 5px;
	}

	.pie{
		font-family:'Playfair Display', bold, black;
		margin-top: 5px;
	}

	.router-link {
		text-decoration: none;
	}

	footer{
		position: static;
		margin-top: auto;
	}

	@media (min-width: 768px) {
		footer {
			position: absolute;
		}
		img {
			position: relative;
			bottom: 0;
		}
	}
</style>
