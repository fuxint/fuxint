<template>
  <div class="dataBaseList">
    <el-row :gutter="24">
      <el-col :span="6" v-for="item of 30">
        <div class="grid-content bg-purple list">
          <img src="../../../../static/image/Def_CardImg.png" alt="">
          <div>
            <p>镜片_蔡司</p>
            <span class="block">已绑定</span>
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
    overflow: hidden;
    overflow-y: scroll;
    font-size: 14px;
    .list{
      margin-top: 27px;
      left: 402px;
      top: 333px;
      width: 290px;
      height: 80px;
      line-height: 20px;
      border-radius: 3px;
      text-align: left;
      border: 1px solid rgba(227, 227, 227, 1);
      display: flex;
      img{
        display: block;
        margin: auto 10px;
        width: 45px;
        height: 45px;
      }
      span{
        color: #00DBFF;
      }
      p{
        line-height: 40px;
      }
    }
  }

</style>
