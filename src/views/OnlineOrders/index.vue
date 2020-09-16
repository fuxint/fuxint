<template>
  <div class="searchOrder">
    <el-form ref="form" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="销售平台">
            <el-input />
          </el-form-item>
          <el-form-item label="时效承诺">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="年份">
            <el-input />
          </el-form-item>

          <el-form-item label="订单状态">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="起止日期">
            <el-row style="display: flex;flex-wrap: nowrap">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
            </el-row>

          </el-form-item>

          <el-form-item label="订单类型">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="6">

          <div>
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-select slot="prepend" v-model="select" placeholder="请选择">
                <el-option label="搜索方式" value="1">11111111</el-option>
                <el-option label="订单号" value="2" />
                <el-option label="用户电话" value="3" />
              </el-select>
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
            <div class="refresh-right">
              <i class="el-icon-refresh-right" />
              <span>刷新</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <div class="tableOrderList">
      <el-table
        :data="tableData"
        :row-class-name="tableRowOrderClassName"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          align="center"
          label="订单编号"
          width="180"
        />
        <el-table-column
          prop="name"
          align="center"
          label="收货信息"
          width="180"
        />
        <el-table-column
          prop="address"
          align="center"
          label="支付信息"
        />
        <el-table-column
          prop="address"
          align="center"
          label="订单状态"
        />
        <el-table-column
          prop="address"
          align="center"
          label="服务承诺"
        />
        <el-table-column
          align="center"
          label="受理"
        >
          <template slot-scope="scope">
            <el-checkbox v-model="checked" />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="修改地址"
        >
          <template slot-scope="scope">
            <i class="el-icon-document" />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="修改订单"
        >
          <template slot-scope="scope">
            <i class="el-icon-document" />
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="150px"
          label="操作"
        >
          <template slot-scope="scope">
            <div class="operate ">
              <i class="el-icon-delete" />
              <i class="el-icon-printer" />
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label=""
        >
          <template slot-scope="scope">
            <div class="operate " style="justify-content: center" @click="OnlineOrderDetail">
              <i class="el-icon-arrow-right" />
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination
          background
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next"
          :total="1000"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      select: '',
      tableData: [{
        date: '2016-05-02',
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
  },
  methods: {
    tableRowOrderClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    OlineOrderDetailAdd() {
      console.log(111111)
    }
  }
}
</script>

<style scoped lang="scss">
  .el-table .warning-row {
    background: oldlace;
  }
  .pagination{
    margin-top: 40px;
    .btn-prev,.btn-next{
      span{
        min-width:120px!important;
      }
    }
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
.searchOrder ::v-deep{
  padding-right: 30px;
  padding-top: 30px;
  padding-left: 10px;
  .el-table{
    .operate{
      color: #000;
      display: flex;
      justify-content: space-between;
      font-size: 20px;

    }
    .el-icon-document{
      color: #000;
      font-size: 20px;
    }
    .is-checked{
      .el-checkbox__inner{
        background-color: rgba(0, 219, 255, 1);
        border: none;

      }
    }
    .el-checkbox__inner{

      &::after{
        width: 5px!important;
        height: 9px;
        margin-left: -4px;
        margin-top: -7px;
        top: 12px;
        left: 12px;
      }
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    border-radius:6px;
    .el-table__header{
      th{
        color: #fff;
        background: #000!important;
      }
    }

  }
  .tableOrderList{
    min-width:800px ;
    margin:  0 15px;
    max-width: 2100px;
  }
  .refresh-right{
    line-height: 30px;
    margin-top: 22px;
    display: flex;
    span{
      display: block;
    }
    i{
      margin-right: 5px;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
