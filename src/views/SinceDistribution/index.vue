<template>
  <!--  自配送-->
  <div>
    <el-row>
      <el-col :span="16">
        <ShipHead />
        <div class="tagsViewTypeOrderList">
          <ul>
            <li v-for="(item,index) of tagsViewTypeOrderList" :key="index" class="cursor">
              {{ item.title }}
            </li>
          </ul>
        </div>
        <header>
          <ul>
            <li v-for="(item,index) of productList" :key="index" :class="productListIndex==index?'tagsActive cursor':'cursor'" @click="HandleChoose(index)">{{ item.title }}</li>
          </ul>
          <div class="header_right" />
        </header>
        <div class="content_list">
          <el-row>
            <el-col v-for="(item,index) of cardList" :key="index">
              <el-card shadow="always" body-style="padding:0px">
                <div class="cardList">
                  <div class="card_item">
                    <span class="fz5">{{ item.price }}</span>
                  </div>
                  <div class="card_des fz2">{{ item.des }}</div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <!--二级路由-->
        <router-view />
      </el-col>
      <!--單據頁面-->
      <el-col :span="8">
        <ShipDocuments />
      </el-col>
    </el-row>
    <CreateOrder />
  </div>
</template>

<script>
import CreateOrder from '@/views/SinceDistribution/components/CreateOrder'
import ShipHead from '@/views/SinceDistribution/components/ShipHead'
import ShipDocuments from '@/views/SinceDistribution/components/ShipDocuments'
export default {
  name: 'BillingOrder',
  components: { ShipDocuments, ShipHead, CreateOrder },
  data() {
    return {
      tagsViewTypeOrderList: [
        {
          type: '101',
          title: '新订单'
        },
        {
          type: '102',
          title: '待强单'
        },

        {
          type: '103',
          title: '配送中'
        },
        {
          type: '105',
          title: '配送异常'
        },
        {
          type: '',
          title: '催单'
        },
        {
          type: '105',
          title: '取消/退款'
        },
        {
          type: '101',
          title: '新订单'
        }

      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .tagsViewTypeOrderList{
    margin: 0 20px;
    ul{
      margin-top: 15px;
      display: flex;
      height: 40px;
      line-height: 40px;
      border-radius: 8px;
      background-color: rgba(247, 247, 247, 1);
      border: 1px solid rgba(255, 255, 255, 0);
      li{
        min-width: 120px;
        text-align: center;
      }
    }
  }
  .VerificationAudit_box::v-deep {
    .el-dialog__headerbtn {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #666666;
    }
    .title{
      text-align: center;
    }
  }
  .el-col-8{
    min-width:560px;
    position: fixed;right:5px;
  }
  .el-col-16{
    min-width:700px;
    position: fixed;
  }

</style>
