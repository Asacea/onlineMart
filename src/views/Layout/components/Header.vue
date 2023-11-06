
<template>
    <header class="header">
        <div class="container">
            <img src="@/assets/images/logo.png" style="width:150px" class="logo">
            <h1>online Mart</h1>
            <ul class="navbar">
                <li>
                    <RouterView to="/">首页</RouterView>
                </li>
                <li v-for="i in categoryStore.categoryList">
                    <RouterView to="/">{{i.name}}</RouterView>
                </li>
            </ul>
            <ul class="navbar" id="nav2">
                <li>
                    <RouterView to="/">品牌</RouterView>
                </li>
                <li>
                    <RouterView to="/">主题</RouterView>
                </li>
            </ul>
            <span class="searchItem">
                <el-input v-model="searchInput" placeholder="Please input" class="searchtext"/>
                <el-button type="primary">saerch</el-button>
            </span>
        </div>
        
    </header>
</template>
<script setup>
import {ref,onMounted} from 'vue'
import { RouterView } from 'vue-router';
import useCategoryStore from '@/stores/category.js'
const searchInput=ref('')
const categoryStore=useCategoryStore()
onMounted(()=>{
    categoryStore.getCategory()
    
})
</script>
<style scoped lang="scss">
.header{
    background-color:#f5f5f5;
    position: sticky;
    top:0;
    z-index: 99;
    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .logo{
            margin-right: 20px;
        }
        h1{
            justify-content: center;
            color: $xtxColor;
            margin-right: 20px;
        }
        .navbar{
            list-style-type: none;
            display: flex;
            font-size: medium;
            li{
                width: 60px;
                text-align: center;
                font-weight: 550;
                background-color:#f5f5f5;
                border-right: 1px solid black;
                &:last-child{
                    border-right: none;
                }
            }
            li:hover{
                text-decoration: underline;
                color:  $xtxColor;
            }
            
        }
        #nav2{
            color:$helpColor;
        }
        .searchItem{
            position: absolute;
            right: 30px;
            display: flex;
            .searchtext{
                margin-right: 5px;
            }
        }
    }
}
</style>
