import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    authenticated: false,
    uid: '',
    name: ''
  },
  notes: []
}

const actions = {
  onAuthStateChanged ({ commit }, user) {
    commit('onAuthStateChanged', { user })
  },
  fetch ({ commit }, notes) {
    commit('fetch', { notes })
  }
}

const mutations = {
  onAuthStateChanged (state, { user }) {
    state.user = user
  },
  fetch (state, { notes }) {
    state.notes = notes
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
