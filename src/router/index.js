
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import { useAuth } from 'src/composables/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function passRouteToProps(route){
	return {
		queryParams: route.query,
		fieldName: route.params.fieldName, 
		fieldValue: route.params.fieldValue
	}
}


let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		//Dashboard routes


//cache routes

//cachelocks routes

//checks routes

//genres routes
		{
			path: '/genres/:fieldName?/:fieldValue?',
			name: 'genreslist',
			component: () => import('pages/genres/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/genres/view/:id', 
			name: 'genresview', 
			component: () => import('pages/genres/view.vue'), 
			props: true 
		},
		{ 
			path: '/genres/add', 
			name: 'genresadd', 
			component: () => import('pages/genres/add.vue'), 
			props: true 
		},
		{ 
			path: '/genres/edit/:id', 
			name: 'genresedit', 
			component: () => import('pages/genres/edit.vue'), 
			props: true 
		},

//hosts routes

//jobs routes

//music routes
		{
			path: '/music/:fieldName?/:fieldValue?',
			name: 'musiclist',
			component: () => import('pages/music/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/music/view/:id', 
			name: 'musicview', 
			component: () => import('pages/music/view.vue'), 
			props: true 
		},
		{ 
			path: '/music/add', 
			name: 'musicadd', 
			component: () => import('pages/music/add.vue'), 
			props: true 
		},
		{ 
			path: '/music/edit/:id', 
			name: 'musicedit', 
			component: () => import('pages/music/edit.vue'), 
			props: true 
		},

//permissions routes

//roles routes

//sessions routes

//users routes
		{
			path: '/users/:fieldName?/:fieldValue?',
			name: 'userslist',
			component: () => import('pages/users/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/users/view/:id', 
			name: 'usersview', 
			component: () => import('pages/users/view.vue'), 
			props: true 
		},
		{ 
			path: '/index/register', 
			name: 'usersuserregister', 
			component: () => import('pages/index/userregister.vue'), 
			props: true 
		},
		{ 
			path: '/account/edit', 
			name: 'usersaccountedit', 
			component: () => import('pages/account/accountedit.vue'), 
			props: true 
		},
		{ 
			path: '/account', 
			name: 'usersaccountview', 
			component: () => import('pages/account/accountview.vue'), 
			props: true 
		},
		{ 
			path: '/users/add', 
			name: 'usersadd', 
			component: () => import('pages/users/add.vue'), 
			props: true 
		},
		{ 
			path: '/users/edit/:id', 
			name: 'usersedit', 
			component: () => import('pages/users/edit.vue'), 
			props: true 
		},

		
	//Otp verify code routes
		{ 
			path: '/index/verifyotp', 
			name: 'verifyotp', 
			component: () => import('pages/index/verifyotp.vue') 
		},
		
//Password reset routes
		{ 
			path: '/index/forgotpassword', 
			name: 'forgotpassword', 
			component: () => import('pages/index/forgotpassword.vue') 
		},
		{ 
			path: '/index/resetpassword', 
			name: 'resetpassword', 
			component: () => import('pages/index/resetpassword.vue') 
		},
		{ 
			path: '/index/resetpassword_completed', 
			name: 'resetpassword_completed', 
			component: () => import('pages/index/resetpassword_completed.vue') 
		},
		
//Email verify routes
		{ 
			path: '/index/verifyemail', 
			name: 'verifyemail', 
			component: () => import('pages/index/verifyemail.vue') 
		},
		{ 
			path: '/index/emailverified',
			name: 'emailverified', 
			component: () => import('pages/index/emailverified.vue') 
		},
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	const auth = useAuth();

	
	//get current user data from api on first load
	const { user } = await auth.getUserData();
	if(user){
		const homeRoute = {
			path: '/', 
			alias: '/home', 
			name: 'home', 
			component: () => import('pages/home/home.vue') 
		}
		mainRoute.children.push(homeRoute);
	}
	else{
		const indexRoute = { 
			path: '/',  
			alias: '/home', 
			name: 'index', 
			component: () => import('pages/index/index.vue') 
		}
		mainRoute.children.push(indexRoute);
	}

	const Router = createRouter({
	scrollBehavior(to, from, savedPostion){
		if(savedPostion) return savedPostion;
		return { top:0 }
	},
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})

