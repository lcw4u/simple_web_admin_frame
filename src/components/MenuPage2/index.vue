<script setup lang="ts">
    import { post } from "/src/utils/request"

    const test = () => {
        post("/main/test").then((data) => {
            console.log(data)
        });
    }

</script>

<template>

    <div class="tip custom-block">
        <p class="custom-block-title">TIP</p>
        <p>这是页面2</p>
    </div>
    <el-button type="danger" @click="test">CLICK</el-button>

</template>

<style scoped>

</style>
