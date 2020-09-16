<template>
  <div class="VerificationAudit_box VerificationAudit_box2">
    <el-dialog style="top: -10vh" width="80%" :visible.sync="SearchMember">-->

      <dataType />-->

    </el-dialog>-->
  </div>
</template>

<script>
import dataType from '@/views/AddProduct/components/Database/dataType'
export default {
  name: 'Datebase',
  components: { dataType },
  data() {
    return {
      SearchMember: true
    }
  }
}
</script>

<style scoped lang="scss">
  .VerificationAudit_box2::v-deep{
  &>.el-dialog__header{
    display: none;
  }
  }

  .VerificationAudit_box::v-deep{
    cursor: pointer;
    background: #fff;

    .el-dialog__body{
      padding: 0;
    }
    .el-icon-close{
      color: #fff!important;
    }
  }
</style>
