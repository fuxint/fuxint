<template>
  <div class="voucher">
    <!--  自配送配送单据-->
    <div class="voucher_header">
      <p>配送单据</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <div>余额： 00.00</div>

      <div>
        <svg-icon icon-class="money" />
        <span>充值</span>
      </div>
    </div>

    <div class="voucher_content">

      <ul>
        <li>
          <p>寄件人</p>
          <ol>
            <li>大光明眼镜店-远东店</li>
            <li>中国，江苏省，苏州市，育新路123号，312</li>
            <li>156464163131</li>
          </ol>
        </li>
        <li>
          <p>寄件人</p>
          <ol>
            <li>大光明眼镜店-远东店</li>
            <li>中国，江苏省，苏州市，育新路123号，312</li>
            <li>156464163131</li>
          </ol>
        </li>
        <li>
          <p>配送距离5公里</p>
          <ol>
            <li>
              <div>
                <img src="../../../static/wechart.png" alt="">
                <span>达达跑腿</span>
              </div>
              <div>
                <span>预估：  9.00 元</span>
              </div>
              <el-checkbox />
            </li>
          </ol>
        </li>

      </ul>

    </div>
    <div class="footer_voucher">

      <el-row>
        <el-col :span="12"><button class="fz4 stay">挂单</button></el-col>
        <el-col :span="12"><button class="fz4 settle">结账   ￥ 4000.00</button></el-col>
      </el-row>
    </div>

    <div class="VerificationAudit_box">
      <el-dialog :before-close="handleClose" width="25%" :visible.sync="VerificationAudit">
        <p slot="title" class="title">网店订单核销</p>
        <div class="VerificationAudit">
          <span class="block">可以对团购，网络订单等进行操作...</span>
          <el-input v-model="orderVerification" placeholder="请输入或扫描核销码" />
          <button class="block" @click="affirmVerification">确认</button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Voucher',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .fz4{
    color: #00DBFF;
  }
  .glassesList{
    min-height: 80px;
    margin-bottom: 30px;
    &>div{
      font-size: 16px;
      width:80%;
      p{
        display: block;
        text-align: left;
        &:nth-of-type(2){
          color: #010101;
        }
      }
    }
  }
  .footer_voucher{

    width: 100%;
    padding:0 20px;
    position: absolute;
    bottom:10px;
    button{
      width: 100%;
      height: 60px;
      color: #fff;
      text-align: center;
      font-family: Roboto;
      border: none;
      &.settle{
        background: #00DBFF;
      }
      &.stay{
        background: #000 ;
      }

    }
  }
  .voucher_content{
    margin: -20px 12px 10px 12px;
    &>ul{
      border-radius: 6px;
      background: #fff;
      padding: 24px;
      &>li{

        margin-bottom: 20px;
        &>p{

          line-height: 40px;
        }
        ol{
            margin-left: 20px;
            li{
              div{
                display: flex;
                img{
                  display: block;
                  margin: 7px 5px 0 0;
                  width:30px;
                  height: 30px;
                }
              }

              display: flex;
              justify-content: space-between;
              font-size: 14px;
              line-height:40px;
              label{
                text-align: right;
              }
              div,label{
                min-width:120px;
              }
            }
          }
      }
    }
  }

  .voucher{
    position: relative;
    height: 100vh;
    padding: 20px 20px 0 0;
    background-color: rgba(247, 247, 247, 1);
    .voucher_header{
      justify-content: space-around;
      &>p{
        margin-right: 30px;
        font-size: 18px;
      }
      div{
        &:nth-of-type(3){
          width: 45px;
        }
        margin-right: 10px;
        span{
          display: block;
          line-height: 20px;
          text-align: center;
        }
        svg{
          margin: 5px auto 0 auto;
          display: block;
          border-radius: 50%;
          padding:4px;
          width: 25px;
          height: 25px;
          line-height:25px;
          background-color: rgba(255, 255, 255, 0);
          text-align: center;
          border: 2px solid rgba(255, 255, 255, 1);
        }
        font-size: 14px;
      }
      line-height:60px;
      color: #fff;
      display: flex;
      border-radius: 6px 6px 0px 0px;
      min-height: 100px;
      background: #000;
      padding-top: 10px;
      padding-left: 15px;
    }

  }
</style>
