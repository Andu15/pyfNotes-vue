import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
// import { onAuthStateChanged } from "firebase/auth";

import Home from '../views/Home.vue';
import 'nprogress/nprogress.css';
import { auth } from '../firebase/firebaseConfig';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/notes',
    name: 'NotePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notes" */ '../views/NotePage.vue'),
    meta: {
      authenticated: true,
    }
  }, 
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "other" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // `to` and `from` are both route objects
  NProgress.start();
  // escuchador de eventos
  let user = auth.currentUser;
  let authorization = to.matched.some(record => record.meta.authenticated)
  if(authorization && !user){
    next('/login');
  }
  else if(!authorization && user){
    next('/notes');
  } else {
    next();
  }
})

export default router
