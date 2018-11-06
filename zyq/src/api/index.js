import axios from 'axios'

//设置默认路径
axios.defaults.baseURL = 'http://interface.zhuyeqingbook.cn:8080';

//获取顶级分类
export let getList = () => {
    return axios.get('/book/Classification/getClassification');
}

//获取子集分类
export let getChildList = (classId) => {
    return axios.get('/book/Classification/getChildClass',classId);
}