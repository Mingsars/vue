import state from './rootState.js'
const mutations = {
    showBackStatus(state){      //显示返回按钮
        state.isBackShow = true;
    },
    hideBackStatus(state){      //隐藏返回按钮
        state.isBackShow = false;
    },
    showNavStatus(state){      //显示底部tab
        state.isNavShow = true;
    },
    hideNavStatus(state){      //隐藏底部tab
        state.isNavShow = false;
    },
    changeTotalPage(state,n){
        state.totalPage = n;
    },
    nextPage(state){
        var maxPage = state.totalPage % 20;
        state.page < maxPage ? state.page++ : '';
    },
    prevPage(state){
        state.page >=2 ? state.page-- : '';
    },
    jumpPage(state,n){
        state.page = n;
    }
}

export default mutations;