<template>
  <div class="dataBaseList">
    <el-row :gutter="24">
      <el-col :span="6" v-for="item of 30">
        <div class="grid-content bg-purple list">
          <div>
            A系列1.5A系列非球面莲花膜
          </div>
          <div>
            <p>现片：3000</p>
            <span class="block bound">已绑定</span>
<!--            <span class="block unbound">已绑定</span>-->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "dataBaseList"
  }
</script>

<style scoped lang="scss">
  .dataBaseList{
    height: 540px;
    overflow-y: scroll;
    font-size: 14px;
    overflow: hidden;
    overflow-y: scroll;
    .list{

      padding: 0 20px 0 20px;
      margin-top: 27px;
      left: 402px;
      top: 333px;
      width: 290px;
      height: 80px;
      line-height: 20px;
      border-radius: 3px;
      text-align: left;
      border: 1px solid rgba(227, 227, 227, 1);
    div{
      &:nth-of-type(1){
        line-height: 45px;
      }
      &:nth-of-type(2){
        .bound{
          color: #00DBFF ;
        }
        .unbound{
          color: #FB3A5F ;
        }
        display: flex;
        justify-content: space-between;
      }
      span{
        line-height: 40px;
      }

      p{
        color: #00DBFF;
        line-height: 40px;
      }
    }

    }
  }

</style>
