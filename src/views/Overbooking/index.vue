<template>
  <div class="VerificationAudit_box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Overbooking',
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
  .VerificationAudit_box::v-deep{
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
      border-radius: 10px;
      .el-dialog__body{
        height: 280px;
        padding:0 30px !important;
      }
    }
  }
</style>
