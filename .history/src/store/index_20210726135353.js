import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store/cart'
import alert from '../store/alert'
import dialog from '../store/dialog'
import auth from '../store/auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBar: false,
  },
  mutations: {
    setSideBar: (state, value) => {
      state.sideBar = value
    },
  },
  actions: {
    setSideBar: ({commit}, value) => {
      commit('setSideBar', value)
    },
  },
  getters: {
    sideBar: state => state.sideBar,
  },
  modules: {
    cart,
    alert,
    dialog,
    auth
  }
})
