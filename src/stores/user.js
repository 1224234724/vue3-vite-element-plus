import { defineStore} from 'pinia'
import {ref,computed} from 'vue'
//用户模块 token setToken removeToken

export const userUserStore = defineStore('big-user',()=>{
    const count = ref("333")

    const increment =() =>{
        count.value++
    }

    const doubleCount = computed(()=>{
        return count.value
    })
    return {
        count, increment, doubleCount
    }
})