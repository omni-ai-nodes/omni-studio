<template>
    <n-layout :has-sider="true" class="admin-layout">
        <!-- 左侧导航栏 -->
        <n-layout-sider :width="240" class="admin-sider" bordered>
            <div class="logo-container">
                <n-image :src="logo" class="logo" width="40px" />
                <span class="brand">OmniStudio Admin</span>
            </div>
            <n-menu :options="menuOptions" :collapsed="collapsed" />
        </n-layout-sider>

        <n-layout>
            <!-- 顶部导航栏 -->
            <n-layout-header class="admin-header">
                <div class="header-left">
                    <n-button quaternary @click="collapsed = !collapsed">
                        <template #icon>
                            <i :class="collapsed ? 'i-mdi:menu-open' : 'i-mdi:menu'" />
                        </template>
                    </n-button>
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
    </n-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NButton, NBreadcrumb, NBreadcrumbItem, NDropdown, NAvatar, NImage } from 'naive-ui'
import logo from "@/assets/images/logo.png"

// 菜单折叠状态
const collapsed = ref(false)

// 当前路由
const route = useRoute()
const currentRoute = computed(() => route.meta.title || '')
// ... existing code ...
const menuOptions = [
    {
        label: '仪表盘',
        key: 'dashboard',
        icon: '仪表盘'
    },
    {
        label: '用户管理',
        key: 'users',
        icon: 'i-mdi:account-group'
    },
    {
        label: '模型管理',
        key: 'models',
        icon: 'i-mdi:cube-outline'
    },
    {
        label: '知识库管理',
        key: 'knowledge',
        icon: 'i-mdi:book-open-page-variant'
    },
    {
        label: '系统设置',
        key: 'settings',
        icon: 'i-mdi:cog'
    }
]
// ... existing code ...
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

    .admin-sider {
        .logo-container {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 8px;

            .brand {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }

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