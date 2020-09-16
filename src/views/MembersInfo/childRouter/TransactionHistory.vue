<template>
  <div class="tranctionHis">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        align="center"

        border="false"
        label="订单号"
        text=""
        width="180"
      />
      <el-table-column
        prop="name"
        align="center"
        border="false"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="address"
        border="false"
        align="center"
        label="店铺"
      />

      <el-table-column
        prop="address"
        border="false"
        align="center"
        text=""
        label="产品"
      >
        <template slot-scope="scope">
          <p>BOSS框架-板材</p>
          <span>Num:-1 </span>
        </template>

      </el-table-column>

      <el-table-column
        prop="address"
        border="false"
        align="center"
        label="价格"
      />
      <div slot="append">
        <div class="table_foot">
          <div>
            <button class="">售后</button>
            <button class="ColorWhite bgColor00DBFF">修改备注</button>
          </div>

          <div>订单总额: <span class="ColorFB3A5F">￥8000.00</span></div>
        </div>

      </div>
    </el-table>
    <div class="pages">
      <el-pagination
        prev-text="上一页"
        next-text="下一页"
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'TransactionHistory',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.tranctionHis{
  padding-bottom: 30px;
  .pages::v-deep{
.el-pagination span:not([class*=suffix]), .el-pagination button{
  min-width: 66px;
}
    margin: 20px;
    .el-pagination{
      display: flex;
      justify-content: flex-end;
    }
  }
  .table_foot{
    display: flex;
    justify-content: space-between;
    height: 65px;
    div{
      margin-right: 20px;
      &:nth-of-type(2){
        line-height: 65px;
      }
      span{

      }
      button{
        margin: 15px;
        display: inline-block;
        width: 74px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        text-align: center;
      }
    }
  }
}
</style>
