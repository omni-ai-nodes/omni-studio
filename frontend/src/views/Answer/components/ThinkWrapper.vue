<template>
    <div :class="['think-wrapper', { 'is-close': isClose }]" ref="wrapperRef" v-if="content.replace(/\s/g, '') ">
        <div class="has-thought" @click="toggle">
            <span class="flex items-center gap-2.5 h-15 text-12px">
                <i class="i-common:has-thought w-14 h-14"></i>{{ $t("已深度思考") }}
            </span>
            <span>
                <i class="i-common:arrow-up w-14 h-14 cursor-pointer" v-if="!isClose"></i>
                <i class="i-common:arrow-down w-14 h-14 cursor-pointer" v-else @click.stop="openThink"></i>
            </span>
        </div>
        <div class="think-content" v-html="thinkContent"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch,computed } from 'vue';
import hljs from 'highlight.js';
import markdownit from 'markdown-it'
import { getSoftSettingsStoreData } from '@/views/SoftSettings/store';
const {
    themeColors,
    themeMode 
} = getSoftSettingsStoreData()
const props = defineProps<{ content: string }>()
const isClose = ref(false)
const wrapperRef = ref()
const thinkContent = ref("")
const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    langPrefix: 'language-',
    highlight(str, lang): string {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str, true).value
            } catch (__) { }
        }

        return md.utils.escapeHtml(str);
    }
})

// md.use(mathJax3)
watch(() => props.content, () => {
    const res = md.render(props.content)  // 正文渲染时取消think部分
    thinkContent.value = res
}, { immediate: true })

// 思考面板开关切换
function toggle() {
    isClose.value = !isClose.value
}

// 关闭思考
function closeThink() {
    isClose.value = true
    wrapperRef.value.style.height = "30px"
}


// 打开思考
function openThink() {
    isClose.value = false
    wrapperRef.value.style.height = "auto"
}


/**
 * @description 根据主题计算当前应用的颜色模式
 */
 const themeThinkBg = computed(()=>{
    if(themeMode.value == "light"){
        return themeColors.value.thinkWrapperLight 
    }else{{
        return themeColors.value.thinlWrapperDark
    }}
})
</script>

<style scoped lang="scss">
.think-wrapper {
    margin-bottom: 5px;
    background-color: v-bind(themeThinkBg);
    padding: 5px;
    box-sizing: border-box;
    transition: max-height 0.5s ease;
    overflow: hidden;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    
    .has-thought {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .think-content {
        line-height: 28px;
    }

    &.is-close {
        height: 30px;
    }
}

.is-close {
    max-height: 30px;
}

.content-pre {
    white-space: pre-wrap;
    overflow-wrap: break-word;
}
</style>