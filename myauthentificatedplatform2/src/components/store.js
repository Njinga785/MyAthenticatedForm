import Vue from 'vue' 
import Vuex from 'vuex' 
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
 



 


    

export default new Vuex.Store({ 
    state: { 
        token: null
    }, 
    mutations: { 
        
        SIGNIN_SUCCES(state, token) {
            state.token = token
        }, 
        
        LOG_OUT(state) {
            state.token = null
        }
    }, 
    actions: {
        ajouter(context, token) {
            context.commit('SIGNIN_SUCCES', token)
        }, 

        retirer(context) {
            context.commit('LOG_OUT')
        }
    }, 
    getters: {
        token: state => state.token
    }, 
    plugins: [createPersistedState()]
})