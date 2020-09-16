<template>
<div>
<el-row class="tac">
  <el-col :span="24">
    <!--     -->

    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      router="true"
      @close="handleClose">
      <el-menu-item  index="/BillingOrder/Overbooking/AddFramework/GlassesFar" :key="index">
        <img src="../../../../../static/image/menu1.png" alt="">
        <span slot="title">远用</span>
      </el-menu-item>

      <el-menu-item index="/BillingOrder/Overbooking/AddFramework/GlassesNear" :key="index">
        <img src="../../../../../static/image/menu2.png" alt="">
        <span slot="title">近用</span>
      </el-menu-item>

      <el-menu-item index="/BillingOrder/Overbooking/AddFramework/multipleFocus" :key="index">
        <img src="../../../../../static/image/menu3.png" alt="">
        <span slot="title">多焦点</span>
      </el-menu-item>


      <el-menu-item index="/BillingOrder/Overbooking/AddFramework/contactLenses"  :key="index">
        <img src="../../../../../static/image/menu4.png" alt="">
        <span slot="title">隐形</span>
      </el-menu-item>


      <el-menu-item index="/BillingOrder/Overbooking/AddFramework/RigidGasPermeable"  :key="index">
        <img src="../../../../../static/image/menu5.png" alt="">
        <span slot="title">RGP</span>
<!--        硬性角膜接触镜-->
      </el-menu-item>


      <el-menu-item  index="/BillingOrder/Overbooking/AddFramework/CornealShape"  :key="index">
        <img src="../../../../../static/image/menu6.png" alt="">
        <span slot="title">角膜塑形</span>
      </el-menu-item>



      <el-menu-item  index="/BillingOrder/Overbooking/AddFramework/zeroDiopter"  :key="index">
        <img src="../../../../../static/image/menu7.png" alt="">
        <span slot="title">平光</span>
      </el-menu-item>


    </el-menu>

  </el-col>
</el-row>
</div>

</template>

<script>
  export default {
    data(){
      return{
        activeTabs:0,
      }
    },
    methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      },
      //导航栏切换跳转
      ChooseRouterShow(e){
      this.activeTabs=e.index
      console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tac{
    .is-active{
      background: #D9D9D8;
    }
    ul{
      width: 170px;

    }
    li{
        width: 170px;
        height:95px;
        line-height: 100px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0);
        text-align: center;
        border: 1px solid #eee;
      display: flex;
      img{
        width: 70px;
        height:50px;
        display: block;
        margin: auto 0;
        font-size: 50px;
      }
      span{
        font-weight: 600;
        color: #000;
        min-width:70px;
        line-height: 95px;
      }
      }
  }

</style>
