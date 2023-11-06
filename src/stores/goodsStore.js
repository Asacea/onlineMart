import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import {getGoodsAPI} from '@/apis/home.js'
const useGoodsStore = defineStore('Goods',()=>{
    const goodsProduct=ref([]);
    const getGoods=async ()=>{
        const res=await getGoodsAPI()
        console.log(res)
        goodsProduct.value=res.result
    }

    return {
        goodsProduct,getGoods
    }
})
export default useGoodsStore
