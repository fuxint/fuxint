<template>
  <div class="VerificationAudit_box">
    <el-dialog width="490px" :visible.sync="remarkInfo">
      <span slot="title" class="title block">备注</span>
      <div class="chooseType">
        <ul>
          <li>
            <el-checkbox v-model="checked">备选项</el-checkbox>
          </li>
          <li>
            <el-checkbox v-model="checked">老客</el-checkbox>
          </li>
          <li>
            <el-checkbox v-model="checked">网络顾客</el-checkbox>
          </li>
        </ul>
      </div>

      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <el-dropdown trigger="click">
              <span class="el-dropdown-click">
                客户来源：黄金糕<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>默认</el-dropdown-item>
                <el-dropdown-item>朋友介绍</el-dropdown-item>
                <el-dropdown-item>广告传单</el-dropdown-item>
                <el-dropdown-item disabled>网络导流</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple"><el-checkbox v-model="checked">网络顾客</el-checkbox></div></el-col>
      </el-row>

      <el-input
        v-model="textarea2"
        class="textarea"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 5}"
        placeholder="填写备注"
      />

      <span class="affrim">确认</span>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddSalesman',
  data() {
    return {
      remarkInfo: false, // 添加備註
      checked: '',
      textarea2: ''
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.grid-content::v-deep{
  .el-dropdown{
    width: 100%;
    margin-bottom: 30px;
    ul{
      left: 600px!important;
    }
  }
}

  .VerificationAudit_box::v-deep{
    .el-dropdown-menu{
      left: 700px;
    }
    .el-textarea{
      border-radius: 10px;
      textarea{
        border: none;
        background: rgba(247, 247, 247, 1);
      }
    }
    .affrim{
      text-align: center;
      color: white;
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 1);
      font-size: 16px;
      margin-top: 30px;
    }
    .el-icon-close{
      color: #fff;
    }
  .chooseType{
    ul{
      margin-bottom: 20px;
      display: flex;
      li{
        width: 18%
      }
    }
  }
  }
</style>
