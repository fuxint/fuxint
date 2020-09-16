<template>
  <div class="eyeGlassPRescription">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="frame">框架处方</el-radio-button>
      <el-radio-button label="invisibility">隐形处方</el-radio-button>
      <el-radio-button label="Manual">手动记录</el-radio-button>
    </el-radio-group>

    <div class="eyeGlassPRescriptionHis">
      <p>验光记录</p>
      <ul class="bgColorF4">
        <li>验光时间： 2020-06-15</li>
        <li>验光师：  李白</li>
        <li>来源：</li>
        <li>近用：</li>
        <li><button @click="OptometryAmend">修改</button></li>
      </ul>

      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="title"
          align="center"
          label=""
          width="80"
        />
        <el-table-column
          prop="name"
          label="球镜SPH"
          align="center"
          width="100"
        />
        <el-table-column
          prop="name"
          align="center"
          label="柱镜CYL"
          width="100"
        />
        <el-table-column
          prop="name"
          align="center"
          label="轴位Axis"
          width="100"
        />

        <el-table-column
          prop="name"
          align="center"
          label="ADD"
          width="100"
        />

        <el-table-column
          prop="name"
          align="center"
          label="瞳距PD"
          width="100"
        />
      </el-table>
      <div class="uploadImg">
        <div>验光单图片</div>
        <el-upload
          class="upload"
          drag
          multiple
        >
          <i class="el-icon-picture" />
        </el-upload>
      </div>
      <el-form ref="form" class="market" label-width="40px">
        <el-form-item label="备注">
          <el-input />
        </el-form-item>
      </el-form>

      <div class="pages">
        <el-pagination
          prev-text="上一页"
          next-text="下一页"
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EyeGlassPrescription',
  data() {
    return {
      tabPosition: 'frame',
      tableData: [{
        title: '右眼',
        name: '王小虎'
      }, {
        title: '左眼',
        name: '王小虎'
      }]
    }
  },
  methods: {
    OptometryAmend() {

    }
  }
}
</script>

<style scoped lang="scss">
.eyeGlassPRescription{
  margin: 34px;
  padding-bottom: 34px;
  .pages::v-deep{
    .el-pagination span:not([class*=suffix]), .el-pagination button{
      min-width: 66px;
    }
    margin: 20px;
    .el-pagination{
      display: flex;
      justify-content: flex-end;
    }
  }
  .eyeGlassPRescriptionHis::v-deep{

    .market{
     padding-bottom: 20px;
    }
    .uploadImg{
      .el-upload-dragger{
        width: 69px;
        height: 61px;
        border-radius: 3px;
      }
      margin-bottom: 30px;
      height: auto;
      display: flex;
      margin-top: 34px;
      i{
        line-height: 60px;
        font-size: 30px;
        color:#8D9EA7
      }
      .el-upload-dragger{
        background:#E8E8E8 ;
      }
      div{

        margin-right: 20px;
        line-height:20px
      }
    }
    &>p{
      line-height: 55px;
      font-weight: 600;
    }
    &>ul{
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      line-height: 40px;
        height: 40px;
      li{
        text-align: center;
        min-width:200px;
        &:nth-last-of-type(1){
          text-align: right;
          button{
            margin-right: 20px;
            width: 46px;
            height: 30px;
            border-radius: 7px;
            background-color: rgba(0, 176, 255, 1);
            color: rgba(255, 255, 255, 1);
          }
        }

      }
    }
  }
}
</style>
