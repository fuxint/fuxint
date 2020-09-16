<template>
  <el-card class="deliveyFee">
    <div slot="header">   <i class="el-icon-close" @click="HideDeiliveryFee" /></div>
    <div class="deliveryFeeTerrace">
      <p>添加配送感谢费</p>
      <span class="block">感谢费全部归跑腿骑手，添加后骑手接单更积极</span>
      <ul>
        <li v-for="(item, index) of priceList" :key="index" class="cursor" :style="{ border: item.id == addPriceSetId ? '1px solid #00DBFF' : '' }" @click="ChoosePrice(item,true)">
          <span>{{ item.price }}元</span>
        </li>
        <li class="cursor" :style="{ border: otherId.id == addPriceSetId ? '1px solid #00DBFF' : '' }" @click="ChoosePrice(otherId,false)">
          <span>{{ otherId.price }}</span>
        </li>
      </ul>
      <button class="block" @click="AffrimAddFeeDeliveryFee">确定</button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'AddFeeDelivery',
  data() {
    return {
      DeliveryAddFee: true,
      addPriceSetId: 1111,
      priceList: [
        {
          price: 2,
          id: ''
        },
        {
          price: 3,
          id: '2222'
        },
        {
          price: 5,
          id: '3333'
        }
      ],
      otherId: {
        id: '0000',
        price: '其他'
      },
      priceSet: 0
    }
  },
  methods: {
    // 确认添加金额
    AffrimAddFeeDeliveryFee() {
      this.$store.dispatch('TerraceOrder/AddTerraceFeeShow', false)
      this.$store.dispatch('TerraceOrder/AddTerraceFee', this.priceSet)
    },
    HideDeiliveryFee() {
      this.$store.dispatch('TerraceOrder/AddTerraceFeeShow', false)
    },
    // 选择价格
    ChoosePrice(item) {
      this.addPriceSetId = item.id
      if (item.id == '0000') {
      } else {
        this.priceSet = item.price
      }
    }
  }
}
</script>

<style scoped lang="scss">
.deliveyFee::v-deep{
  border-radius: 12px;
  .deliveryFeeTerrace{
    button{
      display: block;
      width: 145px;
      height: 45px;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      text-align: center;
      margin: 60px auto 26px auto;
    }
    ul {
      margin-bottom: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        margin-right: 15px;
        height: 95px;
        border-radius: 3px;
        color: #9e9e9e;
        font-size: 15px;
        width: 85px;
        text-align: center;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
        font-family: Arial;
        span {
          display: block;
          text-align: center;
          width: 100%;
          line-height:95px;
        }
      }
    }
    text-align: left;
      p{
        font-size: 18px;
      }
    span{
      font-size: 16px;
      line-height: 60px;
    }
  }
  width: 442px;
  height: 364px;
  .el-card__header{
    border: none;
    position: relative;
    .el-icon-close{
      top:5px;
      color: #666666;
      position: absolute;
      right: 5px;
      font-size: 24px;

    }
  }
}
</style>
