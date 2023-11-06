<template>
    <HomePanel title="新鲜好物" subTitle="了解更多">
        <ul class="goods-list">
            <li v-for="item in newList" :key="item.id">
                <RouterLink :to="`/detail/${item.id}`">
                    <img :src="item.picture" alt="" />
                    <p class="name">{{ item.name }}</p>
                    <p class="price">&yen;{{ item.price }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
</template>
<script setup>
import HomePanel from './HomePanel.vue';
import {getNewAPI} from '@/apis/home.js'
import {ref,onMounted} from 'vue'
const newList=ref([]);
const getNewList=async function(){
    const res=await getNewAPI();
    console.log(res)
    newList.value=res.result
}
onMounted(()=>getNewList())
</script>
<style scoped lang="scss">
.goods-list {
    display: flex;
    justify-content: center;
    height: 400px;
    width: 100%;

    li {
        width: 20%;
        height: 400px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 100%;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .price {
            color: $priceColor;
        }
    }
}
</style>
