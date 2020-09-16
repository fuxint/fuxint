<template>
  <div class="farGlass">
    <p>配镜处方</p>
    <div class="time_farClass">
      <el-form ref="form" label-width="80px">
        <el-form-item label="时间">
          <el-date-picker type="date" placeholder="选择日期" />
        </el-form-item>
      </el-form>
    </div>

    <div class="farGlassfiy">

      <el-row :gutter="20" type="flex">
        <el-col :span="2">
          <div class="grid-content ">
            <div class="leftOrRighteye">
              <span class="block">右眼OD </span>
              <div><i class="el-icon-sort" /></div>
              <span class="block">左眼OS</span>
            </div>
          </div>
        </el-col>
        <el-col v-for="(item,index) of classfiyList" :key="index" :span="2" style="padding-right: 20px">
          <div class="classfiy_list">
            <p>{{ item.title }}</p>
            <el-input class="block" />
            <el-input />
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex">
        <el-col :span="6">
          <div class="classfiy_list classfiy_list2">
            <p>远用瞳距</p>
            <el-input class="block" />
          </div>
        </el-col>

      </el-row>
      <el-row :gutter="20" type="flex">
        <el-col :span="24">
          <div class="classfiy_list classfiy_list2 remark">
            <p>验光单备注</p>
            <textarea width="500px" />
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" style="margin-top: 20px">
        <el-col :span="24">
          <div class="uploadImg">
            <el-upload
              class="upload"
              drag
              multiple
            >
              <i class="el-icon-picture" />
            </el-upload>
            <div>验光单图片</div>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
export default {
  name: 'GlassesFar',
  data() {
    return {
      typeCornealShape: [
        'VST设计  >   常规片', '散光片/环曲面', 'VST设计  >   常规片', '双矢高'
      ],
      classfiyList: [
        {
          title: '球镜SPH',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '柱镜CYL',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '轴位Axis',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '裸眼视力',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '矫正视力',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '瞳距PD',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '瞳高PH',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '棱镜V',
          leftEye: '',
          rightEye: ''
        },
        {
          title: '基底SC',
          leftEye: '',
          rightEye: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .farGlass {
    font-size: 14px;
    padding-left: 25px;
    height: 666px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0);
    text-align: left;
    box-shadow: 0px 0px 6px 0px rgba(215, 211, 211, 1);
    border: 1px solid rgba(255, 255, 255, 0);
    .uploadImg::v-deep{
      margin-left: 110px;
      .el-upload-dragger{
        width: 69px;
        height: 61px;
        border-radius: 3px;
      }
      margin-bottom: 30px;
      height: auto;
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
        color: #00DBFF ;
        margin-right: 20px;
        line-height:20px
      }
    }
    .type{
      p{
        min-width:200px!important;
        color: #AAA6A6 ;
      }
    }
    .remark{
      textarea{
        height: 96px;
        line-height: 20px;
        border-radius: 3px;
        text-align: left;
        padding: 10px;
        border: 1px solid rgba(238, 238, 238, 1);
      }
    }
    & > p {
      line-height: 40px;
      font-weight: 600;
      color: black;
    }

    .time_farClass {
      .el-form-item{
        margin-bottom: 7px;
      }
      .el-input__inner {
        width: 180px;
      }
    }

    .classfiy_list2 {
      display: flex;
      p{
        min-width: 110px;
      }
    }

    .classfiy_list {
      p {
        /*min-width: 110px;*/
        line-height: 40px;
        text-align: center;

      }

      .el-input {
        margin-bottom: 26px;
        width: 100%;
      }
    }

    .leftOrRighteye {
      width: 90px;
      padding-top: 40px;

      span {
        line-height: 40px;
        text-align: center;
        color: rgba(0, 219, 255, 1);
      }

      div {
        margin: auto;

        display: flex;
        width: 29px;
        height: 29px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0);
        text-align: center;
        border: 1px solid rgba(0, 219, 255, 1);
        justify-content: center;

        i {
          margin: auto;
          font-size: 16px;
          color: rgba(0, 219, 255, 1);
        }
      }
    }
  }
</style>
