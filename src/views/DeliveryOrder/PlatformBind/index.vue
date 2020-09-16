<template>
  <div class="platformBind">
    <div class="tags_top">
      <div class="tags_left">
        <i class="el-icon-arrow-left block" />
      </div>
    </div>

    <el-container>
      <el-header>
        <div>111111111</div>
      </el-header>
      <el-container>
        <el-aside width="200px"><TabBar /></el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import TabBar from '@/views/DeliveryOrder/PlatformBind/components/TabBar'
export default {
  name: 'TagsView',
  components: {
    TabBar
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .platformBind{
    .el-header{
      line-height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    .el-aside{
      margin-left: 15px;
      padding: 0;
      background: #fff;
    }
    .tags_top{
      background: #fff;
      position: relative;
      padding: 20px ;
      height: 80px;

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
