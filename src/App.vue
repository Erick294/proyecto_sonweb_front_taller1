<template>
	<NavComp class="cabecera"/>
	<router-view v-slot="{ Component }">
		
	</router-view>
	<FootNav class="footer"/>
</template>

<script>
	import NavComp from '@/components/NavComp.vue'
	import FootNav from '@/components/FootNav.vue'
	export default {
		name: 'App',
		components: {
			NavComp,
			FootNav,
		},
	}
</script>

<style>
	#app {
		color: #2c3e50;
	}
	.fadeUp-enter-active,
	.fadeUp-leave-active {
		transition: opacity 0.25s, transform 0.25s;
	}
	.fadeUp-enter,
	.fadeUp-leave-to {
		opacity: 0;
		transform: translateY(30%);
	}

	.cabecera{
		position:static;
	}

	.footer{
		margin-top: 1299px;
		position:static;
	}
</style>
