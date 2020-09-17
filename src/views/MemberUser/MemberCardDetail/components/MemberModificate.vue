<template>
    <div class="MemberModificate">
      <div class="MemberModificate_top">会员资料</div>
      <el-form ref="form" :model="form" label-width="80px">

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="卡号">
          <el-input disabled="true" ></el-input>
        </el-form-item></el-col>
        <el-col :span="6">
          <el-form-item label="归属门铺">
            <el-input ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="会员编号">
          <el-input ></el-input>
        </el-form-item></el-col>
      </el-row>


        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="姓名" required="true">
              <el-input  ></el-input>
            </el-form-item></el-col>
          <el-col :span="6">
            <el-form-item label="性别">
              <el-radio-group >
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="生日">
              <el-input ></el-input>
            </el-form-item></el-col>
        </el-row>



        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="等级" >
              <el-input  ></el-input>
            </el-form-item></el-col>
          <el-col :span="6">
            <el-form-item label="年龄段">
              <el-input  ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="佩戴属性">
              <el-input ></el-input>
            </el-form-item></el-col>
        </el-row>







        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="手机" >
              <el-input  ></el-input>
            </el-form-item></el-col>
          <el-col :span="6">
            <el-form-item label="电话">
              <el-input  ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="微信">
              <el-input ></el-input>
            </el-form-item></el-col>
        </el-row>


        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="地址" >
              <el-input  ></el-input>
            </el-form-item></el-col>
        </el-row>






        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="来源" >
              <el-select  placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item></el-col>
          <el-col :span="6">
            <el-form-item label="负责员工">
              <el-select  placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="会员状态">
              <el-radio-group v-model="radio">
                <el-radio :label="3">有效</el-radio>
                <el-radio :label="6">无效</el-radio>
              </el-radio-group>
            </el-form-item></el-col>


        </el-row>



        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="备注" >
              <el-input  ></el-input>
            </el-form-item></el-col>
        </el-row>
      </el-form>

    </div>
</template>

<script>
    export default {
        name: "MemberModificate"
    }
</script>

<style scoped lang="scss">
.MemberModificate{
  .el-form{
    margin-left: 90px;
  }
  width: 100%;
  min-height: 100vh;
  background: #fff;
  .MemberModificate_top{
    margin-bottom: 80px;
    font-size: 20px;
    padding-top: 20px;
    text-align: center;
    line-height: 100px;
    border-bottom: 1px solid #DFDEDE;
  }
}
</style>
