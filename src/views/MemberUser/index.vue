<template>
  <div class="MemberUser">
    <div class="MemberUser_Head">
      <span> 会员 </span>
      <div>
        <el-input placeholder=" 请输入手机号码或会员卡号" v-model="input3" class="input-with-select">
          <el-select slot="prepend" class="left_SearchMemberCon" placeholder="号码">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button class="left_SearchMemberCon" slot="append" >
            <span>查询</span>
          </el-button>
        </el-input>
      </div>
    </div>
<!--    <SearchMember></SearchMember>-->
    <MemberList></MemberList>
  </div>
</template>

<script>
  import MemberList from "@/views/MemberUser/components/MemberList";
  import SearchMember from "@/views/MemberUser/components/SearchMember";
  export default {
    name: "MemberUser",
    methods:{
      SearchIsMember(){
        console.log('会员查询')
      }
    },
    components:{MemberList,SearchMember}
  }
</script>

<style scoped lang="scss">


  .MemberUser{

    width: 100%;
    min-height: 100vh;
    background: url("../../static/image/searchMem.png");
    padding:10px 35px;
    .MemberUser_Head::v-deep{
      border: none;
      line-height: 80px;
      display: flex;
      justify-content: center;
      position: relative;
      input{
        border: none;
      }
      .el-input--medium{
      //  width:500px;
        .el-input-group__append{
          border: none;

          .el-input--medium{



            background-color:#fff;
            span{
              color: #010101!important;
            }
          }
          .el-input__icon{
            color: #101010;
          }
        }
        .el-input-group__append{


          background-color:#010101;
          span{
            color: #fff!important;
          }
        }
        .el-input-group__prepend{
          border: none;
         // border-right: 1px solid #101010 ;
          //margin-right: 3px;
          background-color:#fff;
          color: #101010;
        }
        .left_SearchMemberCon{
          width: 89px;
          height: 20px;
        }
        input{
          width:300px;
        }
      }
      &>span{
        position: absolute;
        left: 0;
        font-size: 20px;
      }
    }
  }
</style>
