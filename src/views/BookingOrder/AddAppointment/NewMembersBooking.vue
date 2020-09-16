<template>
  <el-dialog
    title="添加会员"
    class="dialogaddNewMember"
    align="center"
    :visible.sync="NewMembersBooking"
    width="580px"
    :before-close="handleClose"
  >
    <div>
      <div class="userInfo ">
        <el-form ref="form" :style="{padding:identityType==0?'30px 0 30px 30px':'30px',width:identityType==0?'':'100%'}" label-width="80px">
          <el-form-item label="顾客信息">
            <el-input placeholder="请输入顾客姓名" />
          </el-form-item>
          <el-form-item label="顾客电话">
            <el-input placeholder="请输入顾客电话" />
          </el-form-item>
        </el-form>
      </div>

      <div class="userInfo ">
        <el-form ref="form" :style="{padding:identityType==0?'30px 0 30px 30px':'30px',width:identityType==0?'':'100%'}" label-width="80px">
          <el-form-item label="顾客信息">
            <el-input placeholder="请输入会员卡号" />
          </el-form-item>

          <el-form-item class="choose_sex" label="顾客性别">
            <el-checkbox v-model="checked" fill="#00DBFF">男</el-checkbox>
            <el-checkbox v-model="checked">女</el-checkbox>
          </el-form-item>
          <el-form-item label="进度渠道">
            <el-input suffix-icon="el-icon-arrow-right" />
          </el-form-item>
          <el-form-item label="预约备注">
            <el-input type="textarea" placeholder="请填写备注" />
          </el-form-item>
        </el-form>
      </div>

      <button class="affrim">完成</button>
    </div>

  </el-dialog>

</template>

<script>
export default {
  name: 'NewMembersBooking',
  data() {
    return {
      NewMembersBooking: false
    }
  }
}
</script>

<style scoped lang="scss">
.dialogaddNewMember::v-deep{
  border-radius: 12px;
  .affrim{

    margin-top: 30px;
    display: block;
    width: 222px;
    height: 45px;
    border-radius: 3px;
    color: #fff;
    background-color: rgba(0, 0, 0, 1);
    font-size: 16px;
  }
    .el-checkbox__input.is-checked + .el-checkbox__label,.el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-checked .el-checkbox__inner{
    color: #00DBFF!important;

  }
  .el-checkbox__input is-checked{
    border: none;
  }

  .choose_sex{

    .el-form-item__content{
      display: flex;
      justify-content: flex-start;
    }
    label{
      width:20%;
    }
  }
  .el-checkbox__input.is-checked .el-checkbox__inner{
    background:#00DBFF!important;
    border-color:#00DBFF;
    border-radius: 50%;
  }
  .el-checkbox__inner{
    border-radius: 50%;
    border-color: #939292;
  //  background:#00DBFF!important;
  }
  .userInfo{

    background: #F7F7F7;
    margin-bottom: 10px;
    .el-input,.el-input__inner,.el-textarea__inner{
      border: none!important;
    }
      .el-form-item{
        &:nth-last-of-type(1){
        margin-bottom: 0;
        }
    }
  }
  .el-dialog__close{
    display: none;
  }
}
</style>
