<template>
    <div class="recommend">
        <HomeBanner></HomeBanner>
        <HomeCategory></HomeCategory>
    </div>
    <div class="Hot-New">
        <HomeHot></HomeHot>
        <HomeNew></HomeNew>
    </div>
    <HomeProduct></HomeProduct>
</template>
<script setup>
import HomeBanner from'./components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>
<style scoped lang="scss">
</style>
