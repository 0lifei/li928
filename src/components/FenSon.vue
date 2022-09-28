<template>
    <h3 @click="tabFn">子传父</h3>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
let a:number=123;
const emit=defineEmits(['Fen',"khj"])
let tabFn=function(event:any){
    
}
</script>
<style>

</style>