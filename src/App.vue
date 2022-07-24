<template>
    <div class="app">
        index
        <el-button>index</el-button>
        <el-icon-alarm-clock />
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang='scss' scoped>
svg {
    height: 1rem;
    width: 1rem;
}
.app{
    width: 50vw;
    height: 100vh;
}
</style>