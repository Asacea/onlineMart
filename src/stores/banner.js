import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import {getBannerAPI} from '@/apis/home.js'
const useBannerStore = defineStore('Banner',()=>{
    const BannerList=ref([]);
    const getBanner=async ()=>{
        const res=await getBannerAPI()
        console.log(res)
        BannerList.value=res.result
    }

    return {
        BannerList,getBanner
    }
})
export default useBannerStore
