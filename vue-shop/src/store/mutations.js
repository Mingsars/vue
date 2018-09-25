import state from './rootState.js'
const mutations = {
    changeStatus(state){
        state.isLogin = !state.isLogin;
    },
    changeUserMsg(state,usermsg){
        state.userMsg = usermsg;
    }
}

export default mutations;