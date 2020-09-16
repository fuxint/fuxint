<template>
  <div class="platformBind">
    <div class="tags_top">
      <div class="tags_left">
        <i class="el-icon-arrow-left block" />
      </div>
      <div class="tags_center">
        订单号： RT202007030001 已结账
      </div>

      <div class="tags_right">
        <div class="tags_left">
          <i class="el-icon-printer" />
        </div>
        <div class="tags_left">
          <i class="el-icon-delete" />
        </div>
      </div>
    </div>

    <div class="OnlineOrderContent">
      <div class="OnlineOrderContent_Top">
        <div>订单时间：  2020 - 07-30  10:32 </div>
        <div>结账时间：  2020 - 07-30  10:32  </div>
      </div>

      <div class="product">
        <p><i class="el-icon-s-platform" /><span>产品</span></p>
        <ul>
          <li>
            <div>
              <span>BOSS  金属框架眼镜_全款_23123</span>
              <span>定制_0_s:-3.00 -3.00 180 R - Num:-1</span>
              <p>x1</p>
            </div>

            <div>
              <span>微店支付</span>
              <span>￥3000.00</span>
            </div>
          </li>
          <li>
            <div>
              <span>BOSS  金属框架眼镜金属框架眼镜_2222223123</span>
              <span>定制_0_s:-3.00 -3.80 R - Num:-1</span>
              <p>x1</p>
            </div>

            <div>
              <span>微店支付</span>
              <span>￥3000.00</span>
            </div>
          </li>

          <li>
            <div>
              <span>BOSS  金属框架眼镜_3123</span>
              <span>定制_0_s:-3.00 -3.00  R - Num:-1</span>
              <p>x1</p>
            </div>

            <div>
              <span>微店支付</span>
              <span>￥3000.00</span>
            </div>
          </li>
        </ul>

        <p>收货地址</p>
        <div class="userInfo">
          <span>收货人： 李潇潇</span>
          <span>电话号码： 2312323123131</span>
        </div>
        <div class="userFlex">
          <span> 收货地址： 苏州市工业园区裕新路168号1号楼201</span>
          <span>优惠： ￥1000.00</span>
        </div>

        <p>支付方式</p>

        <div class="payType">
          <div>
            <img src="../../static/image/offi.jpg" alt="">
            <span> 微店支付</span>
          </div>
          <p>总价：<span> ￥4000.00 </span></p>
        </div>

        <div class="marked">
          <i class="el-icon-edit" />
          <span>备注信息： 加急</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsView',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .platformBind{
    background: #F7F7F7 ;
    .OnlineOrderContent{
      .product{
        font-size: 14px;
        .userFlex{
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
        }
        .marked{
          margin-top: 40px;
          display: flex;
          span{
            display: block;
            margin-left: 20px;
          }
          i{
            color: #00DBFF;
            font-size: 18px;
          }
        }
        .payType{
          display: flex;
          justify-content: space-between;
          line-height: 40px;
        p{
          span{
            color: #FB6582 ;
            font-weight: 600;
          }
        }
          div{
            display: flex;
            span{

              display: block;
            }
          }
          img{
            margin-right: 20px;
            width: 40px;
            height: 40px;
          }

        }
        .userInfo{
          display: flex;
          span{
            margin-right:30px;
            display: block;
            margin-bottom: 15px;
          }
        }
        ul{
          margin-bottom: 30px;
          background: #F7F7F7;
          padding:10px 35px;
         li{
           line-height: 55px;
           display: flex;
           justify-content: space-between;
          div{
            &:nth-of-type(1){
              span{
                &:nth-of-type(1){
                  width:300px;
                }
                &:nth-of-type(2){
                  width: 300px;
                }
              }
              p{
                width: 100px;
              }
              width: 900px;
            }
            &:nth-of-type(2){
              width: 200px;
            }
            display: flex;
            justify-content: space-between;
          }
         }
        }
        &>p{
          font-size: 16px;
          display: flex;
          line-height: 60px;
          span,i{
            display: block;
          }
          i{
            margin: auto 6px auto 0;
            font-size: 24px;
            color: #00DBFF;
          }
        }
      }
      margin: 0 50px;
      background: #fff;
      padding: 32px;
      .OnlineOrderContent_Top{
        line-height: 80px;
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        div{
          padding-left: 30px;
          width: 250px;
        }
      }
    }
    min-height:100vh;
    .tags_center{
      line-height:40px;

    }
    .tags_right{
      margin-right: 10px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      .tags_left{
        text-align: center;
          .el-icon-delete{
            color: #FB5374 !important;
        }
      }
    }

    .tags_top{
      background: #F7F7F7 ;
      position: relative;
      padding: 20px ;
      height: 80px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      .tags_left{
        border-radius:8px;
        width: 34px;
        height: 34px;
        background-color:#fff;
        i{
          font-weight: 700;
          padding-top: 8px;
          text-align: center;
        }
      }
    }
  }

</style>
