<template>
  <div class="MemberCardInfoDetail">
    <div class="member_banner">
      <span>会员信息</span>
      <p>会员卡号： 3123123123</p>
    </div>
    <div class="MemberCardInfoDetailAmend">
      <div class="MemberCardInfoAmend">
        <div class="MemberCardUser">
          <el-avatar src="https://empty">
            <!--                <img src=""/>-->
          </el-avatar>
          <div>
            <span>张三</span>
            <span>1339873423423</span>
            <span>No. 312312</span>
            <div>
              <span>会员顾问：  王梅 (123123）</span>
              <svg-icon icon-class="edit" @click="EditMemberModificate" />
            </div>

            <div>
              <span>会员备注：</span>
              <svg-icon icon-class="edit" />
              <span>这个客户很好沟通</span>
            </div>
          </div>
        </div>

        <div class="MemberCardInfoAmendList">
          <ul>
            <li>
              <p>1233</p>
              <span>会员积分</span>
            </li>
            <li>
              <p>1233</p>
              <span>会员积分</span>
            </li>
            <li>
              <p>隐藏已过期账户</p>
              <el-switch
                v-model="value"
                active-color="#00DBFF"
                inactive-color="#C9C9C9"
              />
            </li>
          </ul>
        </div>

      </div>
      <div class="MemberCardInfoTag">
        <p>标签</p>
        <ul>
          <li v-for="item of clienteList">{{ item }}</li>
        </ul>
      </div>

      <div class=" MemberCardInfoTag2">
        <p>消费情况</p>
        <ul>
          <li>
            <span>上次到店时间</span>
            <p>2020-08-03 10:30</p>
          </li>
          <li>
            <span> 到店次数</span>
            <p>5</p>
          </li>
          <li>
            <span> 真实消费</span>
            <p>2312</p>
          </li><li>
            <span>消费总金额</span>
            <p>2312</p>
          </li>
          <li>
            <span>客单价</span>
            <p>2312</p>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCardInfoDetail',
  data() {
    return {
      value: true,
      clienteList: [
        '高消费能力客户', '体验客户', '高频客户'
      ]
    }
  },
  methods: {
    EditMemberModificate() {
      this.$router.push('/MemberUser/MemberCardDetail/MemberModificate')
    }
  }
}
</script>

<style scoped lang="scss">
.MemberCardInfoDetail::v-deep{

  min-height: 100%;
  .MemberCardInfoDetailAmend{
    .MemberCardInfoTag2{
      margin-top: 18px;
      background: #fff;
      border-radius: 6px;
      padding-left: 40px;
      ul{
        li{
          padding-bottom: 20px;
          display: flex;
          span{
            display: block;
            width: 290px;
          }
        }
      }
      &>p{
        line-height: 90px;
      }
    }
.MemberCardInfoTag{
  margin-top: 18px;
  background: #fff;
  display: flex;
  border-radius: 6px;
  height: 90px;
  p{
    line-height: 90px;
    padding-left: 40px;
    margin-right: 60px;
  }
  ul{
    margin: auto 0;
    li{
      line-height: 40px;
      height: 40px;
      text-align: center;
      width: 130px;
      border-radius: 6px;
      border: 1px solid rgba(187, 187, 187, 1);
      margin-right: 10px;
    }
    display: flex;

  }
}
    .MemberCardInfoAmend{
      background: #fff;
      margin-bottom: 18px;
      padding: 0 32px;
      .MemberCardInfoAmendList{
        display: flex;
        padding-left:200px ;
        ul{
          display: flex;
          li{
            &:nth-of-type(3){
              .el-switch__core{
              //  margin-top: -6px;
              }
             p{ color:rgba(16, 16, 16, 0.8); line-height: 50px;
               font-weight: 500!important; }

            }
            width: 130px;
            text-align: center;
            padding: 30px 0;
            span{
              display: block;
              text-align: center;
              font-size: 14px;
              color: #B7B7B7;
              line-height: 22px;
            }
            p{
              font-weight: 600;
              color: #000;
              line-height: 50px;
              font-size:16px ;
            }
          }
        }
      }
      .MemberCardUser{

        padding-bottom: 20px;
        border-bottom: 1px solid rgba(223, 222, 222, 0.6);
        .el-avatar{
          position: relative;
          z-index: 5;
          margin: -65px 20px 0 50px;
          width: 130px;
          height: 130px;
          line-height:130px;
          background-color: rgba(247, 247, 247, 1);
          text-align: center;
        }
        &>div{
          &>div{
            display: flex;
            span{
              line-height:34px;
            }
            svg{
              font-size: 20px;
              margin: auto 14px;
              color:#00DBFF;
            }
          }
          &>span{
            font-size: 16px;
            line-height:34px;
            &:nth-of-type(1){
              font-size: 18px;
            }
            display: block;
          }
        }
        display: flex;
      }
    }
  }
  .member_banner{
    color: #fff;
    font-size: 20px;
    width: 100%;
    height: 340px;
    position: relative;
    p{
      position: absolute;
      right: 20px;
      line-height: 80px;
      bottom: 0px;
      font-size: 16px;
    }
    background: url("../../../../static/image/offi.jpg");
   span{
     display: block;
     text-align: center;
     line-height: 340px;
     color: #fff;
   }
  }
}
</style>
