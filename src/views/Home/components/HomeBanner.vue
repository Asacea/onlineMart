<template>
    <div class="banner">
        <el-carousel height="400px">
            <el-carousel-item v-for="item in bannerStore.BannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script setup>
import useBannerStore from '@/stores/banner.js'
import {ref,onMounted} from 'vue'
const bannerStore = useBannerStore()
onMounted(()=>{
    console.log("111")
    bannerStore.getBanner()
})


</script>
<style scoped lang="scss">
.banner{
    width: 80%;
    left: 10%;
    height: 80%;
    margin-top: 10px;
    position: absolute;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
