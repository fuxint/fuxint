<template>
  <div class="VerificationAudit_box">
    <el-dialog    width="959px"  :visible.sync="SearchMember">
      <div class="SearchMemberCon">
        <p>您想要查找哪一位会员？</p>
        <span>可以对查看会员详情，积分，充值，预约等操作...</span>
        <div class="SearchMemberCon_foot">
          <div>
            <el-input placeholder=" 请输入手机号码或会员卡号" v-model="input3" class="input-with-select">
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
          <div>
            <i class="el-icon-full-screen" />
          </div>
        </div>
      </div>


    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "FindMember",
    data(){
      return{
        SearchMember:true
      }
    }
  }
</script>

<style scoped lang="scss">

  .VerificationAudit_box::v-deep{
    .el-input--medium{
      .el-input-group__append{
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
        background: #D7D3D3;
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
      display: flex;
      width:100%;
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
        padding: 150px 190px 0 150px;
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
