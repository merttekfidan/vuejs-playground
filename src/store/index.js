import { createStore } from 'vuex'

export const store = createStore({
  state:{
    count:0
  },
  mutations: {
    increment(state,number){
      state.count=number
    }
  },
  actions:{
    increment({commit}){
      commit('increment',5)
    }
  },
  getters:{
    // Veriyi göstermek istediğin şekilde göster veya kısa bi yol oluştur.  
    //return et
    //$store.getters.getterName ile istediğin gibi göster.
  },
  modules:{}
})