import httpInstance from "../utils/myaxios";
const getCategory=function (){
    return httpInstance({
        url:'home/category/head'
    })
}
export default getCategory
