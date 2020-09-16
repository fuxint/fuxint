<template>
  <div class="VerificationAudit_box">
<!--    <div v-if="searchMemList==false">-->
<!--      <SearchMember></SearchMember>-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <SearchMemList></SearchMemList>-->
<!--    </div>-->
  </div>
</template>

<script>
  import SearchMemList from "@/views/cashierDesk/components/SearchMember/SearchMemList";
  import SearchMember from "@/views/cashierDesk/components/SearchMember/SearchMember";
  export default {
    data(){
      return{
        searchMemList:false
      }
    },
    components:{SearchMember,SearchMemList}
  }
</script>

<style scoped lang="scss">

</style>
