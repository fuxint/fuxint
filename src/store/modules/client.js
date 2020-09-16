import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  ClientStatus: false, // 新建客户页面是否显示
  ClientPeople: [], // 新增客戶
  AddSalerList: []
}

const mutations = {
  CHANGE_CLIENT_STATE: (state, ClientSates) => {
    state.ClientStatus = ClientSates
  },
  Add_CLIENT_PEOPLE: (state, clientpeople) => {
    state.ClientPeople.push(clientpeople)
  },
  Add_Saler_List: (state, salerpeople) => {
    state.AddSalerList = salerpeople
  },
  Del_Client_New: (state, newClientPeopel) => {
    state.ClientPeople = ''
  }
}

const actions = {
  // 修改客户弹框
  ChangeClient({ commit }, Client) {
    commit('CHANGE_CLIENT_STATE', Client)
  },
  AddClientPeople({ commit }, ClientPeople) {
    commit('Add_CLIENT_PEOPLE', ClientPeople)
    console.log(ClientPeople, state.ClientPeople)
  },
  // 删除新用户
  DelNewClient({ commit }, ClientPeopleDel) {
    commit('Del_Client_New', ClientPeopleDel)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
