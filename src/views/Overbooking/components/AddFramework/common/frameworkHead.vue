<template>
  <div class="framework_header">
    <div>
      <span class="block">验光单信息</span>
      操作修改人： <div>

        <el-dropdown trigger="click">
          <el-input v-model="membersInfo" type="text" disabled="true" class="el-dropdown-link" prefix-icon="el-icon-lollipop" placeholder="请选择验光师" />
          <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
            <el-dropdown-item>选择验光师</el-dropdown-item>
            <el-dropdown-item v-for="item of 3">
              <div>
                <img src="../../../../../static/wechart.png" alt="">
                <span>江鹰</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div v-if="membersInfo==''">
      <span class="block">清除</span>
      <div class="avatar">
        <div class="avatar_new"><el-avatar size="medium" :src="1" /><span>11111</span><i class="el-icon-circle-close" /></div>
      </div>
      <ul>
        <li><i class="el-icon-trophy-1" />选择会员</li>
        <li><i class="el-icon-notebook-2" />选择验光单 </li>
        <li>2020-06-30</li>
        <li>新建</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FrameworkHead',
  data() {
    return {
      membersInfo: ''
    }
  },
  mounted() {
    //  this.membersInfo=this.$store
  }
}
</script>

<style scoped lang="scss">
  .avatar{
    margin-right: 15px;

    .avatar_new{
      display: flex;
      width: 228px;
      height: 39px;
      line-height: 39px;
      border-radius: 6px;
      background-color: rgba(249, 243, 8, 0.84);
      color: rgba(0, 0, 0, 1);
      font-size: 14px;
      text-align: left;
      position: relative;
      .el-avatar{
        margin: 1px 5px;
      }
      .el-icon-circle-close{
        position: absolute;
        right: 5px;
        top: 10px;
        font-size: 18px;
      }
    }
    .newUser{
      color: #EE6060 ;
      font-weight: 600;
    }
    float: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .el-avatar{
      display: block;
      margin-right: 10px;
    }
  }
  .el-dropdown-menu{

    min-height: 300px;
    width: 200px;
    .el-dropdown-menu__item{
      &:nth-of-type(1){
        text-align: center;
        font-weight: 600;
      }
      div{
        display: flex;
        &>span{
          width: 60px;
          text-align: center;
          line-height: 40px;
        }
        img{
          border-radius: 50%;
          width: 40px;
          height:40px;
        }
      }

    }
  }
.framework_header::v-deep{
  .block{
    line-height: 40px;
    margin-right:10px;
  }
  .el-input__icon{
    left: -1px!important;
    top: 3px!important;
    color: #5AE6FF;
  }

  display: flex;
  &>span{
    margin-right: 30px;
    line-height: 40px;
  }
  &>div:nth-of-type(1){
    line-height:40px;
    &>span{
      font-size: 16px;
      width: 150px;

    }
    /*//width: 350px;*/
    display: flex;
    &>div{
      position: relative;
      &>i{
        font-size: 20px;
        position: absolute;
        left: 5px;
        top: 12px;
        color: #00DBFF;
      }
      display: flex;
    }
    input{
      padding-left: 30px;
      width: 200px;
      height: 40px;
      border-radius: 5px;
      color: rgba(170, 166, 166, 1);
      font-size: 14px;
      text-align: left;
      font-family: Roboto;
      border: 1px solid rgba(238, 238, 238, 1);
    }
  }
  div:nth-of-type(2){
    display: flex;
    &>span{
      margin-left: 22px;
    }
    ul{
      display: flex;

      li{
       &:nth-of-type(1),&:nth-of-type(2){
         padding-left: 20px; background-color: rgba(217, 217, 217, 0.39);

       }
        &:nth-of-type(3){
          color: #101010;
          background-color: rgba(217, 217, 217, 0.39);
        }
        &:nth-of-type(4){
          background-color: #00DBFF;
        }
        position: relative;
        i{
          position: absolute;
          top:10px;
          left:10px;
          font-size: 20px;
        }
        &:nth-of-type(1){
         i{
           color: #F2CB51 ;
         }
        }
        &:nth-of-type(2){
          i{
            color: #D7D3D3  ;
          }
        }
      margin-right: 20px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;

        color:#fff;
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        span{
          text-align: center;
        }
      }
  }
  }
}
</style>
