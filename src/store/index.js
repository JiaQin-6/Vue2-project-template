
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate" //引入vuex状态持久化（页面刷新状态依然保存）
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
       index:null,
    },
    mutations: {
        setIndex(state, payload) {
            state.index = payload
        },
        /**
         *  重置方法
         * @param { Any } state 
         * @param { Array } payload  表示要重置的字段必须为数组字符串类型 eg: ['plan', 'userId']
         */
        reset(state, payload) { 
            if (Array.isArray(payload) && payload.length > 0) {
                payload.forEach(item => {
                    state[item] = null
                })
            }
        }
    },
    getters: {},
    actions: {},
    plugins: [createPersistedState({ //注册持久化插件
        key: 'library-reader-vuex',
        storage: window.sessionStorage, //使用会话缓存机制
        render(state) {
            return { ...state }
        }
    })]
});
