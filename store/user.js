import { getUserData, saveUserData } from '../data/server'

export const state = () => ({
    userData:{}
})

export const getters = {
  GET_DATA: ({ userData }) => userData
}

export const mutations = {
  SET_DATA(state, data) {
    state.userData = data
  }
}

export const actions = {
  async LOAD_DATA({ commit }) {
      const data = await getUserData()
      commit('SET_DATA', data)
      return data
  },

  async SAVE_DATA({ commit }, data) {
      let result = await saveUserData(data)
      commit('SET_DATA', data)
  }
}
