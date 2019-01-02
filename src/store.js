import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftItem: '',
    rightItem: '',
    isCommentDetail: true
  },
  mutations: {
    changeItem (state, object) {
      state.leftItem = object.leftItem
      state.rightItem = object.rightItem
      console.log(state.leftItem, state.rightItem)
    },
    hiddenLeftSide (state) {
      state.isCommentDetail = false
    },
    restoreLeftSide (state) {
      state.isCommentDetail = true
    }
  },
  actions: {}
})
