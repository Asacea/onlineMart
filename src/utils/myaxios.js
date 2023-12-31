import axios from 'axios'
const httpInstance=axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
//拦截器
httpInstance.interceptors.request.use(config=>{
    return config
},e=>Promise.reject(e))
httpInstance.interceptors.response.use(res=>res.data,err=>{
    return Promise.reject(err)
})
export default httpInstance
