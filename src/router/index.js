// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';
// import 'firebase/storage';
// import headerPage from '../views/headerPage'
// import footerPage from '../views/footerPage'
// import HomePage from '../views/HomePage.vue'
// import ServicePage from '../views/ServicePage'
// import LoginPage from '../views/LoginPage'
// import RegisterPage from '../views/RegisterPage'
// import DashboardPage from '../views/DashboardPage'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomePage
//   },
//   {
//     path: '/service',
//     name: 'service',
//     component: ServicePage
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: LoginPage
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: RegisterPage
//   },
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: DashboardPage,
//     meta: {                       //authentication is required for this page
//       requiresAuth: true
//     }
//   },
//   {
//     path: '/headerPage',
//     name: headerPage,
//     component: headerPage
//   },
//   {
//     path: '/footerPage',
//     name: footerPage,
//     component: footerPage
//   }
// ]

// let app='';
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBNZJrXI4W-pP5Bsgi_riBTBgs7nkocQbQ",
//   authDomain: "quickclean-38b5a.firebaseapp.com",
//   projectId: "quickclean-38b5a",
//   storageBucket: "quickclean-38b5a.appspot.com",
//   messagingSenderId: "89435571902",
//   appId: "1:89435571902:web:64eab6477d2da02f4180ef",
//   measurementId: "G-RX0GX78JXT"
// };
// firebase.initializeApp(firebaseConfig);
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
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import Vue from 'vue';
// import Router from 'vue-router';
// let app='';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const config = {
//   apiKey: "AIzaSyBNZJrXI4W-pP5Bsgi_riBTBgs7nkocQbQ",
//     authDomain: "quickclean-38b5a.firebaseapp.com",
//     projectId: "quickclean-38b5a",
//     storageBucket: "quickclean-38b5a.appspot.com",
//     messagingSenderId: "89435571902",
//     appId: "1:89435571902:web:64eab6477d2da02f4180ef",
//     measurementId: "G-RX0GX78JXT"
// };
// Vue.use(Router);
// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if ( 'requiresAuth' in to.meta && requiresAuth && !currentUser) next('/');
//   else if ( 'requiresAuth' in to.meta && !requiresAuth && currentUser) next('login');
//   else next();
// });
// export default router;