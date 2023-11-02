<template>
    <button @click="counterStore.increment">{{counterStore.count}}</button>
    test
    <el-button>Default</el-button>
</template>
<script setup>
import {useCounterStore} from '../stores/counter.js'
import getCategory from '../apis/testApi'
getCategory().then(res=>{
    console.log(res)
},e=>{console.log("err",e)})
const counterStore=useCounterStore()
console.log(counterStore)

</script>
