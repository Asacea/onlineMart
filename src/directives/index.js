//定义懒加载插件
import {useIntersectionObserver} from '@vueuse/core'

export const lazyPlugin={
    install(app){
        //定义全局指令
        app.directive('img-lazy',{
            mounted(el,binding){
                //el:指令绑定的元素，这里显然是指img
                //binding：指令绑定的表达式的值
                console.log(el,binding.value)
                const {stop}=useIntersectionObserver(//解构赋值
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视图区域
                            el.src = binding.value
                            //停止监听
                            stop()
                        }
                    },
                )
            }
        })

    }
}
