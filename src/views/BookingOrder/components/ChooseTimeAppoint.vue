<template>
  <!--  时长修改-->
  <!--    修改预约信息-->
  <div class="ChooseTimeAppoint">
    <el-dialog top="100px" title="" class="searchDeliveryOrder" align="center" width="900px" :visible.sync="ChooseTimeAppoint">
      <div slot="title">
        <span class="affrimOrderRider">预约时间</span>
        <!--        <span class="cancelOrderRider">骑手取消接单</span>-->
      </div>

      <div class="ChooseTimeAppointCon">
        <div class="ChooseTimeAppoint_Left">
          <div class="ChooseTimeAppoint_Left_Top">

            <i  class="el-icon-arrow-left" />
            <span>2020-07-07 周二</span>
            <i class="el-icon-arrow-right" />
          </div>
          <el-calendar v-model="value">
          </el-calendar>
        </div>
        <div class="ChooseTimeAppoint_Right" >
            <ul>
              <li v-for="item of timeList">{{item}}</li>
            </ul>

        </div>

      </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ChooseTimeAppoint',
  data() {
    return {
      value: new Date(),
      ChooseTimeAppoint: false,
      modeficatTimeVal: '', // 时间
      employeeTypeList: [
        {
          name: '全部'
        },
        {
          name: '店长'
        },
        {
          name: '店员'
        },
        {
          name: '验光师'
        }
      ],
      timeList:[ ]
    }
  },
  mounted() {
    for (let i=0;i<24;i++){
      if(i<10){
        this.timeList.push(`0${i}:00`)
      }else{
        this.timeList.push(`${i}:00`)
      }
    }

  }
}
</script>

<style scoped lang="scss">
  .ChooseTimeAppoint::v-deep{
    .el-dialog__body{
      padding: 0;
    }
    .ChooseTimeAppointCon{
      display: flex;
      .ChooseTimeAppoint_Right{
        background:#F7F7F7;
        width: 300px;
        padding-right: 50px;
        ul{
          padding: 30px 0px;
          width: 250px;
          height: 600px;
          overflow-y: scroll;
            li{
              line-height: 40px;
              height: 40px;
            }
        }
      }
      .ChooseTimeAppoint_Left{
        .ChooseTimeAppoint_Left_Top{
          margin: 30px auto;
          width: 270px;
          display: flex;
          justify-content: space-between;
          color: #101010 ;
          i{
            display: block;
            font-weight: 700;
          }
          span{
            display: block;
            font-weight: 700;
          }
        }
        .el-calendar-day{
          height: 60px;
          line-height:60px;
        }
        .prev,.current,.next{
          text-align: center;

          border: none;
          span{
          }
        }
        width: 600px;
        .el-calendar__header{
          display: none;
            border: none;
          .el-button-group{
          }
          .el-calendar__title{
            display: block!important;
            text-align: center!important;
            }
        }
      }
    }
    .el-dialog__header{
      background: #F7F7F7;
    }
    .el-dialog__footer {
      margin-top: 80px;
      padding: 0;
      .el-dialog__body{
        padding: 0;
      }
    }

  }
</style>
