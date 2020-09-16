<template>
  <div class="AddAppointment">
    <el-row>
      <el-col :span="16">
        <header>
          <div>
            <i class="el-icon-arrow-left" />
          </div>
          <span>新增预约</span>
        </header>
        <ReservatList />

      </el-col>
      <!--單據頁面-->
      <el-col :span="8">
        <ReservationInfo />
      </el-col>
    </el-row>

    <!--二级路由-->
    <!--    <router-view />-->
  </div>
</template>

<script>
import ReservationInfo from '@/views/BookingOrder/AddAppointment/ReservationInfo'
import ReservatList from '@/views/BookingOrder/AddAppointment/ReservatList'
export default {
  name: 'AddAppointment',
  components: {},
  components: { ReservatList, ReservationInfo },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.AddAppointment{
  min-height: 100vh;
  background: #F7F7F7;
  header{
    background: #fff;
  display: flex;
    height:80px;
    line-height: 80px;
    &>span{
      margin: 0 auto;
    }
    &>div{
      margin: auto 0;
      margin-left: 30px;
      width: 34px;
      height: 34px;
      background-color: #F7F7F7;
      display: flex;
      justify-content: center;
      i{
        font-weight: 600;
        margin: auto;
      }
    }
  }
}

</style>
