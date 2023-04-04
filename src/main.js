// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'


// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/storage';
// import headerPage from '../views/headerPage'
import headerPage from '@/views/headerPage'
import footerPage from '@/views/footerPage'
import HomePage from '@/views/HomePage.vue'
import ServicePage from '@/views/ServicePage'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import DashboardPage from '@/views/DashboardPage'
import sideBar from '@/views/sideBar'
import AdminDashboard from '@/views/AdminDashboard'
import AdminLogin from '@/views/AdminLogin'
import store from "./store/store";
// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/service',
    name: 'service',
    component: ServicePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/DashboardPage',
    name: 'DashboardPage',
    component: DashboardPage,
    meta: {                       //authentication is required for this page
      requiresAuth: true
    }
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {                       //authentication is required for this page
      requiresAuth: true
    }
  },
  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: {                       
      requiresAuth: false
    }
  },
  {
    path: '/headerPage',
    name: headerPage,
    component: headerPage
  },
  {
    path: '/footerPage',
    name: footerPage,
    component: footerPage
  },
  {
    path: '/sideBar',
    name: sideBar,
    component: sideBar
  }
]

Vue.use(VueRouter)
const router = new VueRouter({  mode:'history', routes, linkExactActiveClass:'active' })
Vue.config.productionTip = false

let app='';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAUSWS3EjIb2QrStPd26A4M30EkwmlVuSM",
  authDomain: "quickclean-aaa69.firebaseapp.com",
  projectId: "quickclean-aaa69",
  storageBucket: "quickclean-aaa69.appspot.com",
  messagingSenderId: "775823617443",
  appId: "1:775823617443:web:c0534d7a6be399a465be16"
};

firebase.initializeApp(config);
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  
  if ( 'requiresAuth' in to.meta && requiresAuth && !currentUser) next('/');
  else if ( 'requiresAuth' in to.meta && !requiresAuth && currentUser) next('/service');
  else next();
});

// const storage = firebase.storage();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});


// firebase.initializeApp(config);
// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  
//   if ('requiresAuth' in to.meta &&  requiresAuth && !currentUser) next('HomePage');
//   else if ('requiresAuth' in to.meta && !requiresAuth && currentUser) next('LoginPage');
//   else next();
// });

// // const router = new VueRouter({
// //   mode: 'history',
// //   base: process.env.BASE_URL,
// //   routes
// // })
// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     /* eslint-disable no-new */
//     app = new Vue({
//       router,
//       render: h => h(App)
//     }).$mount('#app');
//   }
// });

// // export default router

