// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    user: {
        username: '',
      }
 },
 getters: {},
 mutations: {
    changeName (state, payload) {
        state.user.username = payload
      }
 },
 actions: {}
});