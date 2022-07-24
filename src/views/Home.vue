<template>
  <h1>HOME</h1>
  <Table :data=tableData :options="options"
  :loadingOptions="loadingOptions"
  >
    <template #action="{ scope }">
    {{scope.row}}
      <el-button type="primary" @click="handleConfirm(scope)">确认</el-button>
      <el-button @click="handleCancel(scope)">取消</el-button>
    </template>
      <template #name="{ scope }">
  <el-button type="danger"> {{scope.row.name}} </el-button> 
    </template>
  </Table>
</template>

<script lang="ts" setup>
import Table from '../components/table/index.vue'
import { LoadingOptions, TableOptions } from '../components/table/types';
import {ref} from 'vue'
interface user {
  date: string;
  name: string;
  address: string;
}
let tableData  =ref<user[]>([])
setTimeout(() => {
  tableData.value=[
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
}, 3000);

let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'right',
    slot: 'name'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'left',
  }, {
    label: '操作',
    prop: 'address',
    align: 'left',
    action: true
  },

]
let loadingOptions:LoadingOptions={
  loadingText:'Loading...',
  loadingSvg:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`,
  loadingBackground:'rgba(122, 122, 122, 0.8)',
  laodingSvgBox:'-10, -10, 50, 50'
}

function handleConfirm(scope: any) {
  console.log('confirm', scope);

}
function handleCancel(scope: any) {
  console.log('cancel', scope);

}
</script>

<style lang="scss" scoped>
</style>


