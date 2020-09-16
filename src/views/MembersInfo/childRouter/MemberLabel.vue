<template>
  <div class="MemberLabelAll">

    <div class="MemberLabel">
      <div class="MemberLabel_left">
        <div>
          <div class="NotChooseLabel">
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span>未选标签</span>
                <i class="el-icon-warning-outline" />
              </div>
              <div class="NotChooseLabeList">
                <div v-for="item in NotChooseLabel" class="NotChooseLabelItem">
                  <span>{{ item.title }}</span>
                  <i class="el-icon-arrow-right" />
                </div>
              </div>
              <button class="block">添加标签</button>
            </el-card>
          </div>
          <div class="AlreadyChooseLabel">
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span>已有标签</span>
              </div>
              <div class="NotChooseLabeList">
                <div v-for="item in NotChooseLabel" class="NotChooseLabelItem">
                  <i class="el-icon-arrow-left" />
                  <span>{{ item.title }}</span>
                  <i class="el-icon-error" />
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <p>提示：修改，删除标签会影响所有已使用标签的会员</p>
      </div>

      <div class="history">
        <div class="frontDesk">
          <div class="AlreadyChooseLabel">
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span>前台记录</span>
              </div>
            </el-card>
          </div>
        </div>
        <div class="frontDesk">
          <div class="AlreadyChooseLabel">
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span>前台记录</span>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <span class="affrim">确认</span>
  </div>
</template>

<script>
export default {
  name: 'MemberLabel',
  data() {
    return {
      NotChooseLabel: [
        {
          title: '高消费能力客户'
        },
        {
          title: '高消费能力客户'
        },
        {
          title: '高消费能力客户'
        },
        {
          title: '高消费能力客户'
        },
        {
          title: '高消费能力客户'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .MemberLabelAll{
    .el-card{border: none;}
.history{
  .el-card{
    margin-bottom:20px;

    height: 160px!important;
    width: 600px;
    border-radius: 6px;
    text-align: center;
  }
}

    &>p{
      margin-top: 10px;
      line-height: 30px;
      color: #00DBFF;
    }
  }
.AlreadyChooseLabel{
  .NotChooseLabeList{
    .NotChooseLabelItem{
      position: relative;
      i{
        &:nth-of-type(2){
          color: #FB3A5F;
          position: absolute;
          right: -3px;
          top: -3px;
        }
      }
      span{
        display: block;
        width: 300px!important;
        text-align: center!important;
      }
    }

  }
}
.box-card{
  height: 300px;
}
.MemberLabel::v-deep{
  .MemberLabel_left{
    padding-left: 36px;

    &>div{
     display: flex;
   }
      p{
        margin-top: 10px;
        line-height: 30px;
        color: #00DBFF;
      }
  }
  display: flex;
  .NotChooseLabel,.AlreadyChooseLabel{
    .el-card{
      border:noen
    }
    margin-right: 15px;
    width: 200px;
    .clearfix{
      display: flex;
      i{
        margin:1px 0 0 3px;
        font-size: 18px;
      }
    }
    .el-card__body{
      padding:0;
      border: none;
    }
    .block{
      color: white;
      width: 214px;
      margin-top: 15px;
      height: 34px;
      line-height: 34px;
      border-radius:5px;
      background-color: rgba(0, 219, 255, 1);
    }
    .NotChooseLabeList{
      height: 300px;
      /*overflow-y: scroll;*/
      padding: 6px 0;
      .NotChooseLabelItem{
        display: flex;
        margin: 0 6px;
        justify-content: space-between;
        padding: 0 6px;
        height: 36px;
        line-height: 36px;
        border-radius: 5px;
        background-color: rgba(0, 219, 255, 0.17);
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        margin-bottom: 5px;
        i{
          display: block;
          margin: auto 0;
        }

      }
    }

    .el-card__header{
      padding: 12px 0;
      line-height: 22px;
      span{
        padding-left: 17px;
        border-left: 2px solid #00DBFF;
      }
    }
  }
}
</style>
