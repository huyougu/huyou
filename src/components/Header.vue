<template>
    <div class="header">
        <a  href="/" class="logo"> Huyou</a>
       <a v-for="(item,index) in header" :key="index">{{ item.name }}  </a>
    </div>
</template>


<script lang="ts" setup> 
import { ref } from 'vue'
import type { Ref } from 'vue'
const header:Ref<Array<any>> = ref([
 
])


</script>
<style   scope lang="scss">
.header {
    z-index: 1000;
    height: 60px;
    /* background-color: #26272F; */
    /* //半透明 */
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    color: white;
    position: sticky;
    top: 0;
    padding: 0 30px;
    .logo{
        font-size: 20px;
       font-family: 'Courier New', Courier, monospace;
        line-height: 60px;
        margin-right:1rem;
        font-weight: 700;
        padding: 0;
        cursor: pointer;
        transition: filter 300ms;
        &:hover{
            filter: drop-shadow(0 0 2em red);
    }
}
    a{ 
    padding: 0 10px;
    color: white;
    text-decoration: none;
    line-height: 60px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
}

</style>