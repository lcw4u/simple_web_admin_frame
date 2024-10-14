<script setup lang="ts">
import { shallowRef, ref } from 'vue'

import {
    EditPen,
    Tickets,
    Money,
    Files,
    Operation,
} from '@element-plus/icons-vue'

const menus = shallowRef([
    {path: "/MenuHome", title: "主页", icon:Operation},
    {path: "/MenuPage1", title: "菜单1", icon:Money},
    {path: "/MenuPage2", title: "菜单2", icon:Tickets},
])

defineProps(['mode']);

</script>

<template>
    <el-menu
            :mode="mode"
            router="true"
            :ellipsis="false"
            background-color="#545c64"
            active-text-color="#ffd04b"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            default-active="/MenuHome"
    >

        <el-menu-item v-for="menu in menus"
                      :index="menu.path">
            <el-icon class="hidden-md-and-down">
                <component :is="menu.icon"></component>
            </el-icon>
            {{menu.title}}
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
    .el-menu{
        height: 100%;
    }
</style>