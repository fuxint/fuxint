<template>
  <div>
    <ul>
      <li>
        <img src="../../../static/image/yunyin.png" alt="">
      </li>
      <li @click="AddChannel">
        <i class="el-icon-plus" />
      </li>
    </ul>

    <div v-if="AddChannel==true" class="AddChannel">
      <el-dialog
        title="添加渠道"
        :visible.sync="AddChannel"
        width="700px"
        :before-close="handleClose"
      >
        <div class="AddChannelCon">
          <div class="AddChannelConTerrce">
            <img src="../../../static/image/menu1.png" alt="">
            <p>——————————————————</p>
            <img src="../../../static/image/menu1.png" alt="">
          </div>
          <p>授权给镜鱼后，将自动同步订单到镜鱼系统中</p>
          <button>开始授权</button>
        </div>

      </el-dialog>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MeituanTakeAway',
  data() {
    return {
      AddChannel: true
    }
  }
}
</script>

<style scoped lang="scss">
  .AddChannel::v-deep{
    .el-dialog,el-dialog__header{
      border-radius: 6px;
    }
    .AddChannelCon{
      padding-bottom: 70px;
      &>p{
        line-height: 120px;
        text-align: center;
      }
      &>button{
        display: block;
        margin: 0 auto;
        width: 200px;
        height: 50px;
        line-height: 20px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(187, 187, 187, 1);
      }
      width: 500px;
      margin: 0 auto;
      .AddChannelConTerrce{
        display: flex;
        justify-content: space-between;
        img{
          width: 90px;
          height: 73px;
        }
        p{
          color: #BBBBBB;
          line-height:  73px;
        }
      }
    }
      .el-dialog__header{
        padding-bottom: 20px;
        background: #F7F7F7;
      }
  }
  ul{
    display: flex;
    flex-wrap: wrap;

    li{
      margin-left: 35px;
      img{
        width: 100%;
        height: 100%;
      }
      width: 320px;
      height: 190px;
      border-radius: 6px;
      text-align: center;
      line-height: 223px;
      background: #F7F7F7;
      i{
        color: #939292;
        font-size: 50px;
        font-weight:800;
      }
    }
  }
</style>
