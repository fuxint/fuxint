<template>
  <div class="orderList">
    <el-row>
      <el-col v-for="(item,index) of orderList" :key="index">
        <el-card shadow="always" body-style="padding:10px">
          <ul>
            <li>{{ item.id }}</li>
            <li style="text-align: center"><i class="el-icon-user-solid" />{{ item.identity }}</li>
            <li><i class="el-icon-time" />{{ item.time }}12:30</li>
          </ul>
          <p><svg-icon class="block" color="#666666 " icon-class="eye-open" @click="OrderDetailList" /></p>
          <el-table
            border
            :data="item.tableData"
          >
            <el-table-column
              label="名称"
            >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                <i class="el-icon-edit" />
              </template>
            </el-table-column>
            <el-table-column
              label="金额"
            >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
          </el-table>

          <ul>
            <li>合计</li>
            <li>
              <b>￥{{ item.priceAll }}</b>
            </li>
          </ul>

          <el-input
            v-model="item.remark"
            prefix-icon="el-icon-edit"
            placeholder="备注"
            clearable
          />
          <div class="cardFoot">
            <div>
              <p :class="1==1?'meituanOrder':'elemeOrder'" />
              <span v-if="item.id==1">美团订单自配送</span>
              <span v-else>饿了么自配送</span>
            </div>

            <div>
              <button v-if="item.id==1" class="affrimOrder">确认订单</button>
              <button v-else class="CallRider" @click="CallRider">召唤骑手</button>
            </div>
          </div>
        </el-card>

        <div v-if="0==index" class="orderDetail">
          <OrderDetailList />
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import OrderDetailList from '@/views/DeliveryOrder/components/OrderDetailList'
export default {
  name: 'OrderList',
  components: { OrderDetailList },
  data() {
    return {
      orderList: [
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '游客',
          priceAll: '4000.00',
          remark: '备注',
          type: '0'

        },
        {
          id: 2,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '会员',
          priceAll: '4000.00',
          remark: '加急',
          type: '01'

        },
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '游客',
          priceAll: '4000.00',
          remark: '加急',
          type: '01'

        },
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '游客',
          priceAll: '400.00',
          remark: '备注',
          type: '01'

        }
      ]
    }
  },
  methods: {
    // 召唤骑手
    CallRider() {
      console.log('召唤骑手')
    },
    // 查看订单详情
    OrderDetailList() {

    }
  }
}
</script>

<style scoped lang="scss">
  .orderList{
    padding:40px 20px;
    .el-table{
      border-radius: 6px;
      height: 180px!important;
      font-size: 12px;
      .el-table::before{
        height: 0!important;
      }
    }
    .el-row{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .el-col{
        margin-bottom: 20px;
        width: 260px;
        margin-right: 20px;
        position: relative;
        .orderDetail{
          z-index: 999;
          position: absolute;
          top:50px;
          left: 50%;
        }
      }
      .cardFoot{
        margin-top: 15px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        div{
          font-size: 14px;
          &:nth-of-type(1){
            display: flex;
            span{
              display: block;
            }
            p{
              margin: auto 5px auto 0;
              width: 13px;
              height: 13px;
              border-radius: 50%;
              text-align: center;

              &.meituanOrder{
                background-color: rgba(255, 203, 1, 1);
              }
              &.elemeOrder{
                background-color:#0478FD
              }
            }
          }
          &:nth-of-type(2){
            button{
              width: 109px;
              height: 30px;
              border-radius: 6px;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              color: #fff;
              &.affrimOrder{
                background:#00DBFF
              }
              &.CallRider{
                background:#000000
              }
            }

          }
        }
      }

      .el-input__inner{
        color: #F00!important;
      }
      .el-card::v-deep{
        .el-card__body{
          &>p{
            margin-top: 10px;
            margin-bottom: 10px ;
            display: flex;
            justify-content: center;
            svg{
              display: block;
            }
          }
        }

        border: none;
        height: 380px;
        .el-icon-edit:before{
          color: #666;
        }
        input{
          color: red;
        }
        .has-gutter{
          display: none!important;
        }
        ul{
          padding-left: 5px;
          &:nth-of-type(2){
            font-size: 12px;
            line-height: 24px;
            li{
              &:nth-of-type(2){
                text-align: right;
              }
            }

          }

          margin-top: 5px;
          display: flex;
          justify-content: space-between;
          li{
            .el-icon-user-solid:before{
              color: #666;
            }
            font-size: 14px;
            i{
              margin-right: 3px;
            }
            width: 33%;
            &:nth-of-type(3){
              margin-top: 2px;
              text-align: right;
              font-size: 12px;
              color: #666666;
            }
          }
        }
      }

    }

  }
</style>
