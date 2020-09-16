<template>
<div class="payments">
  <div class="tags_top">
    <div class="tags_left">
      <i class="el-icon-arrow-left block" />
    </div>

    <div class="tags_right fz20">
      支付
    </div>
  </div>

  <div class="paydetail">
    <p class="fz8">消费明细</p>
      <div class="detail_con">
          <ul v-for="(item,index) of paydetailList" :key="index">
            <li class="fz4">
              <input type="checkbox" >
              <span>{{item.name}}</span>
              <span>X{{item.num}}</span>
              <ol v-if="item.des">
                <li>左眼：{{item.des.left}}</li>
                <li>右眼：{{item.des.right}}</li>
              </ol>
            </li>
            <li class="cursor">
              <i  class="el-icon-s-ticket" />
              <i @click="dialogVisible=true" class="el-icon-s-ticket" />

            </li>
            <li>

            <span>  {{item.price}}</span>
              <span>未支付</span>
            </li>
          </ul>
      </div>

      <div class="allChoose">
        <el-row>
          <el-col :span="12"><div>
            <div class="fz4 " >
              <input class="block" type="checkbox" >
              <span class="block">全选</span>
            </div>
            <div class="fz4">
              <i class="el-icon-s-fold block" />
              <span class="block ">合并订单</span>
            </div>

          </div></el-col>
          <el-col :span="12">
            <div>
              <div class="fz4 " >
                <span>应付金额：   ￥4000.00  </span>
                <span>     实付：  ￥0  </span>
              </div>
              <div>
                待付金额：<span>￥8000.00</span>
              </div>
            </div>
          </el-col>
        </el-row>

      </div>
    <div class="payment_edit">
      <i class="el-icon-edit block" />
      <input type="text" class="block" placeholder="备注">
    </div>
  </div>
  <div class="paytype">
    <p class="fz8">支付方式</p>
    <ul>
      <li v-for="(item,index) of payType" :key="index">
        <img :src="item.img" alt="">
        <span class="fz4">{{item.name}}</span>
        <span class="fz2">应收：  4000.00</span>
      </li>
    </ul>
  </div>
<div  class="submit_settle">
  <button class="fz8">结账</button>
</div>


  <el-dialog
    :visible.sync="dialogVisible"
    width="800px"
    :before-close="handleClose">
    <div class="dialog_content">
        <ul>
          <li :class="steps==1?'tagsActive fz8 cursor':'fz8 cursor'"  @click="StepsSwitch(1)">微店券</li>
          <li :class="steps==2?'tagsActive fz8 cursor':'fz8 cursor'"  @click="StepsSwitch(2)">手工券</li>
        </ul>

      <div v-if="steps==1">
        <el-form  label-width="80px" >
          <el-form-item label="券号">
            <el-input placeholder=" 请输入或扫描核销码" >
              <template slot="append" class="cursor">查询</template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%;text-align: center">
          <el-table-column
            prop="date"
            label="券号"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="券类型"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="条件">
          </el-table-column>
          <el-table-column
            prop="address"
            label="有效期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="金额">
          </el-table-column>
        </el-table>
      </div>

      <div v-else>
        <el-form  label-width="80px">
          <el-form-item label="券号">
            <el-input placeholder=" 请输入券码"></el-input>
          </el-form-item>
          <el-form-item label="金额">
            <el-input placeholder="券面额"></el-input>
          </el-form-item>
          <el-form-item label="使用金额">
            <el-input placeholder="使用金额"></el-input>
          </el-form-item>
        </el-form>
      </div>


    </div>

    <span slot="footer" class="dialog-footer">

  </span>
  </el-dialog>



</div>
</template>

<script>
  export default {
    name: "TagsView",
    data() {
      return{
        steps:1,//切换
        dialogVisible: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        payType:[
          {
            img:'/static/pay.png',
            name:"支付宝"
          }, {
            img:'/static/wechart.png',
            name:"微信"
          }
          , {
            img:'/static/money.png',
            name:"现金"
          }
          , {
            img:'/static/card.png',
            name:"银行卡支付"
          }
        ],

        paydetailList:[
          {
            checked:false,
            name:'BOSS 板材框架 23123121111111111111113 （8200） ',
            num:'2',
            price:"￥4000.00",
            status:'0',
            des:{
              left:'SPH_-2.00_ CYL_-0.1_Axis_125',
              right:'SPH_-3.00_CYL_-0.1_Axis_180'
            }
          },
          {
            checked: false,
            name: 'BOSS 板材框架 23123123 （8200） ',
            num: '2',
            price: "￥4000.00",
            status: '0'
          }
        ]
      }
    },
    methods: {
      StepsSwitch(steps){
          this.steps=steps
      }
    }
  }
</script>

<style scoped lang="scss">
  input{
    outline:none!important;
  }
  .dialog_content{

    height: 515px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    ul{
      border-bottom: 1px solid #BBBBBB;

      li{
        line-height: 40px;
        width: 20%;
        display: inline-block;

      }
    }

    .el-form{
      margin: 68px 120px 50px 120px;
    }
  }









  .submit_settle
  {
    position: fixed;
    bottom:10px;
    width: 100%;
    padding: 0 30px;
    button{
      width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px 0px 12px 12px;
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
  }
  }
.paytype{
      margin: 0 30px;
  &>p{
    line-height: 40px;
  }
  ul{
    margin: 0 30px;
    display: flex;
    li{

      background: #fff;
      width: 256px;
      padding: 0 10px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin-right: 20px;
      border-radius: 6px;
      img{
        margin: auto 15px auto 0;
        width: 40px;
        height: 40px;
      }
      span{
        display: block;
        text-align: left;
        line-height: 50px;
        &:nth-of-type(2){
          color: #00DBFF;
        }
        &:nth-of-type(1){
          width: 90px;
        }
      }
    }
  }
}
  .payment_edit{
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    .el-icon-edit:before{
        color: #00DBFF;
      font-size:20px;
      line-height: 35px;
      margin-right: 10px;
    }
    input{
    width: 90%;
      height: 35px;
      font-size: 14px;
      border: none!important;
    }
    background: #fff;

  }
.payments{
  background-color: rgba(247, 247, 247, 1);
  height: 100vh;
  .allChoose{
    line-height: 60px;
    height: 60px;
    .el-row{
      display: flex;
    }
    .el-col-12{
margin-left: 25px;
      &:nth-of-type(1){

        div{
          margin-right: 80px;
          div:nth-of-type(2){
            color: #AAA6A6;
          }
        }

        input{
          float: left;
          width: 25px;
          height: 25px;
          margin:16px 15px 0 0;
        }
        i{
          margin:15px 15px 0 0;
          font-size:32px;
        }
      }

      &:nth-of-type(2){
        &>div{
          display: flex;justify-content: flex-end;
       div{
         &:nth-of-type(1){

           color: #AAA6A6;
           span{
             margin: 0 25px;
           }
         }
         &:nth-of-type(2){
           margin-right: 15px;
           margin-left: 25px;
         span{
           font-weight: 600; color: #EE6060;}
         }
       }

        }
      }
      div{
        display: flex;
        i,span{
          display: block;
        }

      }
    }
  }

  .paydetail{
    margin-bottom: 140px;

    background: #fff;
    padding: 0px 30px 20px 30px;

    &>p{
      line-height: 48px;
    }

    .detail_con{
      padding: 23px;
      /*height:300px;*/
      border-radius: 6px;
      line-height: 40px;

      background-color: rgba(247, 247, 247, 1);
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        &>li{
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;

          &:nth-of-type(1){
            span:nth-of-type(1){
                min-width: 400px;
            }
          }
          ol{
            width: 700px;
            margin-left: 120px;
          }
          width: 40%;
          &:nth-of-type(2){
            width:20%;
            display: flex;justify-content: space-around;
            i{

              font-size: 30px;
            }
            /*width: ;*/
          }
          &:nth-of-type(3){
            margin-left: 10%;
            width:20%;
           text-align: center;
            display: flex;justify-content: space-between;
          }
          span{

            float: left;
            display: block;
            &:nth-of-type(2){
              font-weight: 600;
              color: #EE6060 ;
            }
          }
          input{
            float: left;
            width: 25px;
            height: 25px;
            margin:5px 15px 0 0;
          }
        }
      }
    }

  }


  .tags_top{
    background: #fff;
    position: relative;
    padding: 20px ;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 80px;
    .tags_right{
      text-align: center;
      line-height:40px;
    }

    .tags_left{
      border-radius:8px;
      float: left;
      width: 34px;
      height: 34px;
      background-color: rgba(16, 16, 16, 0.05);
      i{
        font-weight: 700;
        padding-top: 8px;
        text-align: center;
      }
    }
  }
}


</style>
