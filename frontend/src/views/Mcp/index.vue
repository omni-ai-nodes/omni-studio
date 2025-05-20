e:/webpath/omni-studio/frontend/src/views/Mcp/index.vue
<template>
    <n-layout class="admin-layout">
        <!-- 顶部导航栏 -->
        <n-layout-header class="admin-header">
            <div class="header-left">
                <n-breadcrumb>
                    <n-breadcrumb-item>首页</n-breadcrumb-item>
                    <n-breadcrumb-item>{{ currentRoute }}</n-breadcrumb-item>
                </n-breadcrumb>
            </div>
            <div class="header-right">
                <n-dropdown :options="userOptions">
                    <n-avatar size="small" />
                </n-dropdown>
            </div>
        </n-layout-header>

        <!-- 内容区域 -->
        <n-layout-content class="admin-content">
            <router-view />
        </n-layout-content>
    </n-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NLayout, NLayoutHeader, NLayoutContent, NBreadcrumb, NBreadcrumbItem, NDropdown, NAvatar } from 'naive-ui'

// 当前路由
const route = useRoute()
const currentRoute = computed(() => route.meta.title || '')

// 用户菜单选项
const userOptions = [
    {
        label: '个人信息',
        key: 'profile'
    },
    {
        label: '退出登录',
        key: 'logout'
    }
]
</script>

<style scoped lang="scss">
.admin-layout {
    height: 100vh;

    .admin-header {
        height: 64px;
        padding: 0 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }
    }

    .admin-content {
        padding: 24px;
        background: #f5f5f5;
    }
}
</style>