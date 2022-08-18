//网络请求方法
//便于修改
//便于更换
import axios from 'axios';

const request = axios.create({ //自定义axios对象
    baseURL: 'https://netease-cloud-music-api-xi-lyart.vercel.app/' //基本地址
})
//导出一个axios函数
export default request;