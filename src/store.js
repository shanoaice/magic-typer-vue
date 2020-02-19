import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    leftText: '',
    rightText: ''
  },
  mutations: {
    setLeftText(state, payload) {
      state.leftText = payload
    },
    setRightText(state, payload) {
      state.rightText = payload
    }
  }
})
