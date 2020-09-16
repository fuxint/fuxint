<template>
  <div class="ReservationInfo">
    <div class="ReservationInfoContent">
      <div class="ReservationInfoContentTop">
        <span>预约信息</span>
        <div>
          <span class="cursor" :style="{background:identityType==0?'#000000':'#F7F7F7 ',color:identityType==0?'#fff':'#000 '}" @click="identityType=0">散客</span>
          <span class="cursor" :style="{background:identityType==1?'#000000':'#F7F7F7 ',color:identityType==1?'#fff':'#000 '}" @click="identityType=1">会员</span>
        </div>
      </div>

      <div v-if="identityType==1" class="ReservationInfoContentUser">
        <div>
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          <span>马云</span>
          <span>  123456</span>
        </div>
        <div>
          <img src="" alt="">
          <i class="el-icon-document-copy" />
        </div>
      </div>
      <div class="userInfo userInfo1">
        <el-form ref="form" :style="{padding:identityType==0?'30px 0 30px 30px':'30px',width:identityType==0?'':'100%'}" label-width="80px">
          <el-form-item label="顾客信息">
            <el-input />
          </el-form-item>
          <el-form-item label="顾客电话">
            <el-input />
          </el-form-item>

        </el-form>

        <span v-show="identityType==0" class="cursor" @click="NewMembersBooking">新会员</span>
      </div>
      <div class="userInfo">
        <el-form ref="form" label-width="80px">
          <el-form-item label="预约员工">
            <el-input suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="到店时间">
            <el-input suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="预约时长">
            <el-input suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="到店人数">
            <div class="el-input-number_center">
              <el-input-number />
            </div>
          </el-form-item>
          <el-form-item label="预约备注">
            <el-input type="textarea" placeholder="请填写备注" />
          </el-form-item>
        </el-form>
      </div>

      <div class="ReservationProduct">
        <p>预约项目</p>
        <ul>
          <li>
            <div>
              <i class="el-icon-remove-outline" />
            </div>
            <span>配镜</span>
          </li>
        </ul>
      </div>
    </div>
    <button class="ReservationInfoAffrim">预约</button>
  </div>
</template>

<script>
export default {
  name: 'ReservationInfo',
  data() {
    return {
      identityType: 0
    }
  },
  methods: {
    NewMembersBooking() {

    }

  }
}
</script>

<style scoped lang="scss">
.ReservationInfo{
.userInfo1{
  padding:0 !important;
  display: flex;
  justify-content: space-between;
  &>form{
    .el-form-item{
    &:nth-of-type(2){
      margin-bottom: 0;
    }
    }
    padding-left:30px ;
  }
  span{
    text-align: center;
    color: #00DBFF ;
    height: 80px;
    border-left: 1px solid #E3E3E3;
    line-height: 80px;
    width: 80px;
    margin: auto 0;
  }
}
  .ReservationInfoContentTop{
    display: flex;
    &>span{
      margin-right: 30px;
      border-right: 1px solid #E3E3E3 ;
      padding-right: 30px;
      line-height: 50px;
    }
    &>div{
      display: flex;
      span{
        &:nth-of-type(1){
          border-radius: 6px 0 0 6px;
          width: 90px;
          height: 50px;
          line-height: 50px ;
          background-color: rgba(247, 247, 247, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 16px;
          text-align: center;
          font-family: Roboto;
        } &:nth-of-type(2){
            border-radius: 0 6px 6px 0 ;
            width: 90px;
            height: 50px;
            line-height: 50px ;
            background-color: #000000;
            color: #fff;
            font-size: 16px;
            text-align: center;
            font-family: Roboto;
          }

      }
    }
  }
  .ReservationInfoContent::v-deep{
    height: 100vh;
    overflow-y: scroll;
    .ReservationProduct{
      ul{
        li{
          border-radius: 6px;
          display: flex;
          span{
            display: block;
            line-height: 50px;
            }
          font-size: 16px;
          height: 50px;
          background: #F7F7F7;
          display: flex;
          div{
            width: 80px;
            display: flex;
            i{
              color: #939292 ;
              margin: auto;
              font-size: 20px;
            }
          }
        }
      }
      &>p{
        line-height: 70px;
        padding-left:30px;
        width: 100px;
        text-align: right;
      }
    }
    .el-form-item__label{
      color: #939292;
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
    .el-input__icon{color: #101010;
      font-weight: 600;}
    .userInfo{
      .el-form-item__label{
        text-align: right;
      }
      form{
          .el-form-item{
            &:nth-last-of-type(1){
              margin-bottom: 0;

            }
        }
      }
      margin-top: 18px;
      background: #F7F7F7;
      padding: 30px  ;
      input,.el-input,el-input__inner,.el-textarea__inner{
        border: none!important;
      }
    }
    .ReservationInfoContentUser{
      margin: 15px 0;
      &>div{
        display: flex;
        .el-avatar{
          margin: auto 20px;
        }
      }
      i{
        margin: auto 20px;
        font-size: 30px;
      }
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      line-height: 60px;
      height: 60px;
      background: #F9F308;
    }
    padding: 30px;
  }
  background: #fff;
  height: 100vh;
  position: relative;
  .ReservationInfoAffrim{
    width: 100%;
    z-index: 999;
    position: absolute;
    bottom: 0;
    height: 60px;
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-family: Roboto;
  }
}
</style>
