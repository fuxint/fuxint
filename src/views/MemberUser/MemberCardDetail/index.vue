<template>
  <div class="MemberCardDetail">
    <el-row :gutter="20">
      <el-col :span="4">
        <MemberCardUserInfo />
      </el-col>
      <el-col :span="20">

        <router-view></router-view>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import MemberCardUserInfo from './components/MemberCardUserInfo'
export default {
  name: 'Index',
  components: { MemberCardUserInfo }
}
</script>

<style scoped lang="scss">
.MemberCardDetail{
  overflow-x: hidden;
  background: #F7F7F7;
  .el-row{
    display: flex;
    .el-col-4{
      min-width: 278px;
      margin-right: 20px;
    }
  }

}
</style>
