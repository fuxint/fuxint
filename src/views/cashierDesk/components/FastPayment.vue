<template>
  <div class="fastPayment">
    <el-dialog title="快速收款" align="center" style="left: -15%;border-radius: 12px" width="490px" :visible.sync="fastPayment">
      <el-input v-model="payPrice" placeholder="￥请输入收款金额" @focus="priceType=-1" />
      <el-input v-model="chequyPay" placeholder="扫描付款码或者手输付款码按回车键收款" @focus="priceType=-2" />

      <div class="keyUp">
        <div class="keyUpNumLeft">
          <ul>
            <li v-for="item of numList" class="cursor" @click="AddNumber(item)">
              {{ item.num }}
            </li>
            <li @click="DelNumber()">
              <i class="el-icon-close" />
            </li>
          </ul>
        </div>
        <div class="keyUpNumRight">
          <ul>
            <li class="cursor" @click="ResetAll"> 重输</li>
            <li class="cursor" @click="verifychequyPay">确认</li>
          </ul>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddSalesman',
  data() {
    return {
      priceType: -1,
      fastPayment: '',
      payPrice: '', // 付款金额
      chequyPay: '', // 付款码
      numList: [
        {
          num: '1'
        },
        {
          num: '2'
        },
        {
          num: '3'
        },
        {
          num: '4'
        },
        {
          num: '5'
        },
        {
          num: '6'
        },
        {
          num: '7'
        },
        {
          num: '8'
        },
        {
          num: '9'
        },
        {
          num: '.'
        },
        {
          num: '0'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    // 确认支付
    verifychequyPay() {
      this.$message.error('请输入或扫描付款码信息')
    },
    // 重新输入
    ResetAll() {
      if (this.priceType == -1) {
        this.payPrice = ''
      } else if (this.priceType == -2) {
        this.chequyPay = ''
      }
    },
    // 添加金额
    AddNumber(item) {
      if (this.priceType == -1) {
        if (item.num == '.') {
          if (this.payPrice.indexOf('.') == -1) {
            this.payPrice += item.num
          } else {
            this.$message.error('请输入正确的数字')
          }
        } else {
          this.payPrice += item.num
        }
      } else if (this.priceType == -2) {
        if (item.num == '.') {
          if (this.chequyPay.indexOf('.') == -1) {
            this.chequyPay += item.num
          } else {
            this.$message.error('请输入正确的数字')
          }
        } else {
          this.chequyPay += item.num
        }
      }
    },
    DelNumber() {
      if (this.priceType == -1) {
        this.payPrice = this.payPrice.substring(0, this.payPrice.length - 1)
      } else if (this.priceType == -2) {
        this.chequyPay = this.chequyPay.substring(0, this.payPrice.length - 1)
      }
    }

  }
}
</script>

<style scoped lang="scss">
  .fastPayment::v-deep{
    .el-dialog{
      border-radius: 12px;
    }
    .el-dialog__headerbtn{
      top: 10px;
    }
    .el-dialog__close{
      width: 20px;
      height: 20px;
      color: #fff;
      line-height: 20px;
      border-radius: 50%;
      background-color: rgba(102, 102, 102, 1);
    }
    .keyUp{
      padding: 0 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .keyUpNumRight{
        li{
          &:nth-of-type(2){
            color: #fff;
            border: none;
            background: #010101;
          }
          left: 1243px;
          top: 364px;
          width: 79px;
          height: 110px;
          margin-bottom: 15px;
          line-height: 110px;
          border-radius: 6px;
          color: rgba(102, 102, 102, 1);
          font-size: 16px;
          text-align: center;
          font-family: Roboto;
          border: 1px solid rgba(238, 236, 236, 1);
        }
      }
      .keyUpNumLeft{
        width: 270px;
        ul{
          width: 270px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li{
            margin-bottom: 13px;
            width:70px;
            height: 50px;
            line-height: 50px;
            border-radius: 6px;
            color: rgba(0, 0, 0, 1);
            font-size: 30px;
            text-align: center;
            border: 1px solid rgba(238, 236, 236, 1);
            margin-right: 13px;
          }
        }
      }
    }

      input{
        margin-bottom: 15px;
        width: 400px;
        height: 50px;
        line-height: 50px;
        border-radius: 6px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: left;
        font-family: Roboto;
      }
  }
</style>
