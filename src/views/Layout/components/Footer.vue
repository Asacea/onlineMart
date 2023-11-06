<template>
    <footer class="footer">
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>客户服务</dt>
                    <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
                    <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
                    <dd><i class="iconfont icon-weibo"></i> 微博</dd>
                </dl>
                <dl>
                    <dt>下载APP</dt>
                    <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
                </dl>
                <dl>
                    <dt>服务热线</dt>
                    <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
                </dl>
            </div>
        </div>
        
    </footer>
</template>
<script setup>
</script>
<style scoped lang="scss">
.footer{
    background-color: #f5f5f5;
    padding-top: 20px;
    .contact{
        background-color: #fff;
        .container{
            display: flex;
            padding: 60px 0 40px 25px;
            dl{
                height: 190px;
                text-align: center;
                padding: 0 72px;
                border-right: 1px solid #f2f2f2;
                color: #999;
                &:first-child{
                    padding-left: 0;
                }
                &:last-child{
                    border-right: none;
                    padding-right: 0;
                }
                dt{
                    line-height: 1;
                    font-size: 18px;
                }
                dd{
                    width: 90px;
                    height: 90px;
                    margin:36px 12px 0 0;
                    padding-top: 10px;
                    border: 1px solid #ededed;
                    float: left;
                    .iconfont {
                        font-size: 36px;
                        display: block;
                        color: #666;
                    }
                }
            }
        }
    }
}
</style>
