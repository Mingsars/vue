import mutations from './mutations.js'
import store from './index.js'
const actions = {
    changeStatus(store){
        store.commit('changeStatus');
    },
    changeUserMsg(store,usermsg){
        store.commit('changeUsermsg(' + usermsg + ')');
    }
}

export default actions;