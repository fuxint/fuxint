<template>
<!--  时长修改-->
  <!--    修改预约信息-->
  <div class="ModifyReservaInfo">
    <el-dialog v-if="ModifyReservatInfo" top="100px" title="" class="searchDeliveryOrder" align="center" width="670px" :visible.sync="ModifyReservatInfo">
      <div slot="title">
        <span class="affrimOrderRider">服务时长</span>
        <!--        <span class="cancelOrderRider">骑手取消接单</span>-->
      </div>

      <div>
        <div class="ModifyReservaInfoContent">
          <span class="demonstration block">{{ modeficatTimeVal }}分钟</span>
          <el-slider :marks="marks" v-model="modeficatTimeVal" step="15" max="120" show-stops="true" />
        </div>
      </div>

      <div slot="footer" class="ModifyReservaInfoBottomTime">确认</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModifyReservatInfo',
  data() {
    return {
      marks: {
        0: '15分钟',
        120: '120分钟'
      },
      ModifyReservatInfo: false,
      modeficatTimeVal: '' // 时间
    }
  }
}
</script>

<style scoped lang="scss">
  .ModifyReservaInfo::v-deep{
    .el-dialog__footer{
      margin-top: 80px;
      padding: 0;
      .ModifyReservaInfoBottomTime{
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 0px 0px 6px 6px;
        background-color: rgba(16, 16, 16, 1);
        color: rgba(255, 255, 255, 1);
        color: #fff;
        font-size: 16px;
      }
    }

    .el-slider__marks-text{
      width: 120px;
      line-height:50px;
    }
    .ModifyReservaInfoContent{
      width:500px;
    }
    .el-dialog__header{
      border-radius: 6px;
      background: #F7F7F7 ;
    }
    .affrimOrderRider{
      line-height: 30px;
    }
    .demonstration{
      font-size: 16px;
      display: block;
      line-height: 80px ;
      color: rgba(251, 58, 95, 0.9)
    }
    .el-slider__button{
      width: 15px;
      height: 29px;box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.19);
      border-color: #fff;
    }
    .el-slider__bar{
      background: rgba(41, 189, 18, 0.9)
    }
    .el-slider__stop{
      background: #E3E3E3;
      border-radius: 3px;
      height: 15px;
      width: 2px;
      transform:translateY(-110%)
    }
    .el-dialog{
      border-radius: 6px;
    }

  }
</style>
