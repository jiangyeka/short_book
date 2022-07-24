<template>
  <h1>HOME</h1>
  <Table :data=tableData :options="options">
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
import { TableOptions } from '../components/table/types';

interface user {
  date: string;
  name: string;
  address: string;
}
const tableData: user[] = [
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
function handleConfirm(scope: any) {
  console.log('confirm', scope);

}
function handleCancel(scope: any) {
  console.log('cancel', scope);

}
</script>

<style lang="scss" scoped>
</style>


