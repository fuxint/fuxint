<template>
  <div class="content_list">
    <el-row >
      <el-col>
        B
      </el-col>
      <el-col  v-for="(item,index) of cardList" :key="index">
        <el-card shadow="always"  body-style="padding:0px">
          <div class="cardList">
            <div class="card_item">
              <span class="fz5">{{item.price}}</span>
            </div>
            <div class="card_des fz2">{{item.des}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "productList",
    data(){
      return{
        cardList:[
          {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          },
          {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          }, {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          }
          , {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          },
          {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          },
          {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          },
          {
            picture:'',
            price:'￥4000.00',
            des:'BOSS 板材框架2213123'
          }
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .content_list{
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    .el-row{
      display: flex;
      flex-wrap: wrap;
      justify-content:flex-start;
      &>div{
        &:nth-of-type(1){
          width:80px;
          color: #AAA6A6 ;
          text-align: center;
        }
        width:190px;
      }
    }
    .cardList,.el-card{
      margin-bottom: 20px;
      border-radius: 6px;
      height: 100px;
      width: 184px;
      box-shadow: 0px 2px 7px 1px rgba(215, 211, 211, 1);
      .card_des{
        line-height: 30px;
        text-align: center;
        display: block;
      }
      .card_item{
        padding-left: 20px;
        height: 70px;
        background-color: rgba(247, 247, 247, 1);
        display: flex;
        /*img{*/
        /*  margin: 7px;*/
        /*  border: 1px solid #ccc;*/
        /*  display: block;*/
        /*  width: 55px;*/
        /*  height: 55px;*/
        /*  border-radius: 5px;*/
        /*}*/
        span{
          line-height: 70px;
          display: block;
          text-align: center;
        }

      }
    }
  }
</style>
