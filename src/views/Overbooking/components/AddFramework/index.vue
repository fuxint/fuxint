<template>
  <div class="VerificationAudit">
    <el-dialog width="1580px" style="top:-13vh" :visible.sync="framev">
      <p slot="title" class="title">BOSS 框架3123-板材</p>

      <el-container>
        <el-header style="height: 52px">
          <frameworkHead />
        </el-header>
        <el-container>
          <el-aside width="200px">
            <frameMenuNav />
          </el-aside>
          <el-main>
            <router-view />

            <el-row type="flex" class="footer_far " justify="end">
              <el-col :span="3"><button>跳过只买框架</button></el-col>
              <el-col :span="3"><button>确认并保存</button></el-col>
              <el-col :span="3"><button>提交</button></el-col>

            </el-row>
          </el-main>
        </el-container>
      </el-container>
    </el-dialog>
  </div>
</template>

<script>
import frameMenuNav from '@/views/Overbooking/components/AddFramework/common/frameMenuNav'
import frameworkHead from '@/views/Overbooking/components/AddFramework/common/frameworkHead'
export default {
  name: 'Overbooking',
  components: { frameworkHead, frameMenuNav },
  data() {
    return {
      framev: true // 添加備註
    }
  },

  mounted() {
  }
}
</script>

<style scoped lang="scss">
  .VerificationAudit::v-deep{
.el-main{
  padding:10px;
}
    .footer_far{
    .el-col{
      &:nth-of-type(2),&:nth-of-type(3){
        button{
          background-color:#000;
          color: #fff;
        }
      }
      margin-top: 20px;
      button{
        background-color: rgba(215, 211, 211, 1);

        width: 138px;
        height:40px;
        line-height: 40px;
        border-radius: 6px;
        color: rgba(0, 0, 0, 1);
        font-size: 16px;
        text-align: center;
        font-family: Roboto;
      }
    }
    }

    .el-aside{
      background: #fff;
    }
    .el-dialog{
      height:890px;
    }

    width: 66.66%;
    margin: 0 auto;
    font-size: 14px;
   .title{

     border-bottom: 1px solid rgba(238, 236, 236, 1);
   }
  }
</style>
