<template>
  <div class="MemberDealRecord">
    <div class="MemberDealRecord_top">会员交易记录</div>

  </div>
</template>

<script>
  export default {
    name: "MemberDealRecord",
    data(){
      return{
        imageUrl:'',
        tabPosition: 'left'
      }
    }
  }
</script>

<style scoped lang="scss">
  .MemberDealRecord::v-deep{
    width: 100%;
    min-height: 100vh;
    background: #fff;
    .MemberDealRecord{
      margin-bottom: 80px;
      font-size: 20px;
      padding-top: 20px;
      text-align: center;
      line-height: 100px;
      border-bottom: 1px solid #DFDEDE;
    }
  }
</style>
