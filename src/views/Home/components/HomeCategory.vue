<template>
    <div class="category">
            <ul class="menu">
                <li v-for="item in categoryStore.categoryList" :key="item.id">
                    <RouterLink to="/">{{ item.name }}</RouterLink> 
                    <RouterLink v-for="i in item.children.slice(0, 2)" :key="i" to="/">{{ i.name }}</RouterLink>
                    <div class="layer">
                        <ul>
                            <li v-for="i in item.goods" :key="i.id">
                                <RouterLink to="/">
                                    <img :src="i.picture" alt="" />
                                    <div class="info">
                                        <p class="name ellipsis-2">
                                            {{ i.name }}
                                        </p>
                                        <p class="desc ellipsis">{{ i.desc }}</p>
                                        <p class="price"><i>¥</i>{{ i.price }}</p>
                                    </div>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>  
    </div>
   
</template>
<script setup>
import {onMounted} from 'vue'
import {RouterLink} from 'vue-router'
import useCategoryStore from '@/stores/category.js'
const categoryStore=useCategoryStore()
onMounted(()=>{
    categoryStore.getCategory()
    
})
</script>
<style scoped lang="scss">
.category{
    //background-color: #faf2f2;
    //background: rgba(0, 0, 0, 0.8);
    width: 80%;
    left: 10%;
    height: 400px;
    margin-top: 10px;
    position: relative;
    .menu{   
            background-color: #424141;
            left:0;
            width: 20%;
            height: 100%;
            opacity: 0.8;
            overflow-y: scroll;
            li{
                
                line-height: 50px;
                padding-left: 6px;
                height: 50px;
                border-bottom: black 1px solid ;
                a{
                    color: #fff;
                    margin-right: 5px;
                    &:first-child {
                        font-size: 16px;
                    }
                }
                &:hover {
                    background: $xtxColor;
                }
                .layer{
                    width: 80%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.9);
                    position: absolute;
                    left: 20%;
                    display: none;
                    padding: 0 15px;
                    top:0;
                    ul {
                        display: flex;
                        flex-wrap: wrap;
                        padding: 5px;
                        li {
                            width: 30%;
                            height: 20%;
                            margin-right: 15px;
                            margin-bottom: 15px;
                            border: 1px solid #eee;
                            border-radius: 4px;
                            background: #fff;
    
                            &:nth-child(3n) {
                                margin-right: 0;
                            }
    
                            a {
                                display: flex;
                                width: 100%;
                                height: 100%;
                                align-items: center;
                                padding: 10px;
    
                                &:hover {
                                    background: #e3f9f4;
                                }
    
                                img {
                                    width: 95px;
                                    height: 95px;
                                }
    
                                .info {
                                    padding-left: 10px;
                                    line-height: 24px;
                                    overflow: hidden;
    
                                    .name {
                                        font-size: 16px;
                                        color: #666;
                                    }
    
                                    .desc {
                                        color: #999;
                                    }
    
                                    .price {
                                        font-size: 22px;
                                        color: $priceColor;
    
                                        i {
                                            font-size: 16px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                &:hover {
                    .layer {
                        display: block;
                    }
                }
            
        }
        
        &::-webkit-scrollbar {
            /*隐藏滚轮*/
            display: none;
            }
    }
    
}
</style>
