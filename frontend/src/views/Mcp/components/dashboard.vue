<template>
    <div class="dashboard-container">
        <n-grid :cols="4" :x-gap="16" :y-gap="16">
            <n-grid-item>
                <n-card title="总用户数">
                    <div class="stat-value">{{ dashboardStats.totalUsers }}</div>
                </n-card>
            </n-grid-item>
            <n-grid-item>
                <n-card title="活跃用户">
                    <div class="stat-value">{{ dashboardStats.activeUsers }}</div>
                </n-card>
            </n-grid-item>
            <n-grid-item>
                <n-card title="模型总数">
                    <div class="stat-value">{{ dashboardStats.totalModels }}</div>
                </n-card>
            </n-grid-item>
            <n-grid-item>
                <n-card title="知识库总数">
                    <div class="stat-value">{{ dashboardStats.totalKnowledgeBases }}</div>
                </n-card>
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import { NCard, NGrid, NGridItem } from 'naive-ui'
import { getAdminStore } from '../store'

const { dashboardStats } = getAdminStore()
</script>

<style scoped lang="scss">
.dashboard-container {
    .stat-value {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-color);
        text-align: center;
    }

    .system-status {
        margin-top: 16px;
    }
}
</style>