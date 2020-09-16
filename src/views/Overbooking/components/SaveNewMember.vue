<template>
  <div class="VerificationAudit_box">
    <el-dialog  title="新建顾客资料并保存验光单"  width="490px"  :visible.sync="AddClient">
      <el-form ref="form" label-width="80px">
        <el-form-item label="">
          <span slot="label"><span>*</span>姓名</span>
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="">
          <span slot="label"><span>*</span>电话</span>
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="">
          <span slot="label">微信号</span>
          <el-input ></el-input>
        </el-form-item>
      </el-form>

      <div class="footerHandle">
        <p class="pointer">取消</p>
        <p class="pointer">确认</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Overbooking",
    data(){
      return{
        AddClient:true //添加備註
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .VerificationAudit_box::v-deep{
    width: 66.66%;
    margin: 0 auto;
    font-size: 14px;
    .el-dialog__header{
      line-height:60px;
    }
    .footerHandle{
      margin-top: 40px;
      padding-left: 70px;
      display: flex;
      justify-content: space-around;
      p{
        width: 145px;
        height: 35px;
        line-height:35px;
        border-radius: 3px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(238, 238, 238, 1);
        &:nth-of-type(2){
          color: #fff;
          background: #000!important;
        }
      }
    }
    label{
      span{
        span{
          color: #EE6060;
        }
      }
    }
    .el-icon{
      color: #fff;
    }
    .el-form{
      margin-top: 20px;
    }
    .el-icon-close{
      color: #fff!important;
      .el-dialog__headerbtn{
        width: 15px;
        height: 15px;
      }
    }
    .el-dialog{
      left: -12%;
      border-radius: 10px;
      .el-dialog__body{
        height: 280px;
        padding:0 30px !important;
      }
    }
  }
</style>
