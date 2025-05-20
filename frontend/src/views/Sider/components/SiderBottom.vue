<template>
    <ul class="recent-list">
        <li @click="goToMcpDashboard">
            <div class="flex items-center justify-start">
                <i class="i-mdi:store w-16 h-16 ml-8 mr-10 text-[var(--bt-tit-color-secondary)]"></i>
                <span>{{ $t("MCP广场") }}</span>
            </div>
        </li>
        <li @click="openAgent">
            <div class="flex items-center justify-start">
                <i class="i-ph:star-four w-16 h-16 ml-8 mr-10 text-[var(--bt-tit-color-secondary)]"></i>
                <span>{{ $t("智能体") }}</span>
            </div>
        </li>
        <li @click="openThirdPartyModel">
            <div class="flex items-center justify-start">
                <i class="i-hugeicons:api w-16 h-16 ml-8 mr-10 text-[var(--bt-tit-color-secondary)]"></i>
                <span>{{ $t("第三方模型API") }}</span>
            </div>
        </li>
        <li @click="openModelManage">
            <div class="flex items-center justify-start">
                <i class="i-tdesign:desktop-1 w-16 h-16 ml-8 mr-10 text-[var(--bt-tit-color-secondary)]"></i>
                <span>{{ $t("本地模型") }}</span>
            </div>
        </li>
        <li @click="openSoftSettings">
            <div class="flex items-center justify-start">
                <i class="i-tdesign:setting-1 w-16 h-16 ml-8 mr-10 text-[var(--bt-tit-color-secondary)]"></i>
                <span>{{ $t("设置") }}</span>
            </div>
        </li>

    </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { openAgent } from "@/views/Agent/controller/index"
import { openModelManage } from "@/views/Settings/controller/index"
import { openSoftSettings } from "@/views/SoftSettings/controller"
import { openThirdPartyModel } from "../controller"
import { useI18n } from "vue-i18n";
const { t: $t } = useI18n()
const router = useRouter()

function goToMcpDashboard() {
    window.open('/#/mcp/dashboard', '_blank');
}
</script>

<style scoped lang="scss">
@use "@/assets/base";

.recent-list {
    @include base.recent-list-style;
}
</style>