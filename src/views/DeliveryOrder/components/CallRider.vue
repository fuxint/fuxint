<template>
  <div class="CallRider">
    <el-dialog v-if="OrderDeliveryType==2" title="" class="CancelOrderCon" align="center" style="border-radius: 12px" width="670px" :visible.sync="DeliveryCallRider">

      <div class="CallRiderHead CancelOrderHead">
        <p>今天10:39 你主动取消了跑腿</p>

        <div>
          <img src="../../../static/wechart.png" alt="">
          <span>取消规则</span>
          <i class="el-icon-arrow-right" />
        </div>
      </div>
      <div class="cancelOrderBox">
        <button class="cancelOrder" @click="ReplaceDeliveryOrder()">重新发布跑腿任务</button>
      </div>
    </el-dialog>

    <el-dialog v-if="OrderDeliveryType==0" title="" align="center" style="border-radius: 12px" width="670px" :visible.sync="DeliveryCallRider">

      <div class="CallRiderHead">
        <p>骑手通常会在 <span>3分钟内</span> 接单，请耐心等等</p>

        <div>
          <img src="../../../static/wechart.png" alt="">
          <span>等待骑手接单： 0 : 0 3  </span>
        </div>
      </div>
      <div class="CallRiderFootBox">
        <div v-if="AddFeeDeliveryTerrace==true" class="AddFeeDelivery">
          <AddFeeDelivery />
        </div>
        <div class="CallRiderFoot">

          <div>
            <img src="../../../static/wechart.png" alt="">
            <div>
              <p>感谢费</p>
              <p>添加后骑手更愿意优先接单</p>
            </div>
          </div>
          <div>
            <button v-if="AddDeliveryFeeOrder==0" class="addOrder" @click="AddDeliveryFee()">添加</button>
            <button v-else class="addOrder">已添加{{ AddDeliveryFeeOrder }}元</button>
          </div>

        </div>
        <div>
          <button class="affirmOrder" @click="CancelDelivery()">取消跑腿</button>
          <button class="cancelOrder">刷新状态</button>
        </div>
      </div>
    </el-dialog>

    <el-dialog v-if="OrderDeliveryType==1" title="" align="center" style="border-radius: 12px" width="670px" :visible.sync="CallRiderOrderDelivey">
      <div slot="title">
        <span class="affrimOrderRider">骑手已接单</span>
        <!--        <span class="cancelOrderRider">骑手取消接单</span>-->
      </div>
      <div class="CallRiderOrderDelivey">
        <div class="CallRiderOrderDelivey_top">
          <ul>
            <li class="CallRiderOrderDelivey_topInfo"> 美团订单： 2321321312312312312312312 </li>
            <li class="CallRiderOrderDelivey_topInfo"> 下单时间： 2020-12-12 23:21:00 </li>
            <li class="CallRiderOrderDelivey_topInfo"> 配送距离 10km </li>
            <li> <span>收货人： 李潇潇</span>  <span>  电话号码： 2312323123131</span> </li>
            <li> 收货地址： 苏州市工业园区裕新路168号1号楼201  </li>
          </ul>
        </div>
        <div class="CallRiderOrderDelivey_bottom">
          <div class="CallRiderOrderDelivey_bottom_top">
            <div>
              <div>
                <img src="../../../static/wechart.png" alt="">
                <p>闪送骑手：     雷军</p>
              </div>
              <div>
                <i class="el-icon-phone" />
                <i class="el-icon-location" />
              </div>
            </div>
          </div>
          <ul>
            <li> 20:32 骑手已接单，正在赶往商家取货</li>
            <li :class="1==1?'activeCancelOrder':''"> 20:42 骑手已取货，正在赶往买家</li>
          </ul>

          <div v-if="1==2">
            <button class="affirmOrder">关闭</button>
            <button class="cancelOrder">刷新状态</button>
          </div>

          <div v-else class="anewSummonRider">
            <span>确认取消并重新召唤骑手</span>
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog v-if="OrderDeliveryType==3" title="" class="searchDeliveryOrder" align="center" style="border-radius: 12px" width="670px" :visible.sync="CallRiderOrderDelivey">
      <div slot="title">
        <span class="affrimOrderRider">骑手已接单</span>
        <!--        <span class="cancelOrderRider">骑手取消接单</span>-->
      </div>
      <div class="CallRiderOrderDelivey ">
        <div class="CallRiderOrderDelivey_top">
          <ul>
            <li class="CallRiderOrderDelivey_topInfo"> 美团订单： 2321321312312312312312312 </li>
            <li class="CallRiderOrderDelivey_topInfo"> 下单时间： 2020-12-12 23:21:00 </li>
            <li class="CallRiderOrderDelivey_topInfo"> 配送距离 10km </li>
            <li> <span>收货人： 李潇潇</span>  <span>  电话号码： 2312323123131</span> </li>
            <li> 收货地址： 苏州市工业园区裕新路168号1号楼201  </li>
          </ul>
        </div>
        <div class="CallRiderOrderDelivey_bottom">
          <div>
            <ul>
              <li v-for="item of 3">
                <div>
                  <img src="../../../static/wechart.png" alt="">
                  <span>达达跑腿</span>
                </div>
                <div>
                  预估：  9.00 元
                </div>
              </li>
            </ul>
          </div>

          <div class="cancelOrderBox">
            <button class="cancelOrder" @click="ReplaceDeliveryOrder()">确认</button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AddFeeDelivery from '@/views/DeliveryOrder/components/AddFeeDelivery'
export default {
  name: 'AddSalesman',
  components: { AddFeeDelivery },
  data() {
    return {
      DeliveryCallRider: true,
      CallRiderOrderDelivey: true
    }
  },
  computed: {
    // 加价弹框显示
    AddFeeDeliveryTerrace() {
      console.log('csss')
      return this.$store.state.TerraceOrder.AddTerraceOrderShow
    },
    // 加价金额
    AddDeliveryFeeOrder() {
      return this.$store.state.TerraceOrder.AddTerraceDeliveryFee
    },
    // 订单类型
    OrderDeliveryType() {
      return this.$store.state.TerraceOrder.OrderDeliveryType
    }

  },
  mounted() {
    console.log()
  },
  methods: {
    // 重新发布
    ReplaceDeliveryOrder() {
      this.$store.dispatch('TerraceOrder/RevampTerraceOrderType', 0)
    },
    //  添加感谢费
    AddDeliveryFee() {
      this.$store.dispatch('TerraceOrder/AddTerraceFeeShow', true)
    },
    // 取消订单
    CancelDelivery() {
      this.$store.dispatch('TerraceOrder/RevampTerraceOrderType', 1)
    }
  }
}
</script>

<style scoped lang="scss">
  *{
    font-family: SourceHanSansSC-regular;
  }
  .searchDeliveryOrder{
    height: auto!important;
    .CallRiderOrderDelivey_bottom{
      padding: 0px 30px!important;
      ul{
        padding: 30px 0 30px 0 !important;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        li{
          margin: 0 30px 25px 0;
          background: #fff;
          div{ color: #101010;
            &:nth-of-type(1){
              display: flex;
              font-size: 14px;
              img{
                display: block;
                margin: auto 5px auto 0;
                width: 29px;
                height: 26px;
              }
            }
            &:nth-of-type(2){
              font-size: 12px;
            }
            line-height: 60px;
          }
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          vertical-align: center;
          padding: 0 15px;
          width: 236px;
          height: 60px;
        }
    }
    }
    .cancelOrderBox{
      padding-bottom: 40px!important;
      .cancelOrder{
        width:100%!important;
      }
    }
  }
.affrimOrderRider{
  font-size: 18px;
  font-weight:800;
  color: #000;
}
.anewSummonRider{
  span{
    margin: 0 auto;
    display: block;
    width: 254px;
    height: 45px;
    line-height: 45px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
  }
}

.cancelOrderRider{
  font-size: 18px;
  font-weight: 800;
  color: rgba(251, 58, 95, 0.57);
}
  .CallRiderOrderDelivey{
    padding-bottom: 10px;
    font-size: 16px;
    color: #101010;

    .CallRiderOrderDelivey_top{
      padding:0 20px ;
      text-align: left;
      .CallRiderOrderDelivey_topInfo{
        font-size: 14px;
        color: #AAA6A6 ;
      }
      ul{
        line-height: 30px;

      }
    }

    .CallRiderOrderDelivey_bottom{
      ul{
        text-align: left;
        padding: 15px 30px 0 50px;
        min-height: 130px;

        li{
          text-align: left;
          line-height: 30px;
          color: rgba(174, 174, 178, 1);
          &.activeCancelOrder{
            color: rgba(251, 58, 95, 0.57);
          }
        }
      }
      margin-top: 20px;
      padding:0 20px ;
      text-align: center;
      background: #F7F7F7;
      .CallRiderOrderDelivey_bottom_top{
        padding:0 20px ;
        width: 100%;
        display: flex;
        justify-content: space-between;
        &>div{
          i {
            font-size: 18px;
            margin: auto 0;
            display: block;
            color: #8E8E93;
          }
          display: flex;
          vertical-align: center;
          line-height: 70px;
          img{
            margin: auto 5px auto 0 ;
            display: block;
            width: 30px;
            height: 31px;
          }
         div{
           &:nth-of-type(2){
             display: flex;
             width:80px;
             justify-content: space-between;
           }
           &:nth-of-type(1){
             display: flex;
            width: 500px
           }
         }

        }

      }
    }
  }

  .CallRider::v-deep{
    .CancelOrderCon{
      .cancelOrderBox{
        padding-bottom: 40px!important;
        .cancelOrder{
          width: 360px!important;
        }
      }
      .CancelOrderHead{
        div{
          span{
            color: #666666!important;
          }
          i{
            font-size: 20px;
            display: block;
            margin: auto 0;
          }
        }
      }
    }
    .affirmOrder{
      margin-right: 20px;
    }
    .CallRiderFootBox{
      position: relative;
      width: 669px;
      height: 247px;
      border-radius: 0px 0px 12px 12px;
      background-color: rgba(247, 247, 247, 1);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      .AddFeeDelivery{
        top: 30px;
        border-radius: 8px;
        right:-100px;
        text-align: center;
        position: absolute;
      }
    .CallRiderFoot{
      width:500px;

      display: flex;
      margin: 50px auto;
      justify-content: space-between;

  &>div{
    .addOrder{
      display: block;
      width: 133px;
      height: 40px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0);
      color: rgba(0, 219, 255, 1);
      font-size: 14px;
      text-align: center;
      border: 1px solid rgba(0, 219, 255, 1);
      margin: auto 0;
    }
   &:nth-of-type(1){

     font-size: 16px;
     width: 300px;
     display: flex;

     img{
       width:50px;
       height: 50px;
       margin-right: 15px;
     }
     div{
       color: #101010;
          p{
            &:nth-of-type(2){
              font-size: 14px;
            }
            text-align: left;
            height: 30px;
          }
     }
   }
  }    }

    }
    font-size: 16px;
    .CallRiderHead{
      margin-bottom: 60px;
      &>div{
        display: flex;
        justify-content: center;
        vertical-align: center;
        img{
          width: 30px;
          height: 31px;
          margin-right: 15px;
        }
        span{
          display: block;
          line-height: 30px;
          font-size: 16px;
          color: #101010;
        }
      }
      &>p{
        line-height: 112px;
        font-size: 18px;
        font-weight: 700;
        color: #101010;
        span{
          color: #00DBFF;
        }
      }
    }
    .el-dialog{
      border-radius: 12px;
    }
    .el-dialog__headerbtn{
      top: 10px;
    }
    .el-dialog__body{
      padding:0 ;
    }
    .el-dialog__close{
      width: 20px;
      height: 20px;
      color: #fff;
      line-height: 20px;
      border-radius: 50%;
      background-color: rgba(102, 102, 102, 1);
    }
  }
</style>
