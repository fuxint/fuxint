<template>
  <div class="VerificationAudit_box">
    <el-dialog    width="959px"  :visible.sync="SearchMember">
      <div class="SearchMemberCon">
        <div class="SearchMemberCon_foot">
          <div>
            <el-input placeholder=" 请输入手机号码或会员卡号"  value="1504314567" class="input-with-select">
              <el-select slot="prepend" class="left_SearchMemberCon" placeholder="号码">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button class="left_SearchMemberCon" slot="append" >
                <span>查询</span>
              </el-button>
            </el-input>
          </div>
        </div>
      </div>


      <el-table

        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="卡号"
          width="280">
          <template >
            <img src="../../../../static/image/Def_CardImg.png" alt="">
            <span style="margin-left: 10px">No.12312312331231323</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="手机号">
        </el-table-column>

        <el-table-column
          prop="address"
          label="卡类型">
        </el-table-column>


        <el-table-column
          prop="address"
          label="储蓄余额">
        </el-table-column>


        <el-table-column
          prop="address"
          label="归属门店">
        </el-table-column>
      </el-table>


    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "FindMember",
    data(){
      return{
        SearchMember:true,
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
    }
  }
</script>

<style scoped lang="scss">


  .VerificationAudit_box::v-deep{
    .el-table{
      height: 500px;
      background: #fff;
      overflow-y: scroll;
    }
    .el-table,.cell{
      clear:both;
      span{
        display: inline-block;
        line-height: 50px;
      }
      img{
        float: left;
        width: 68px;
        border-radius: 5px;
        height:50px;
      }
      text-align: center;
    }
    .el-dialog__body{
      padding: 30px 0;
    }
    .el-input--medium{
      .el-input-group__append{
        margin-left: 5px;
        .el-input--medium{
          background-color: rgba(215, 211, 211, 1);
          span{
            color: #fff;
          }
        }
        .el-input__icon{
          color: #101010;
        }
      }
      .el-input-group__append{
        background: #000;
        span{
          color: #fff!important;
        }
      }
      .el-input-group__prepend{
        background: #fff;
        color: #101010;
      }
      .left_SearchMemberCon{
        width: 89px;
        height: 20px;
      }
      input{
        width: 100%;
      }
    }
    .el-dialog__headerbtn{
      background: rgba(102, 102, 102, 0.29);
    }
    .SearchMemberCon_foot{
      margin-bottom: 20px;
      display: flex;
      justify-content:center;
      width:100%;
      &>div{
        width: 50%;
      }
      div> i{
        font-size: 35px;
        margin-left: 80px;
      }

    }
    .el-dialog{
      background: rgba(0, 0, 0, 0.29) url("../../../../static/image/searchMem.png") no-repeat;
      background-size: 100%;
      height: 619px;
      border-radius: 10px;
      .SearchMemberCon{
        /*padding: 150px 190px 0 150px;*/
        p{
          line-height: 40px;
          color: rgba(16, 16, 16, 1);
          font-size: 18px;
          text-align: left;
          font-family: SourceHanSansSC-regular;
        }
        span{
          display: block;
          color: #666666 ;
          margin-bottom: 57px;
        }
      }
    }
    .el-icon-close{
      color: #fff!important;
    }
  }
</style>
