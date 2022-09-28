<template>
    <div>
        <!-- 主题路由 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <TabBar></TabBar>
    </div>
</template>

<script setup lang="ts">
import TabBar from "@/components/tabbar/TabBar.vue";

</script>

<style lang="scss" scoped>

</style>