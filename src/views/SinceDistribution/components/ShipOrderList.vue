<template>
  <!--  自配送订单列表-->
  <div class="ShipOrderList">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        resizable="true"
        align="center"
        label="订单编号"
      />
      <el-table-column
        prop="address"
        resizable="true"
        label="收货信息"
        align="center"
      />
      <el-table-column
        prop="address"
        align="center"
        resizable="true"
        label="支付信息"
      />
      <el-table-column
        prop="address"
        align="center"
        resizable="true"
        label="配送状态"
      />
      <el-table-column
        prop="address"
        align="center"
        resizable="true"
        label="操作"
      >
        <template>
          <!--<el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <i class="el-icon-first-aid-kit" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ShipOrderList',
  data() {
    return {
      tableData: [{
        date: '11111111111',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.ShipOrderList::v-deep{
  margin: 20px;
  .el-table{
    i{
      color: #00DBFF;
      font-size: 20px;
    }
    th,td{
      border-right: none;
    }
  }

    .has-gutter{
      tr,th{
        background: #010101!important;
        color: #fff;
      }
    }
}
</style>
