import mutations from './mutations.js'
import store from './index.js'
const actions = {
    changeStatus(store){
        store.commit('changeStatus');
    }
}

export default actions;