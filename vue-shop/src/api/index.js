import axios from 'axios';

//设置默认路径
axios.defaults.baseURL = 'http://localhost:4000';

//设置axios拦截器
axios.interceptors.response.use((res) =>{
	return res.data; //在这里统一拦截结果，把结果处理成res.data
})

//获取轮播图数据,返回的promise对象
export let getSliders = () => {
	return axios.get('/sliders');
}

//获取秒杀数据
export let getSecKills = () => {
	return axios.get('/secKill');
}

//获得内容数据
export let getShopItems = () => {
	return axios.get('/shopItem');
}

//获取列表页数据
export let getListItems = () => {
	return axios.get('/listItem');
}

//获取所有商品
export let getAllProducts = () => {
	return axios.get('/detail');
}

//添加到购物车
export let addShop = (data) => {
	return axios.post('/shop',data);
}

//获取购物车数据
export let allShop = () => {
	return axios.get('/shop');
}

//注册用户
export let registUser = (data) => {
	return axios.post('/regist',data);
}

//登录
export let login = (data,cb) => {
	cb();
	return axios.post('/login',data);
}
