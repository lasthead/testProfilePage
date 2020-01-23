import { getProfile, saveProfile } from '../data/server'

export const state = () => ({
    profile:{}
})

export const getters = {
  GET_PROFILE: ({ profile }) => profile
}

export const mutations = {
  SET_PROFILE(state, data) {
    state.profile = data
  }
}

export const actions = {
  async LOAD_PROFILE({ commit }) {
      const data = await getProfile()
      commit('SET_PROFILE', data)
      return data
  },

  async SAVE_PROFILE({ commit }, data) {
      let result = await saveProfile(data)
      commit('SET_PROFILE', data)
  }
}
