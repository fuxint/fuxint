<template>
  <!--  自配送头部-->
  <div class="tags_top">
    <div class="tags_left">
      <i class="el-icon-arrow-left block" />
    </div>
    <div class="tabber_top" />
    <ul>
      <li v-for="(item,index) of tagsView" :key="index" :class="indexTags==index?'tagsActive cursor':'cursor'" @click="ChooseFilterCla(index)">
        {{ item }}
      </li>
    </ul>

    <div class="tags_right block">

      <div>
        <i class="el-icon-search block" />
      </div>
      <div>
        <button>创建</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TagsView',
  data() {
    return {
      indexTags: 0,
      tagsView: [
        '订单处理',
        '订单查询'
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .tags_right{
    width:200px;
    float: right;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
   button{
     color: #fff;
     width: 70px;
     height:34px;
     border-radius: 8px;
     background-color: rgba(0, 0, 0, 1);
     font-size: 14px;
     text-align: center;
     border: 1px solid rgba(255, 255, 255, 0);
   }
    div{
      border-radius:8px;
      width: 34px;
      height: 34px;
      background-color: rgba(16, 16, 16, 0.05);

    }

  }
  .tags_top{
    position: relative;
    padding: 20px ;
    height: 80px;
    i{
      font-weight: 700;
      padding-top: 8px;
      font-size: 20px;
      text-align: center;
    }
    &>ul{
      float: left;
      width: 40%;
      display: flex;
      justify-content: flex-start;
      li{
        min-width: 200px;
        line-height: 40px;
        text-align: center;
      }
    }

    .tags_left{
      border-radius:8px;
      float: left;
      width: 34px;
      height: 34px;
      background-color: rgba(16, 16, 16, 0.05);
    }
  }

</style>
