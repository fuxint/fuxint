<template>
    <div class="saler_left">
      <el-row :gutter="20">
        <el-col  :span="21" v-if="SearchListRole==false">
          <div class="grid-content bg-purple">
            <el-tabs v-model="activeName" >
              <el-tab-pane label="全部" name="first">
                <el-row :gutter="24">
                  <el-col :span="4"><div class="grid-content bg-purple"><input type="checkbox"></div></el-col>
                  <el-col :span="10"><div class="grid-content bg-purple"><svg-icon icon-class="people" />2222222222</div></el-col>
                  <el-col :span="10"><div class="grid-content bg-purple">工号： 1111111</div></el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="店长" name="second">
              </el-tab-pane>
              <el-tab-pane label="店长助理" name="third">
              </el-tab-pane>
              <el-tab-pane label="店员" name="fourth">
              </el-tab-pane>
            </el-tabs>
        </div>
        </el-col>



        <el-col  :span="21" v-if="SearchListRole==true">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="输入员工工号或者姓名查询"
              prefix-icon="el-icon-search"
            >
            </el-input>
                <el-row :gutter="24">
                  <el-col :span="4"><div class="grid-content bg-purple"><input type="checkbox"></div></el-col>
                  <el-col :span="10"><div class="grid-content bg-purple"><svg-icon icon-class="people" />2222222222</div></el-col>
                  <el-col :span="10"><div class="grid-content bg-purple">工号： 1111111</div></el-col>
                </el-row>
          </div>
        </el-col>
        <el-col :span="3" class="cancel" :style="{'border-left':SearchListRole==false?'2px solid #bbb':''}">
          <i class="el-icon-search search"  v-if="SearchListRole==false" @click="SearchListRole=true" style="font-size: 20px;"></i>
            <span  v-else @click="SearchListRole=false">取消</span>
        </el-col>
      </el-row>

    </div>
</template>

<script>
    export default {
      name: "salerLeft",
      data(){
          return{
            activeName:1,
            SearchListRole:false
          }
      },
      methods:{

      }
    }
</script>

<style scoped lang="scss">

  .saler_left{
    padding-top: 30px;
    padding-left: 30px;
    height: 630px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  }
  .cancel{

    margin-top: 10px;
    .search{
      display: block;
      text-align: center;
    }
    span{
      font-size: 18px;
      display: block;
    }
  }
  .grid-content::v-deep{
    font-size: 16px;
    .el-tabs__nav-wrap{
      &::after{
        height: 0!important;
      }
    }
    svg{
      font-size: 20px;
      margin-right: 5px;
    }
    img{
      border: 1px solid #ccc;
      width: 25px;
      height: 25px;
    }
    .el-input{
      margin-bottom: 30px;
    }
  line-height:28px;
  .el-tabs__header::v-deep{
    border: none;
  }
  }
  input{
  left: 488px;
  top: 341px;
  width: 25px;
  height: 25px;
  background-color: rgba(170, 166, 166, 1);
}
</style>
