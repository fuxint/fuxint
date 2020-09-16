<template>
  <div class="evaluate">
    <div class="tags_top">
      <div class="tags_left" @click="GoBack">
        <i class="el-icon-arrow-left block" />
      </div>

      <div class="tags_right fz20">
        服务评价
      </div>
    </div>

    <div class="evaluate_textarea">
      <p>其他</p>
      <input placeholder="本次服务满足您的期待么？  请说出您的感受吧" type="text">
      <div>
        <div class="rate_size">
          <el-rate v-model="RateVal" size @change="ChangeRate" />
        </div>

        <button>保存</button>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'TagsView',
  data() {
    return {
      RateVal: 5
    }
  },
  methods: {
    ChangeRate() {
      console.log('更改')
    },
    // 返回
    GoBack() {
      console.log('返回上一页')
      console.log(this.$store)
    }
  }
}
</script>
axisExpandRate
<style scoped lang="scss">
  ::v-deep{
    .rate_size i{
      margin-top: 20px;
      font-size: 30px;
    }
  }

.evaluate_textarea{
  margin:0 30px;

  div{

    display: flex;
    button{
      margin-top: 20px;
      border: none;
      margin-top: 20px;
      margin-left: 30px;
      display: block;
      width: 120px;
      height: 30px;
      border-radius: 6px;
      background-color: rgba(0, 0, 0);
      color: rgba(255, 255, 255, 1);
    }
  }
  &>p{
    line-height:60px;
  }

  input,input::-webkit-input-placeholder{
    width: 100%;
    border-radius: 6px;
    background-color: rgba(247, 247, 247, 1);
    text-align: left;
    height: 85px;
    line-height: 25px;
    padding:0 0 30px 5px;
    border: none;
    word-break:break-all;
    outline:none;
    size: 40px;
  }
}

    .tags_top {
      background: #fff;
      position: relative;
      padding: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      height: 80px;

      .tags_right {
        text-align: center;
        line-height: 40px;
      }

      .tags_left {
        border-radius: 8px;
        float: left;
        width: 34px;
        height: 34px;
        background-color: rgba(16, 16, 16, 0.05);

        i {
          font-weight: 700;
          padding-top: 8px;
          text-align: center;
        }
      }
    }

</style>
