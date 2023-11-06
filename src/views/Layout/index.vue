<template>
    <div class="layout">
        <Nav></Nav>
        <Header></Header>
        <RouterView/>
        <Footer></Footer>
    </div>

</template>
<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
</script>
<style scoped lang="scss">
.layout{
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
</style>
