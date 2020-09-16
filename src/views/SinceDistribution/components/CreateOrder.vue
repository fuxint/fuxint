<template>
  <!--  自配送订单管理-->
  <div class="VerificationAudit_box createOrder">
    <el-dialog title="自配送订单管理" top="5vh" width="80vw" :visible.sync="createOrder ">
      <div class="createOrderAll">
        <el-row :gutter="20">
          <el-col :span="12"><div class="createOrderLeft">

            <el-form ref="form" :model="form" label-width="80px">
              <p>发件信息</p>

              <el-form-item label="门店">
                <el-select v-model="form.region" disabled="true" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="form.name" disabled="true" />
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="form.name" disabled="true" />
              </el-form-item>
            </el-form>

            <el-form ref="form" :model="form" label-width="80px">
              <p>商品信息</p>
              <el-form-item label="选择订单">
                <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item class="chooseList" label="商品类型">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
                <el-input v-model="form.name" />
              </el-form-item>

              <el-form-item label="订单备注">
                <el-input v-model="form.desc" type="textarea" />
              </el-form-item>
            </el-form>

          </div></el-col>
          <el-col :span="12"><div class="createOrderLeft">

            <el-form ref="form" :model="form" label-width="80px">
              <p>收件信息</p>

              <el-form-item class="chooseList" label="选择平台">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item class="chooseList" label="姓名">
                <el-input v-model="form.name" placeholder="姓名" />
                <el-input v-model="form.name" placeholder="平台昵称" />
              </el-form-item>
              <el-form-item class="chooseList" label="电话">
                <el-input v-model="form.name" placeholder="收货人手机号码" />
                <el-input v-model="form.name" placeholder="预订人手机号码" />
              </el-form-item>

              <el-form-item label="支付方式">
                <el-select v-model="form.name" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>

              <el-form-item class="chooseList2" label="送达时间">
                <div>
                  <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" />
                  </el-form-item>
                  <el-form-item prop="date2">
                    <el-time-picker v-model="form.name" placeholder="选择时间" style="width: 100%;" />
                  </el-form-item>
                </div>
                <p>输入客户期望送达时间， 发货时间会自动计算</p>
              </el-form-item>
              <el-form-item label="配送门店">
                <el-select v-model="form.name" placeholder="自动派单">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>

              <el-form-item label="位置" class="chooseList">
                <div class="block">
                  <el-cascader
                    v-model="value"
                    :options="options"
                  />
                </div>
              </el-form-item>
              <el-form-item class="addressDetail" label="详细地址">
                <el-input v-model="form.name" style="min-height: 150px" placeholder="单元， 门牌号  " />
              </el-form-item>

            </el-form>
          </div>
          </el-col></el-row>
      </div>
      <div class="affrimOrderForm">
        <button>取消</button>
        <button>提交</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddSalesman',
  data() {
    return {
      createOrder: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      }

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .createOrder::v-deep{
    .affrimOrderForm{
      display: flex;
      justify-content: center;
      margin-top: 30px;

      button{
        &:nth-of-type(1){
          margin-right: 20px  ;
          background: #fff;
          border: 1px solid rgba(238, 238, 238, 1);;
        }
        &:nth-of-type(2){
          background: #000000;
          color: #fff;height: 43px;

        }
        width: 145px;
        height: 45px;
        border-radius: 3px;
        font-size: 14px;
        text-align: center;
      }
    }
.createOrderLeft,.createOrderRight{
  height: 600px;
  padding: 0 20px;
  background: #F7F7F7;
  border-radius: 6px;
.el-input{
  width:180px;
}
  .chooseList{
    .el-form-item__content{
      display: flex;
      justify-content: flex-start;
      div{
        margin-right: 15px;
      }
    }
  }
  .chooseList2{

    &>div{
     p{
        color: #939292 ;
      }
      &>div{
        display: flex;
        justify-content: flex-start;

        &>div{
          margin-right: 15px;
        }
      }
    }
  }
  .addressDetail{
    width: 100%;
    .el-input{
      width: 100%;
    }
  }

  .el-form{
    padding-bottom:50px;
    .el-form-item__label{
      color: rgba(16, 16, 16, 0.5);
    }
    &>p{
      margin-bottom: 15px;
      line-height: 40px;
    }
  }
}
.createOrderAll{
}
    .el-icon-close{
      color: #fff!important;
    }
    .el-dialog{
      border-radius: 10px;
      .el-dialog__body{
        padding: 30px !important;
      }
    }
  }
</style>
