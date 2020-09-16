<template>
  <!--  时长修改-->
  <!--    修改预约信息-->
  <div class="ModifyReservaInfo">
    <el-dialog v-if="ModifyReservatInfo" top="100px" title="" class="searchDeliveryOrder" align="center" width="670px" :visible.sync="ModifyReservatInfo">
      <div slot="title">
        <span class="affrimOrderRider">预约员工</span>
        <!--        <span class="cancelOrderRider">骑手取消接单</span>-->
      </div>

      <div>
          <ul class="employeeTypeList">
            <li class="cursor" v-for="item of employeeTypeList"><span>{{item.name}}</span></li>
          </ul>

          <ul class="employeeList">
            <li v-for="item of 5">
             <div>
               <el-avatar  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
             </div>
              <span>曹雪凝</span>
              <p>工号： 31231</p>
              <el-checkbox size="medium"  ></el-checkbox>
            </li>
          </ul>
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
        ModifyReservatInfo: false,
        modeficatTimeVal: '', // 时间
        employeeTypeList:[
          {
            name:'全部'
          },
          {
            name:'店长'
          },
          {
            name:'店员'
          },
          {
            name:'验光师'
          }
        ]
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
    .employeeList{
      height: 250px;
      .el-checkbox__input.is-checked .el-checkbox__inner{
        background:#00DBFF!important;
        border-color:#00DBFF;
        border-radius: 50%;
        text-align: center;

      }
      .el-checkbox__inner{
        border-radius: 50%;
        border-color: #939292;
        //  background:#00DBFF!important;
      }
      margin-top: 50px;
     li{
       margin-bottom: 15px;
       display: flex;
       justify-content: space-between;
       line-height: 40px;
       &>div{
         width: 100px;
       }
       &>span{
        width:  150px
       }
       p{
         width: 300px;
       }
     }
    }
  .employeeTypeList{
    display: flex;
    li{
      width: 12%;
      justify-content: space-between;
      span{
        display: inline-block;
        text-align: center;
        line-height: 40px;
        border-bottom: 2px solid #00DBFF;
      }
    }
  }
    .el-dialog__header{
      border-radius: 6px;
      background: #F7F7F7 ;
    }
    .affrimOrderRider{
      line-height: 30px;
    }

    .el-dialog{
      border-radius: 6px;
    }

  }
</style>
