<script setup lang="ts">
import { shallowRef, ref } from 'vue'
/*
import {
    EditPen,
    Tickets,
    Money,
    Files,
    Operation,
} from '@element-plus/icons-vue'
*/
const menus = shallowRef([
    {path: "/MenuMain", title: "主页"},
])

defineProps(['mode']);

</script>

<template>
    <el-menu
            :mode="mode"
            router="true"
            :ellipsis="false"
    >

        <el-menu-item v-for="menu in menus"
                      :index="menu.path">
            <el-icon class="hidden-md-and-down">
                <!--component :is="menu.icon"></component-->
            </el-icon>
            {{menu.title}}
        </el-menu-item>
    </el-menu>

</template>