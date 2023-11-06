<template>
    <div class="navbar">
        <ul>
            <li>
                <RouterView to="/">请先登录</RouterView>
            </li>
            <li>
                <RouterView to="/">帮助中心</RouterView>
            </li>
            <li>
                <RouterView to="/">关于我们</RouterView>
            </li>
        </ul>
    </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
.navbar{
    background-color: #424141;
    height: 40px;
    color: #fff;
    list-style-type: none;
    align-items: center;

    ul{
        display: flex;
        line-height: 40px;
        justify-content: right;
        li{
            width: 80px;
            text-align: center;
            font-weight: 400;

            border-right: 1px solid #f5f5f5;
            &:last-child{
                border-right: none;
            }
        }
        li:hover{
            text-decoration: underline;
            color:  $xtxColor;
        }
    }
    
}
</style>
