<script setup lang="ts">
import { post } from "/src/utils/request"

const test = () => {
    post("/main/test").then((data) => {
        console.log(data)
    });
}

</script>

<template>

    Home
    <el-button type="danger" @click="test">CLICK</el-button>

</template>

<style scoped>

</style>
