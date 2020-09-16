import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */


/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
const actions = {

}

const state = {
  FramePlate:false
}

const mutations = {
  GoBack() {
    this.$router.go(-1)
  },
  FramePlateChange(state, changeval) {
    this.state.FramePlate = changeval
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
