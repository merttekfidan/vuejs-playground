import { createStore } from 'vuex'
export const testStore=createStore({
    state:{
        name:''
    },
    mutations:{
        setName(state,name){
            state.name+=''+name
        }
    },
    actions:{
        setNameAction({commit},payload){
            commit('setName',payload.name)
        }
    }
})