<template>
  <!--    修改预约信息-->
  <div class="ModifyReservaInfo">
    <el-dialog v-if="ModifyReservatInfo" top="100px" title="" class="searchDeliveryOrder" align="center" width="670px" :visible.sync="ModifyReservatInfo">
      <div slot="title">
        <span class="affrimOrderRider">骑手已接单</span>
        <!--        <span class="cancelOrderRider">骑手取消接单</span>-->
      </div>
      <div class="CallRiderOrderDelivey ">
        <span class="block">编辑</span>
        <el-form ref="form" v-model="clientInfo" class="CallRiderOrderDeliveyForm" label-width="80px">
          <el-form-item label="顾客信息">
            <el-input v-model="clientInfo.userName" disabled="true" suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="顾客电话">
            <el-input v-model="clientInfo.tel" type="text" disabled="true">
              <div slot="suffix" class="suffixIcon" suffix @click="phoneNumberCheck">
                <i class="el-icon-user-solid" />
                <svg-icon icon-class="search " class="iconSearch" />
              </div>
            </el-input>

          </el-form-item>
          <el-form-item label="预约项目">
            <el-input v-model="clientInfo.product" disabled="true" />
          </el-form-item>
          <div class="deliveryLine" />
          <el-form-item label="预约员工">
            <el-input v-model="clientInfo.staff" disabled="true" suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="到店时间">
            <el-input v-model="clientInfo.time" disabled="true" suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="预约时长" @click="ModificatTime">
            <el-input v-model="clientInfo.duration" disabled="true" suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="到店人数">
            <div class="el-input-number_center">
              <el-input-number />
            </div>
            <!--            <el-input  v-model="clientInfo.num"></el-input>-->
          </el-form-item>
          <el-form-item label="预约备注">
            <el-input v-model="clientInfo.remark" disabled="true" />
          </el-form-item>
        </el-form>
        <div />
      </div>
      <span class="dialog-footer">
        <el-button class="block">取 消</el-button>
        <el-button>确 定</el-button>
      </span>

      <el-dialog
        width="435px"
        :visible.sync="phoneNumberIsCheck"
        append-to-body
        class="IsCheckForPhoneNumCon"

      >
        <div class="IsCheckForPhoneNum">
          <p>提示</p>
          <div>
            <i class="el-icon-warning" />
            <span>是否通过搜索该手机号码来查看会员信息？</span>
          </div>
        <div>
          <span class="block cursor" @click="phoneNumberIsCheck=false">取消</span>
          <span class="block cursor">确认</span>
        </div>
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>
]

<script>
export default {
  name: 'ModifyReservatInfo',
  data() {
    return {
      phoneNumberIsCheck: false,
      ModifyReservatInfo: true,
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
    // 手机号码查看
    phoneNumberCheck() {
      this.phoneNumberIsCheck = true
    }
  }
}
</script>

<style scoped lang="scss">
  .IsCheckForPhoneNumCon::v-deep{

    .el-dialog__header{
      display: none!important;
    }
    .el-dialog{
      border-radius: 12px;
    }
    .el-dialog__body{padding: 0;}
    .IsCheckForPhoneNum{
      &>p{
        font-size: 18px;
        text-align: center;
        line-height:90px ;
      }
      div{
        display: flex;
        &:nth-of-type(2){
            span{
              &:nth-of-type(1){
                border-radius: 0 0 0 12px;
              }
              &:nth-of-type(2){
                border-radius: 0  0 12px 0 ;
              }
              width: 218px;
              height: 60px;
              line-height: 60px;
              border-radius: 0px 0px 0px 12px;
              background-color: rgba(255, 255, 255, 0);
              color: rgba(16, 16, 16, 1);
              font-size: 16px;
              text-align: center;
              font-family: Roboto;
              border: 1px solid rgba(236, 236, 236, 1);
            }
        }
        &:nth-of-type(1){
        padding: 0 30px 30px 30px;
        display: flex;
        justify-content: center;
        i{
          margin: auto 0;
          font-size: 18px;
          margin-right: 10px;
        }
        span{
          display: block;
          line-height: 20px;
        }
      }
      .el-icon-warning{
        color: rgba(251, 58, 95, 0.9);
      }
    }
    }

  }
.ModifyReservaInfo::v-deep{



  .el-icon-user-solid{
    color: #101010;
    font-size: 20px;
  }
  .suffixIcon{
    position: relative;
    .iconSearch{
      position: absolute;
      right: -4px;
      top: 15px;
      color: #101010;
      background: #fff;
    }
  }
  .el-input.is-disabled .el-input__inner{
    color: #101010;
    background: #fff;
  }
  .el-input-number__decrease,.el-input-number__increase{
    color: #101010;
    border-right: 0;
    border-left: 0;
    background: #fff;
  }
  .el-input-number_center{display: flex;
    justify-content: center;
    background: #fff;
    margin: 0 auto;
    .el-input-number{
      margin: 0 auto;

    }
  }
 .el-dialog{
    border-radius: 12px;
  }
 .searchDeliveryOrder{
   border-radius: 12px;
   .el-dialog__body{
     padding: 0!important;
   }
   .dialog-footer{

     display: flex;
     button{
       border: none;
       width: 50%;
       margin: 0;
       &:nth-of-type(1){

       height: 50px;
       border-radius: 0px 0px 0px 6px;
       background-color: rgba(247, 247, 247, 1);
       color: rgba(16, 16, 16, 1);
       font-size: 16px;
       text-align: center;
     }
       &:nth-of-type(2){
         color: #fff;
         height: 50px;
         border-radius: 0px 0px 6px 0px ;
         background-color:#101010;
         font-size: 16px;
         text-align: center;
       }
     }
   }
   .el-dialog__header{
     background: #F7F7F7;
     border-radius: 12px;
   }
   .CallRiderOrderDelivey{
     padding: 20px 30px;
     &>span{

       text-align: right;
       color: #00DBFF ;
     }
     .CallRiderOrderDeliveyForm{
       .deliveryLine{
         margin: 50px 0;
         background: #ECECEC;
         height: 1px ;
       }
      .el-form-item{
        padding: 0 96px;

      }

       input{
         border: 1px solid #F7F7F7 ;
         text-align: center;
       }
     }
   }
 }

.affrimOrderRider{
  line-height: 30px;
}
}
</style>
