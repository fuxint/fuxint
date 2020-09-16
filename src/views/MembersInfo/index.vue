<template>
  <div class="MembersInfBox VerificationAudit_box">
    <el-dialog width="1180px" :visible.sync="MembersInfo" top="8vh">
      <div>
        <div class="MembersInfoHead ">
          <p>会员信息</p>
          <div>
            <el-row type="flex">
              <el-col :span="6">
                <div type="flex" class="grid-content bg-purple">
                  <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                  <div>
                    <p>韩梅梅 （女）</p>
                    <p>13131351313131<i class="el-icon-copy-document cursor" /></p>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-card">
                  <div><p>电子会员卡</p><p class="Color32E7CA">开卡</p></div>
                  <div><p>充值</p></div>
                  <div><i class="el-icon-refresh" /></div>
                </div>
              </el-col>
            </el-row>
          </div>
          <el-row class="member_datum" type="flex">
            <el-col :span="6">
              <p>0</p>
              <span>储值金额</span>
            </el-col>
            <el-col :span="6">
              <p>0</p>
              <span>积分</span>
            </el-col>
            <el-col :span="6">
              <p>0</p>
              <span>优惠券</span>
            </el-col> <el-col :span="6">
              <p />
              <span />
            </el-col>
          </el-row>
        </div>
        <div class="MembersInfo">
          <ul>
            <router-link v-for="(item,index) of membersInfoList" :key="index" class="cursor" tag="li" :to="item.routerLink">{{ item.title }}</router-link>
          </ul>
          <router-view />

        </div>
      </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MembersInfo',
  data() {
    return {
      MembersInfo: true,
      membersInfoList: [
        {
          title: '客户信息',
          'routerLink': '/BillingOrder/MembersInfo/customerInfo'
        },
        {
          title: '标签',
          'routerLink': '/BillingOrder/MembersInfo/MemberLabel'
        },
        {
          title: '验光单',
          'routerLink': '/BillingOrder/MembersInfo/eyeGlassPrescription'
        },
        {
          title: '交易历史',
          'routerLink': '/BillingOrder/MembersInfo/TransactionHistory'
        },
        {
          title: '预约事件',
          'routerLink': '/BillingOrder/MembersInfo/ScheduledEvents'
        },
        {
          title: '视光记录',
          'routerLink': '/BillingOrder/MembersInfo/quitOptometryRecord'
        },
        {
          title: '抵扣券',
          'routerLink': '/BillingOrder/MembersInfo/discountCoupon'
        }
      ]
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">

  .MembersInfBox::v-deep {
    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      color: #101010;
      padding: 0;

    }
    .MembersInfo{

      &>ul{
        margin-bottom: 30px;
        display: flex;
        border-bottom: 1px solid #EEEEEE ;
        li{
          text-align: center;
          min-width:150px;
          line-height: 48px;
          line-height: 48px;
        }
      }
    }

    .MembersInfoHead {

    .el-row{
     &:nth-of-type(1){
       padding: 0 20px;
     }
      &:nth-of-type(2){

       text-align: center;
        font-size: 14px;
        p{
          padding-top: 10px;
          line-height: 30px;
        }
      }
      justify-content: space-between;
    }
      .member_datum{
        margin-top: 20px;
        height: 72px;
        background-color: rgba(229, 229, 229, 0.52);
        text-align: center;
      }
      & > p {
        padding-left: 20px;
        line-height: 72px;
        font-size: 18px;
      }
      .grid-card{
        display: flex;
        flex-wrap: wrap;
        &>div{
      height: 60px;
      text-align: center;
          &:nth-of-type(1){
            padding:0 160px 0 20px  ;
            width:180px;
            border-radius: 10px 0 0 10px;
            background-color: rgba(255, 255, 255, 0.72);
            p{
              line-height: 30px;
              font-size: 14px;
              width: 80px;
              text-align: center;
            }
          }
          &:nth-of-type(2){
            width:120px;

            background-color:#fff;
            p{
              padding:3px 40px 3px  10px  ;
            line-height: 40px;
            margin-top:8px;
            border-right: 1px solid #BBBBBB;
          }
          }
          &:nth-of-type(3){
            font-size: 24px;
            line-height: 60px;
            width:120px;
            border-radius: 0px 10px 10px 0px;
            background-color:#fff;
          }
        }
      }
      .grid-content {
        display: flex;

        .el-avatar {
          width: 60px;
          height: 60px;
        }

        div {
          padding-left: 20px;

          p {

            i {
              width: 17px;
              height: 17px;
              color: #AAA6A6;
              margin-left: 5px;
            }

            line-height: 30px;
          }
        }

      }

      font-family: SourceHanSansSC-regular;
      width: 100%;
      border-radius: 6px;
      background: rgba(249, 243, 8, 0.84);
    }

  }

  .VerificationAudit_box::v-deep {

    .affrim {
      text-align: center;
      color: white;
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 1);
      font-size: 16px;
      margin-top: 30px;
    }

  }
</style>
