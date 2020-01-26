import { getUserData, saveUserData, saveParentData } from '../data/server'
import Vue from 'vue'

export const state = () => ({
    userData:{
      parent: {}
    }
})

export const getters = {
  GET_DATA: ({ userData }) => userData
}

export const mutations = {
  SET_DATA(state, data) {
    state.userData = data
  },
  SET_PARENT({ userData }, data) {
    Vue.set(userData, 'parent', data)
  }
}

export const actions = {
  async LOAD_DATA({ commit }) {
      const data = await getUserData()
      commit('SET_DATA', { ...data })
      return data
  },

  async LOAD_PARENT({ commit }) {
      const data = await getUserData()
      commit('SET_PARENT', { ...data.parent })
      return data.parent
  },

  async SAVE_DATA({ commit }, data) {
      await saveUserData(data)
      commit('SET_DATA', { ...data })
  },
  
  async SAVE_PARENT({ state, commit }, data) {
    await saveParentData(data)
    commit('SET_PARENT', { ...data })
  }
}
