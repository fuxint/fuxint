<template>
  <div class="VerificationAudit_box">
    <el-dialog width="60%" :visible.sync="AddSalerInfo">
      <span slot="title" class="title block">BOSS 框架3123-板材</span>
      <el-col>
        <el-row
          :visible.sync="AddSalerInfo"
          width="60%"
        >

          <div>
            <el-row :gutter="24">
              <el-col :span="16">
                <SalerLeft />
              </el-col>
              <el-col :span="8">
                <SalerRight />
              </el-col>
            </el-row>
          </div>
          <span slot="footer" class="dialog-footer" />
        </el-row>
        <div class="saler_footer">
          <el-row :gutter="24">
            <el-col :span="17">
              <p> 数量：</p>
              <el-input-number />
            </el-col>
            <el-col :span="6">
              <span>总价： </span>
              <span>￥4000.00</span>
              <span>确认</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-dialog>
  </div>
</template>

<script>
import SalerRight from './salerRight'
import SalerLeft from './salerLeft'
export default {
  name: 'AddSalesman',
  components: { SalerLeft, SalerRight },
  data() {
    return {
      AddSalerInfo: false // 添加代理商显示隐藏
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped lang="scss">
  .saler_footer::v-deep{

    padding: 0 30px;
    left: 0;
    position: absolute;
    bottom: 0;
    height: 70px;
    width: 100%;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(238, 236, 236, 1);
    .el-col{
      &> span{
        display: block;
        line-height: 70px;
        &:nth-of-type(2){
          color: #EE6060;
        }
        &:nth-of-type(3){
          margin-left: 25px;
          width: 120px;
          height: 45px;
          margin-top: 10px;
          border-radius: 6px;
          line-height: 45px;
          background-color: rgba(0, 0, 0, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 16px;
          text-align: center;
          font-family: Roboto;
        }

      }
      p{
        line-height: 70px;
      }
      display: flex;
    }
    .el-input-number{
      margin-top: 15px;
      width:120px;

      .el-input{
        border: none;
      }
    .el-input-number__decrease,.el-input-number__increase{
      border-color: #fff!important;
      background: #fff;
    }
      input{
        border: none;
        width: 54px;
        background-color: rgba(239, 241, 238, 1);
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
      }
    }
  }
.VerificationAudit_box::v-deep{
.title{
  padding-top: 30px;
}
  .el-dialog{
    position: relative;

    min-height: 780px!important;
  }
  .el-icon-close{
    color: #fff;
  }
  .el-dialog__body{
    padding: 0px;
  }
}
</style>
