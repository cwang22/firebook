import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    uid: '',
    name: ''
  },
  notes: []
}

const actions = {
  SET_NOTES ({ commit }, notes) {
    commit('SET_NOTES', { notes })
  },
  AUTH_STATE_CHANGED: ({commit}, user) => {
    if (!user) {
      user = {
        uid: '',
        name: ''
      }
    }
    commit('SET_USER', user)
  }
}

const mutations = {
  SET_NOTES (state, { notes }) {
    state.notes = notes
  },

  SET_USER: (state, user) => {
    state.user = user
  }
}

const getters = {
  authenticated (state) {
    return state.user.uid !== ''
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
