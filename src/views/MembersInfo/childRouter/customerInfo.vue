<template>
  <div>
    <el-form ref="form" :model="userInfo" label-width="80px">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-form-item label="卡号"><el-input v-model="userInfo.cardId" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="归属门铺"><el-input v-model="userInfo.shopName" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="会员编号"><el-input v-model="userInfo.membersId" /></el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-form-item required label="姓名"><el-input v-model="userInfo.userName" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="性别"> <el-radio-group v-model="userInfo.sex">
            <el-radio-button label="男" />
            <el-radio-button label="女" />
          </el-radio-group></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="生日"><el-input v-model="userInfo.birthday" /></el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-form-item required label="等级"><el-input v-model="userInfo.grade" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="年龄段"><el-input v-model="userInfo.ageBracket" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="佩戴属性"><el-input v-model="userInfo.attribute" /></el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-form-item required label="手机"><el-input v-model="userInfo.cellphone" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="电话"><el-input v-model="userInfo.mobile" /></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="微信"><el-input v-model="userInfo.WeChat" /></el-form-item>
        </el-col>
      </el-row>

      <el-row class="row-bg">
        <el-form-item label="地址"><el-input v-model="userInfo.address" /></el-form-item>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-form-item label="来源">
            <el-select v-model="userInfo.source" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="负责员工">
            <el-select v-model="userInfo.staff" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="会员状态">
            <el-radio-group v-model="userInfo.memberStatus">
              <el-radio :label="1">有效</el-radio>
              <el-radio :label="2">无效</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row-bg">
        <el-form-item label="备注"><el-input v-model="userInfo.remark" /></el-form-item>
      </el-row>
    </el-form>
    <span class="affrim">确认</span>

  </div>
</template>

<script>
export default {
  name: 'CustomerInfo',
  data() {
    return {
      userInfo: {
        cardId: '', // 卡号
        shopName: '', // 归属门铺
        membersId: '', // 会员编号
        userName: '', // 姓名*
        birthday: '', // 生日
        grade: '', // 等级
        sex: '', // 性别
        ageBracket: '', // 年龄段
        attribute: '', // 佩戴属性
        cellphone: '', // 手机
        mobile: '', // 电话
        WeChat: '', // 微信
        address: '', // 地址
        source: '', // 来源
        staff: '', // 负责员工
        memberStatus: 1, // 会员状态
        remark: '' // 备注
      }
    }
  }
}
</script>

<style scoped lang="scss">
.row-bg{
  padding: 0 35px;
}
</style>
