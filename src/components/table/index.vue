<template>
    <el-table :data="data">
        <!-- 正常数据列渲染 -->
        <template v-for="item in generalOptions" :key="item.prop">
            <el-table-column v-if="!item.slot" :label="item.label" :align="item.align" :prop="item.prop"
                :width="item.width">
            </el-table-column>
            <el-table-column v-else :label="item.label" 
            :align="item.align" :prop="item.prop" :width="item.width">
                <template #default="scope">
                       <slot :name="item.slot" :scope="scope"></slot>
                </template>
            </el-table-column>
        </template>
        <el-table-column :label="operationOptions!.label" :align="operationOptions!.align"
            :width="operationOptions!.width">
            <template #default="scope">
                <slot name="action" :scope="scope"></slot>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { TableOptions } from './types'
// 表格分为两个部分，数据来源以及表格的具体配置
// 具体配置能够根据表格传入的数据进行按行渲染
// 因此至少就有两个prop slot 这里的配置是根据generaloption进行if渲染，然后根据内容派发给父组件，由父组件决定怎么渲染
// - Option slot 根据数据项进行命名
// -- 操作 自定义列（根据数据进行复杂渲染） 对齐方式 宽度 表头文字 数据对应字段   
// - data

interface Props {
    data: Array<any>;
    options: TableOptions[];
}

let props = defineProps<Props>()

const generalOptions = computed(() => props.options.filter(item => !item.action))
const operationOptions = computed(() => props.options.find(item => item.action))
</script>

<style lang="scss" scoped>
</style>