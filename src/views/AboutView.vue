<template>
	<div class="about container">
		<h2 class="mt-5 text-center">Soniel</h2>
		<p class="text-center">
			Es una empresa emergente en busca de posicionarse en el mercado de la cosmética nacional, llevando
                        a todos sus clientes belleza de prestigio y deleitando a sus consumidores con productos transformadores
                        y experiencias. Inspirándolos a expresar su belleza individual. 
		</p>
	</div>

	<div class="contacto">
		<form>
							<div class="mb-3 mt-2">
								<input
									type="text"
									class="form-control"
									placeholder="Ingresa tu nombre" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="email"
									class="form-control"
									placeholder="Ingresa tu email" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="text"
									class="form-control"
									placeholder="Cuentanos tu experiencia..." />
							</div>
		</form>

		<hr />
		<button class="btn btn-success">Enviar</button>
	</div>
</template>
<style scoped>
	.about {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
		font-family:'Playfair Display', bold, black;
	}

	.mb-3 input{
		margin-top: auto;
		width: 355px;
		align-content:center;
		text-align: center;
		margin-left: 515px
	}

	.btn{
		margin-left: 675px;	
        }
</style>
