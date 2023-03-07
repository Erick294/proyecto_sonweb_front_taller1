import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'init',
		component: HomeView,
	},
	{
		path: '/home',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/posts',
		name: 'posts',
		component: () => import('../views/PostsView.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/ProfileView.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue'),
	},
	{
		path: '/cuidado_corporal',
		name: 'cuidado_corporal',
		component: () => import('../views/CorporalView.vue'),
	},
	{
		path: '/cuidado_facial',
		name: 'cuidado_facial',
		component: () => import('../views/FacialView.vue'),
	},
	{
		path: '/maquillaje',
		name: 'maquillaje',
		component: () => import('../views/MaquillajeView.vue'),
	},
	{
		path: '/fragancias',
		name: 'fragancias',
		component: () => import('../views/FraganciasView.vue'),
	},
	{
		path: '/otros',
		name: 'otros',
		component: () => import('../views/OtrosView.vue'),
	},
	{
		path: '/admin/producto',
		name: 'ingreso_producto',
		component: () => import('../views/IngresoProductoView.vue'),
	},
	{
		path: '/carrito',
		name: 'carrito',
		component: () => import('../views/CartView.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/RegisterView.vue'),
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
