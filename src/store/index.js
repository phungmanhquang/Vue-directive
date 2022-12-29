import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchLine: {
      show: false,
      keyWord: '',
      top: 0,
      left: 0
    }
  },
  getters: {
  },
  mutations: {
    SET_SEARCH_LINE(state, value) {
      state.searchLine = {
        ...state.searchLine,
        ...value
      }
    },
    TOGGLE_SHOW_SEARCH_LINE(state) {
      state.searchLine = {
        ...state.searchLine,
        show: !state.searchLine.show
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
