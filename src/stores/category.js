import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import getCategoryAPI from '@/apis/layout.js'
const useCategoryStore = defineStore('category',()=>{
    const categoryList=ref([]);
    const getCategory=async ()=>{
        const res=await getCategoryAPI()
        console.log(res)
        categoryList.value=res.result
    }

    return {
        categoryList,getCategory
    }
})
export default useCategoryStore
