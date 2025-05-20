import { defineStore, storeToRefs } from "pinia"
import { ref } from "vue"
import type { AdminUserDto, ModelConfigDto, KnowledgeBaseDto, DashboardStatsDto } from "../dto"

const useAdminStore = defineStore("adminStore", () => {
    // 仪表盘数据
    const dashboardStats = ref<DashboardStatsDto>({
        totalUsers: 0,
        activeUsers: 0,
        totalModels: 0,
        totalKnowledgeBases: 0,
        systemStatus: {
            cpuUsage: 0,
            memoryUsage: 0,
            diskUsage: 0
        }
    })

    // 用户列表
    const userList = ref<AdminUserDto[]>([])
    
    // 模型配置列表
    const modelConfigs = ref<ModelConfigDto[]>([])
    
    // 知识库列表
    const knowledgeBases = ref<KnowledgeBaseDto[]>([])

    return {
        dashboardStats,
        userList,
        modelConfigs,
        knowledgeBases
    }
})

export default useAdminStore

export function getAdminStore() {
    return storeToRefs(useAdminStore())
}