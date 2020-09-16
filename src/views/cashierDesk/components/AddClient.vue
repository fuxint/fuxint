<template>
  <div class="VerificationAudit_box">
    <el-dialog title="新建顾客资料" style="left: -15%" width="490px" :visible.sync="$store.state.client.ClientStatus">
      <el-form ref="form" label-width="80px">
        <el-form-item>
          <span slot="label"><span>*</span>姓名</span>
          <el-input v-model="newUser" />
        </el-form-item>
        <el-form-item>
          <span slot="label"><span>*</span>电话</span>
          <el-input v-model="newPhone" />
        </el-form-item>
        <el-form-item>
          <span slot="label">微信号</span>
          <el-input v-model="newWxNumber" />
        </el-form-item>
      </el-form>

      <div class="footerHandle">
        <p class="pointer" @click="AddClientAdvanced">高级别添加</p>
        <p class="pointer" @click="AddClient">保存并开始开单</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddSalesman',
  data() {
    return {
      newWxNumber: '',
      newPhone: '',
      newUser: ''
    }
  },
  mounted() {
  },
  methods: {
    AddClient() {
      const clientObj = { name: this.newUser, phoneNum: this.newPhone, wxNumer: this.newWxNumber }
      this.$store.dispatch('client/AddClientPeople', clientObj)
      console.log(this.$store)
      console.log(clientObj)
      this.$store.dispatch('client/ChangeClient', false)
    },
    AddClientAdvanced() {

    }

  }
}
</script>

<style scoped lang="scss">
  .VerificationAudit_box::v-deep{
    .footerHandle{
      margin-top: 40px;
      padding-left: 70px;
      display: flex;
      justify-content: space-around;
      p{
        width: 145px;
        height: 35px;
        line-height:35px;
        border-radius: 3px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        /*font-family: Roboto;*/
        border: 1px solid rgba(238, 238, 238, 1);
        &:nth-of-type(2){
          color: #fff;
          background: #000!important;
        }
      }
    }
    label{
      /*color: #101010;*/
      span{
       span{
         color: #EE6060;
       }
      }
    }
    .el-icon{
      color: #fff;
    }
    .el-form{
      margin-top: 20px;
    }
    .el-icon-close{
      color: #fff!important;
    }
    .el-dialog{
      border-radius: 10px;
      .el-dialog__body{
        height: 280px;
        padding:0 30px !important;
      }
    }
}
</style>
