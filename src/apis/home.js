import httpInstance from "../utils/myaxios";
export function getBannerAPI (){
    return httpInstance({
        url: '/home/banner',
    })
}
 export function getNewAPI(){
    return httpInstance({
        url:'/home/new'
    })
 }
 export function getGoodsAPI(){
    return httpInstance({
        url:'/home/goods'
    })
 }
