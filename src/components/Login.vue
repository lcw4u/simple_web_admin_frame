<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "/src/stores/auth";

const router = useRouter();

const login = () => {
    const authStore = useAuthStore();
    authStore.setToken("data.token");
    authStore.setExpire(Date.parse(new Date().toString()) / 1000 + 3600);
    router.push("/")

}
</script>

<template>

    <button type="button" @click="login">Login</button>
    <a href="/">Login</a>

</template>

<style scoped>

</style>
