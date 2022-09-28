<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/imgs/images/img_02.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

import {home_http} from "@/api/httpHome.js";
// 业务函数
async function gethome(){
  let {data}=await home_http()
  console.log(data);
}
gethome()

</script>

<style lang="scss" scoped>
.home{
  .nav{
   .pic{
    width:375px;
    height:296px;
    img{
      width:100%;
      height:100%;
    }
   }
  }
}
</style>