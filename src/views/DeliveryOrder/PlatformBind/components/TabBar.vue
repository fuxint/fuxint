<template>
  <el-row class="tabbarPlatform">
    <el-menu
      router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item v-for="(item,index) of channelListDelivery" :key="index" :index="item.link">
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      channelListDelivery: [
        {
          title: '美团外卖',
          link: '/PlatformBind/MeituanTakeAway'
        },
        {
          title: '饿了么',
          link: ''
        },
        {
          title: '饿百零售',
          link: ''
        },
        {
          title: '京东到家',
          link: ''
        },
        {
          title: '有赞',
          link: ''
        },
        {
          title: '微盟',
          link: ''
        },
        {
          title: '淘宝',
          link: ''
        },
        {
          title: '自营完整',
          link: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tabbarPlatform{
  ul{
    min-height: 80vh;
    li{

      padding-left: 30px!important;
    }
  }
}
</style>
