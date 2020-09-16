
const state = {
  AddTerraceOrderShow: true,
  AddTerraceDeliveryFee: 0,
  OrderDeliveryType: 3// 订单类型
}

const mutations = {
  ADD_TERRACE_DELIVERY_FEE(state, price) {
    state.AddTerraceDeliveryFee = price
  },
  ADD_TERRACE_ORDER_SHOW(state, AddTerraceOrderShow) {
    state.AddTerraceOrderShow = AddTerraceOrderShow
  },
  // 修改订单类型
  REVAMP_TERRACE_ORDER_TYPE(state, OrderDeliveryType) {
    state.OrderDeliveryType = OrderDeliveryType
  }
}

const actions = {
  // 添加配送金额
  AddTerraceFee({ commit }, Client) {
    commit('ADD_TERRACE_DELIVERY_FEE', Client)
  },
  // 添加配送显示或者隐藏
  AddTerraceFeeShow({ commit }, Client) {
    commit('ADD_TERRACE_ORDER_SHOW', Client)
  },
  // 添加配送显示或者隐藏
  RevampTerraceOrderType({ commit }, Client) {
    commit('REVAMP_TERRACE_ORDER_TYPE', Client)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
