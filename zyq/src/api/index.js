import axios from 'axios'

//设置默认路径
axios.defaults.baseURL = 'http://interface.zhuyeqingbook.cn:8080';

//获取顶级分类
export let getList = () => {
    return axios.get('/book/Classification/getClassification');
}

//获取子集分类
//传入分类ID
export let getChildList = (classId) => {
    return axios.get('/book/Classification/getChildClass',{params : {classId : classId}});
}

//获取分类图书
//可传入顶级分类id或子分类id
export let getListBook = (classId) => {
    return axios.get('/book/Classification/list',{params : {classId : classId}});
}

//获取小说章节列表
//传入小说ID
export let getBookList = (novelId,page,pageSize) => {
    var _pageSize = pageSize ? pageSize : 20;
    var _page = page ? page : 1;
    return axios.get('/book/Chapter/list',{params : {novelId : novelId,page : _page,pageSize : _pageSize}});
}

//获取小说章节内容
/*
 *  novelId : num   小说id
 *  chapterId : num     章节id
 ***/
export let getChapterContent = (novelId,chapterId) =>{
    return axios.get('/book/Chapter/intro',{params : {novelId : novelId,chapterId : chapterId}});
} 