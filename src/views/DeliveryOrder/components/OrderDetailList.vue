<template>
  <div>
    <div v-if="OrderDetail==true" class="orderDetailList">
      <i class="el-icon-error" @click="OrderDetail=false" />
      <el-card class="box-card">
        <div class="orderlist">
          <div class="orderHead">
            <img src="" alt="">
            <div>
              <b>立即送达（10 : 11前送达）</b>
              <span class="orderFzSize14">配送中</span>
            </div>
            <img src="" alt="">
          </div>
          <div class="operate">
            <button>已受理</button>
            <button>缺货/取消</button>
          </div>
          <div class="orderUserInfo">
            <div class="orderUserName">
              <div><b>马云先生</b>
                <p>门店新客 </p></div>
              <div>
                <i class="el-icon-phone" />
                <i class="el-icon-location" />
                <svg-icon icon-class="message" />
              </div>
            </div>
            <p>手机尾号9578</p>
            <span class="orderFzSize14">点击查看配送地址>    |  3.5km</span>
          </div>
          <div class="orderTime">
            <b>拣货时长 00:14:42 </b>
            <span class="block orderFzSize14">已完成</span>
          </div>

          <div class="orderInfo">
            <p>配送方式</p>
            <div>
              <div>
                <span>平台骑手：  雷军 </span>
                <p>骑手</p>
              </div>
              <div class="orderInfoLocation">
                <i class="el-icon-phone" />
                <i class="el-icon-location" />
              </div>
            </div>
            <span> 20:32 骑手配送中....</span>
          </div>

          <div class="orderProduct">
            <el-collapse @change="handleChange">
              <el-collapse-item name="1">
                <template slot="title">
                  <div class="orderProduct_title">
                    <div><p>商品 <span class="orderFzSize14">共1件商品 </span></p>
                      <button>详情</button>
                    </div>
                    <span>收起</span></div>
                </template>
                <div>
                  <div class="remarkOrder">
                    <p>备注</p>475度
                  </div>

                  <ul class="orderProductDetail">
                    <li>
                      <div>强生 高清水润隐形眼镜半年 抛2片装</div>
                      <div>x2</div>
                      <div>￥60.00</div>
                    </li>

                    <li>
                      <div class="orderFzSize14">小计</div>
                      <div />
                      <div class="orderFzSize14">￥120.00</div>
                    </li>

                    <li>
                      <div class="orderFzSize14">平台服务费</div>
                      <div />
                      <div class="orderFzSize14">-￥8.00</div>
                    </li>

                    <li>
                      <div>本单预计收入</div>
                      <div />
                      <div class="orderFzSize14">￥112.00</div>
                    </li>
                    <li>
                      <div style="width: 100%;text-align: right" class="orderFzSize14">顾客实际支付 ￥122.00</div>
                    </li>

                  </ul>

                </div>
              </el-collapse-item>
            </el-collapse>
            <div class="orderIdaAndTime">
              <div>
                <p class="orderFzSize14">下单 2020-01-05 20:21</p>
                <p class="orderFzSize14">订单号： 842312312312312</p>
              </div>

              <div class="orderIdaAndTimeCopy">
                <div class="orderFzSize14"><i class="el-icon-s-custom" /><span>客服</span></div>
                <div class="orderFzSize14"><i class="el-icon-s-custom" /><span>打印</span></div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetailList',
  data() {
    return {
      OrderDetail: true
    }
  },
  methods: {
    // 修改
    handleChange() {

    }
  }
}
</script>

<style scoped lang="scss">
  .orderFzSize14{
    font-size: 14px;
    color:#AEAEB2;
  }
  .orderDetailList {
    position: relative;
    font-size: 14px;
    .box-card {
      background: #fff;
      width: 420px;
      min-height: 400px;
      border-radius: 8px;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);

      .orderlist {
        .orderIdaAndTime{
          justify-content: space-between;
          padding-top: 10px;
          display: flex;
          line-height: 30px;
.orderIdaAndTimeCopy{
  padding-top: 15px;
  display: flex;
  width:100px;
  justify-content: space-between;
  div{
    width: 50%;
    i,span{
      display: block;
      text-align: center;

    }
  }
}
        }
        .orderProduct {
          ul {
            li {
              line-height: 30px;
              div {
                &:nth-of-type(1) {
                  width: 50%;
                }
                &:nth-of-type(2) {
                  text-align: center;
                  width: 20%;
                }
                &:nth-of-type(3) {
                  text-align: right ;
                  width: 30%;
                }

              }

              display: flex;
              justify-content: space-between;
            }

          }

          .remarkOrder {
            display: flex;
            color: rgba(255, 58, 48, 1);;
            line-height: 20px;

            p {
              margin: auto 5px auto 0;
              width: 37px;
              height: 18px;
              line-height: 16px;
              background-color: rgba(255, 45, 85, 0.07);
              color: rgba(255, 58, 48, 1);
              font-size: 10px;
              text-align: center;
              font-family: Roboto;
              border: 1px solid rgba(255, 58, 48, 1);
            }
          }

          .orderProduct_title {
            display: flex;
            justify-content: space-between;
            vertical-align: center;
            line-height: 40px;

            & > div {
              width: 300px;
              display: flex;
              vertical-align: center;

              button {

                margin: auto 5px;
                display: block;
                width: 54px;
                height: 19px;
                color: rgba(142, 142, 147, 1);
                font-size: 10px;
                text-align: center;
                background: #fff;
                border: 1px solid rgba(242, 242, 247, 1);
              }

              p {
                display: flex;
                width: 100px;
                font-weight: 600;
                justify-content: space-between;
              }
            }

            span {
              display: block;
            }

          }

        }

        .orderInfo {
          margin-bottom:50px;
          .orderInfoLocation{
            width:60px;
            justify-content: space-between;
          }

          & > span {
            font-size: 14px;
            color: #AEAEB2;
          }

          & > p {
            line-height: 30px;
          }

          & > div {
            line-height: 30px;
            display: flex;
            justify-content: space-between;

            i {
              font-size: 18px;
              color: #8E8E93;
            }

            & > div {
              font-size: 14px;
              display: flex;
              vertical-align: center;

              p {
                margin-top: 6px;
                margin-left: 6px;
                width: 42px;
                height: 17px;
                line-height: 15px;
                border-radius: 6px;
                background-color: rgba(255, 203, 1, 0.1);
                color: rgba(255, 203, 1, 1);
                font-size: 10px;
                text-align: center;
                border: 1px solid rgba(255, 203, 1, 1);
              }

            }
          }
        }

        .orderTime {

          justify-content: space-between;
          display: flex;
          line-height: 50px;

          p {

          }
        }

        .orderUserInfo {

          & > p {
            font-size: 14px;
            margin: 5px 0;
          }

          & > span {
            display: block;
            margin-bottom: 16px;
            font-size: 12px;
            color: #AEAEB2;
          }

          .orderUserName {
            display: flex;
            justify-content: space-between;
        .orderFzSize14{
          line-height: 20px;
        }
            & > div {
              margin: 5px 0;
              width: 50%;
              display: flex;
              vertical-align: center;

              &:nth-of-type(1) {
                b {
                  display: block;
                }

                p {
                  margin: 0 3px;
                  font-size: 14px;
                  text-align: center;
                  font-family: Roboto;
                  color: #8E8E93;
                  border: 1px solid rgba(242, 242, 247, 1);
                }
              }

              &:nth-of-type(2) {
                width: 100px;
                justify-content: space-between;

                i, svg {
                  color: #8E8E93;
                  font-size: 18px;

                }
              }
            }

          }
        }

        .operate {
          display: flex;
          height: 60px;
          justify-content: center;

          button {
            font-size: 14px;
            border-radius: 6px;
            width: 80px;
            height: 27px;
            margin: auto 0;

            &:nth-of-type(1) {
              margin-right: 50px;
              background-color: rgba(255, 203, 1, 1);
              color: #fff;
            }

            &:nth-of-type(2) {
              background-color: rgba(229, 229, 234, 1);
              color: rgba(142, 142, 147, 1);
            }
          }
        }

        .orderHead {
          display: flex;
          justify-content: space-between;
          vertical-align: center;

          span {
            font-size: 14px;
            line-height: 40px;
            color: #AEAEB2;
          }

          img {
            &:nth-of-type(1) {
              width: 43px;
              height: 44px;
            }

            &:nth-of-type(2) {
              width: 55px;
              height: 58px;
            }
          }

          div {
            text-align: center;

            span {
              display: block;
            }
          }
        }
      }
    }

    .el-icon-error {
      position: absolute;
      right: 15px;
      font-size: 24px;
      top: 15px
    }
  }

</style>
