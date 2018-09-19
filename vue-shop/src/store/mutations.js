import state from './rootState.js'
const mutations = {
    changeStatus(state){
        state.isLogin = !state.isLogin;
    }
}

export default mutations;