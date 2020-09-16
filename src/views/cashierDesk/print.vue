<template>
  <div class="print">
    <div id="printMe">
          <div class="print_top">
            <img src="http://file.jinglinshe.com/right.png" alt="">
            <span class="fz8">结账成功！</span>
          </div>

      <div class="des fz6">
        <span>  开单时间： 2020-06-24   12:00  </span>
        <span> 订单号：31231231231233   </span>
        <span> 加工号：23123123</span>
      </div>


      <div class="detail detail1">
        <ul class="fz6">
          <li>

                <p>名称</p>
                <p>数量</p>
                <p>金额</p>
          </li>
          <li>
            <p>BOSS 框架眼镜板材2131233123123123</p>
            <p>1</p>
            <p>￥2000.00</p>
          </li>
          <li>
            <p>BOSS 框架眼镜板材2131233123123123</p>
            <p>1</p>
            <p>￥2000.00</p>
          </li>
        </ul>
      </div>
    <div class="detail">
      <ul class="fz6">
        <li>

          <p>支付方式</p>
        </li>
        <li>
          <p>微信支付</p>

          <p class="fw6">￥4000.00</p>
        </li>
      </ul>
    </div>



      <div class="detail detail3">
        <ul class="fz4">
          <li>

            <p>下次消微信钱包费抵扣券</p>
          </li>
        </ul>


        <div>
          <img src="" alt="">
          <span>满200减30</span>
        </div>
      </div>






    </div>

   <div class="print-btn">
     <button class="printWrite" v-print="'#printMe'">打印</button>
     <button class="rateprinte" @click="CheckRate">服务评价</button>
   </div>
  </div>
</template>

<script>
  export default {
    name: "print",
    data() {
      return {

      }
    },
    methods:{
      CheckRate(){
        this.$router.push({name: 'evaluate'})
      }
    }
  }
</script>

<style scoped lang="scss">



  #printMe{
    .fz4{
      font-size: 14px;
    }
    .fz6{
      font-size: 16px;
    }
    .fz8{
      font-size: 18px;}
    .print_top{
      display: flex;
      margin: 0 auto;
      width: 192px;


      img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      span{
        display: block;
        height:45px;
        line-height: 40px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
      }

    }

    padding: 30px;
    width: 100%;
    /*height: 694px;*/
    height:80vh;
    line-height: 20px;
    border-radius: 6px;
    background-color: rgba(247, 247, 247, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    p {
      line-height: 40px;

      &:nth-of-type(1) {
        width: 50%;
        text-align: left;
      }

      &:nth-of-type(2) {
        width: 50%;

        text-align: right;
      }
    }

    .detail3{
      margin-top: 60px;
    }
    .detail1{
      margin-bottom: 20px;
      ul{
        padding-bottom: 20px;
        border-bottom: 1px dashed rgba(187, 187, 187, 1);;

      }
      p{
        line-height: 40px;
        &:nth-of-type(1){
          width: 60%;
          text-align: left;
        }
        &:nth-of-type(2){
          width: 20%;
          text-align: center;
        }
        &:nth-of-type(3){
          width: 20%;
          text-align: center;
        }
      }

    }
    .detail {
      li{
        &:nth-of-type(1){
          color: rgba(170, 166, 166, 1);
        }
      }
      div {
        margin-top: 40px;
        display: flex;

        span {
          display: block;
          line-height: 80px;
        }

        img {
          border: 1px solid #ccc;
          width: 81px;
          height: 81px;
          margin: 0 40px 0 40px;
        }
      }

      ul {
        li {
          display: flex;
          flex-wrap: wrap;


        }
      }
    }
    .des{
      color: rgba(170, 166, 166, 1);
      text-align: center;
      font-family: SourceHanSansSC-regular;
      line-height: 60px;
      border-bottom: 1px dashed rgba(187, 187, 187, 1);
    }


  }








.print{
  margin: 0 auto;
  width: 573px;












  .print-btn{
    display: flex;
    margin-top: 41px;
    justify-content: space-around;
    .printWrite{
      background-color: rgba(0, 219, 255, 1);
    }
    .rateprinte{
      background-color: #FFC400 ;
    }
    .printWrite,.rateprinte{
      display: block;
      left: 611px;
      top: 774px;
      width: 230px;
      height: 45px;
      line-height: 20px;
      border-radius: 6px;
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      text-align: center;
      font-family: Roboto;
    }
  }

}


</style>
