import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

const moduleA={
    state: {
        count:1
    },
    mutations: {
        add(state){
            state.count++;
        },
        reduce(state){
            state.count--;
        },
        add2(state, n){
            state.count+=n;
        },
    },
    getters: {
        count: function(state) {
            return state.count += 100;
        }
    },
    actions: {
        addAction(context){
            context.commit('add',10)
        },
        reduceAction({commit}){
            commit('reduce')
        }
    }
}

export default new vuex.Store({
    modules:{a:moduleA}
})






