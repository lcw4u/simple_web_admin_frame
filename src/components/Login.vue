<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from "vue-router";
//import { post } from "/src/utils/request"
//import { Md5 } from 'ts-md5';
import { useAuthStore } from "/src/stores/auth";

const router = useRouter()

// do not use same name with ref
const form = reactive({
    name: '',
    passwd: '',
})

const onSubmit = () => {
    /*
    post("/auth/login", {username: form.name, password: Md5.hashStr(form.passwd)}).then((data) => {
        const authStore = useAuthStore();
        authStore.setToken(data.token);
        authStore.setExpire(data.expire);
        router.push("/")
    })*/
    router.push("/")
}
</script>

<template>
    <el-container>
        <el-main>
            <el-form :model="form" label-width="auto" @keyup.enter="onSubmit">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.passwd" type="password"/>
                </el-form-item>

                <el-form-item label=" ">
                    <el-button type="primary" @click="onSubmit" class="loginButton">登录</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<style scoped>

.el-main{
    max-width: 400px;
    margin-top: 60px;
}

.el-form{
    max-width: 300px
}

.el-container{
    place-content: center;
    margin-bottom: 90%;
}

.loginButton{
    width: 100%;
}

@media screen and (max-width: 991px){
    .el-main{
        width: 100%;
    }

    .el-form{
        padding-top: 50px;
        width: 100%;
        max-width: 900px;
    }

    .el-input{
        height: 40px;
    }

    .loginButton{
        margin-top: 50px;
        width: 100%;
        height: 50px;
        font-size: larger;
    }
}


</style>