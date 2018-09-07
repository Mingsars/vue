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
