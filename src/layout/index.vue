<script setup lang="ts">
import NavMenu from '../components/NavMenu.vue'

import {
    Position
} from '@element-plus/icons-vue'

/*
import { useAuthStore } from "/src/stores/auth";
*/
import { useRouter } from "vue-router";
/*
import { post } from "/src/utils/request"
import 'element-plus/theme-chalk/display.css'*/
const router = useRouter()

function onLogout(){
    //post("/auth/logout")
    //useAuthStore().clearToken();
    router.push("/Login")
}
</script>

<template>
    <el-container class="main-container">
        <el-header>
            <!--NavMenu class="hidden-md-and-up top-menu" mode="horizontal"></NavMenu--><el-link type="success" @click="onLogout()"><el-icon><Position></Position></el-icon>退出</el-link>
        </el-header>
        <el-container>
            <el-aside class="hidden-sm-and-down"><NavMenu mode="vertical"></NavMenu></el-aside>
            <el-main>
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </el-main>
        </el-container>
        <el-footer>
            <el-link
                    href="https://cn.vuejs.org/guide/essentials/template-syntax.html"
                    target="_blank"
                    type="info"
            >Vue</el-link> |
            <el-link
                    href="https://element-plus.org/zh-CN/component/overview.html"
                    target="_blank"
                    type="info"
            >element-plus</el-link>
        </el-footer>
    </el-container>
</template>

<style scoped>

    .el-header{
        text-align: right;
        background: #1a1a1a;
    }

    .el-container{
        min-height: 640px;
        text-align: center;
    }

    .el-header .el-link{
        margin-top: 17px;
    }

    .el-aside{
        width: 180px;
    }

    .el-footer{
        text-align: center;
    }

    .top-menu{
        /*width: 100px;*/
        border-bottom: 0px;
        float: inline-start;
        background: border-box;
    }

</style>