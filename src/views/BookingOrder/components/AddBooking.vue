<template>
  <!--    修改预约信息-->
  <div class="ModifyReservaInfo">
    <el-dialog top="100px" title="" class="searchDeliveryOrder" align="center" width="670px" :visible.sync="AddBooking">
      <div slot="title">
        <span class="affrimOrderRider">选择预约类型</span>
      </div>
      <div>
        <ul>
          <li @click="GeneralReservation">
            <img src="../../../static/image/eye-doctor-examining-womans-vision-535654393-5a9d8c941f4e1300364d1e16.jpg" alt="">
            <span class="block">通用预约</span>
          </li>
          <li @click="GeneralReservation">
            <img src="../../../static/image/shadow-jet-black-1.jpg" alt="">
            <span class="block">设置占用</span>
          </li>

        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddBooking',
  data() {
    return {
      AddBooking: false,
      clientInfo: {
        userName: '张三丰',
        tel: '123123123123',
        product: '配镜',
        staff: '曹雪妮',
        time: '2020-07-08 13:00',
        duration: '40',
        num: 6,
        remark: '备注'

      }
    }
  },
  methods: {
    GeneralReservation() {
      this.$router.push('/AddAppointment')
    }
  }
}
</script>

<style scoped lang="scss">
  .ModifyReservaInfo::v-deep{
    .el-dialog{
      border-radius: 6px;
    }
    .searchDeliveryOrder{
      border-radius: 6px;
      .el-dialog__body{
        ul{
          display: flex;
          justify-content: space-around;
          li{
           img{
             width: 155px;
             height: 155px;
             border-radius: 12px;
           }
            span{
              line-height: 40px;
              text-align: center;
            }
          }
        }
      }

      .el-dialog__header{
        background: #F7F7F7;
        border-radius: 12px;
      }

    }

  }
</style>
