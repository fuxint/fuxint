<template>
    <div class="saler_right">
      <div class="saler_title">
        <p>销售比例  </p>
        <span class="block">一个产品销售，可能会多个销售人员分享销售业绩提成</span>
      </div>
      <el-card shadow="hover">
        <i class="el-icon-remove"  />
        <svg-icon icon-class="people" />
        <span class="block">李磊</span>
        <span class="block">231233</span>
    <div class="right_saler">
      <input type="text" value="10">
      <div>
        <i class="el-icon-caret-top"></i>
        <i class="el-icon-caret-bottom"></i>
        </div>
      <span>%</span>
    </div>

      </el-card>
      <el-card shadow="hover">
        <i class="el-icon-remove"  />
        <svg-icon icon-class="people" />
        <span class="block">李磊</span>
        <span class="block">231233</span>
        <div class="right_saler">
          <input type="text" value="10">
          <div>
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <span>%</span>
        </div>
      </el-card>

    </div>
</template>

<script>
    export default {
        name: "salerRight"
    }
</script>

<style scoped lang="scss">
.saler_right::v-deep{
  padding-left: 30px;
  padding-right: 20px;
  height: 630px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  .el-card{
    .el-card__body{
      padding: 10px 10px;
      display: flex;
      &>span{
        line-height:30px;
        &:nth-of-type(1){

          width:60px;
          text-align: center;
        }
        &:nth-of-type(2){
          color: #D7D3D3;
          /*line-height:28px;*/
          width:160px;
          text-align: center;
        }
      }
    }
    .right_saler{
      span{
        line-height: 30px;

      }
      div{
        padding: 0 3px;
        width: 18px;
        height: 29px;
        background-color: rgba(239, 241, 238, 1);
        i{
          display: block;
          margin: auto;
          font-size: 12px;
        }
      }
      display: flex;
      input{
        border: none;
        width:28px;
        font-size: 14px;
        margin-right: 5px;
      }
      span{
        display: block;
        margin: auto 0 0 5px;
      }

    }
    /*.el-input-number{*/

    /*  span{*/
    /*    width:17px;*/
    /*  }*/
    /* input{*/
    /*  margin-right: 10px;*/
    /*   padding: 0;*/
    /*   border: none;*/
    /* }*/
    /*  width: 40px;*/
    /*}*/
    margin-bottom: 10px;
    .el-icon-remove{
      color:#EE6060;
      font-size: 24px;
      margin:0  24px 0 0;
    }
    .svg-icon{
      margin:0  24px 0 0;
        width: 25px;
      height: 25px;
    }
  }
  .saler_title{

    p{
      color: #101010;
      font-size: 16px;
      line-height: 48px;
    }
    span{
      color: #666666 ;
      margin-bottom: 12px;
    }

  }
}
</style>
