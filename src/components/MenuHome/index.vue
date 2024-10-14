<script setup lang="ts">
    import { post } from "/src/utils/request"

    const test = () => {
        post("/main/test").then((data) => {
            console.log(data)
        });
    }

</script>

<template>

    <h3>这里是后台管理框架</h3>
    <el-button type="danger" @click="test">CLICK</el-button>

</template>

<style scoped>

</style>
