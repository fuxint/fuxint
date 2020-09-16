<template>
  <div class="memberInfo">

    <div class="MemberCardUserInfo">
      <div class="MemberCardUserInfoTop">
        <div class="tags_left">
          <i class="el-icon-arrow-left block" />
        </div>
          <span>会员卡信息</span>
      </div>

      <div class="MemberCardUser">
        <el-avatar  src="https://empty" >
          <img src=""/>
        </el-avatar>
        <div>
          <span>张三</span>
          <span>1339873423423</span>
        </div>
      </div>
    </div>

    <el-row class="tac">
      <el-col>
        <el-menu
          router="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item :index="item.routerLink" v-for="item of tabbarList">
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>

</template>

<script>
    export default {
        name: "MemberCardUserInfo",
        data(){
          return{
            tabbarList:[
              {
                title:'会员资料',
                routerLink:''
              },
              {
                title:'验光单',
                routerLink:''
              },
              {
                title:'交易历史',
                routerLink:''
              },
              {
                title:'预约事件',
                routerLink:''
              },
              {
                title:'视光记录',
                routerLink:''
              },
              {
                title:'抵扣券',
                routerLink:''
              },
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
  .memberInfo::v-deep{
    padding-top: 60px;
    min-width: 278px;
    min-height: 100vh;
    background: #fff;
    height: 100%;
  .el-menu{
    border-right: none;
      .el-menu-item{
        text-align: center;
        font-size: 16px;
      }
  }
  .MemberCardUserInfo {

    padding:0 0 60px 20px;
    .MemberCardUser{
      display: flex;
      .el-avatar{
        width: 70px;
        height:70px;
        line-height:70px;
        background-color: rgba(247, 247, 247, 1);
        text-align: center;
      }
      &>div{
        margin-left: 10px;

        span{
          font-size: 16px;
          &:nth-of-type(1){
            line-height:46px;
            font-size: 18px;
          }
          display: block;
        }
      }
    }
  .MemberCardUserInfoTop{
    span{
      font-size: 24px;
      display: block;
      line-height: 50px;
    }
    display: flex;
    margin:0px 0 60px 0px;
.tags_left{
  margin: auto 20px auto 0;
  background: #F7F7F7 ;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 12px;
  .el-icon-arrow-left{
    font-weight: 800;

    display: block;
    text-align: center;
    line-height: 40px;
  }
}  }
  }

  }

</style>
