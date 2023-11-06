import httpInstance from "../utils/myaxios";
const getCategoryAPI=function (){
    return httpInstance({
        url:'home/category/head'
    })
}
export default getCategoryAPI
