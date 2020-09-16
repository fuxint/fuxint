<template>
  <div>
    <el-table

      :data="tableData"
      stripe
      style="width: 100%"
      @cell-click="EnterMemberCardDetail"
    >
      <el-table-column
        prop="date"
        label="卡号"
        width="280"
      >
        <template>
          <img src="../../../static/image/Def_CardImg.png" alt="">
          <span style="margin-left: 10px">No.12312312331231323</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="手机号"
      />

      <el-table-column
        prop="address"
        label="卡类型"
      />

      <el-table-column
        prop="address"
        label="储蓄余额"
      />

      <el-table-column
        prop="address"
        label="归属门店"
      />
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'MemberList',
  data() {
    return {
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
    //  进入会员卡详情
    EnterMemberCardDetail(row, column, cell, event) {
      this.$router.push('/MemberUser/MemberCardDetail')
      console.log(row.address, row.date, row.name)
    }
  }
}
</script>

<style scoped lang="scss">

    .el-table::v-deep{
      background:transparent;
      .el-table__body-wrapper{
        background:transparent;
      }
       th.is-leaf, .el-table td,td,.el-table__row,tr,.el-table--striped .el-table__body tr.el-table__row--striped td{
        text-align: center;
        border: none!important;
         background:transparent;
      }
      height: 500px;

      border: none!important;
      &::after,&::before{
        height: 0!important;
      }
    }
    .el-table,.cell{
      border: none;
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
      background: rgba(0, 0, 0, 0.29) url("../../../static/image/searchMem.png") no-repeat;
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
</style>
