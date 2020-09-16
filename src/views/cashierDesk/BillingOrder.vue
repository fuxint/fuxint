<template>
  <div>
    <el-row>
      <el-col :span="16">
        <TagsView />

        <!-- 分类-->
        <classfiyList />
        <ProductList />
        <header>
          <ul>
            <li v-for="(item,index) of productList" :key="index" :class="productListIndex==index?'tagsActive cursor':'cursor'" @click="HandleChoose(index)">{{ item.title }}</li>
          </ul>
          <div class="header_right">
            <i class="el-icon-arrow-down" />
          </div>
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

      </el-col>
      <!--單據頁面-->
      <el-col :span="8">
        <voucher />
      </el-col>
      <!--添加代理商-->
      <AddSaler />
      <!--    -->
      <Remark />
      <!--    下单-->
      <Client />
      <!--  会员查询-->
      <SearchMember />
    </el-row>

    <!--二级路由-->
    <router-view />
  </div>
</template>

<script>
import classfiyList from '@/views/AddProduct/classfiyList'
import ProductList from '../AddProduct/productList'
import SearchMember from './components/SearchMember/index'
import Remark from './components/remark'
import Client from './components/AddClient'
import AddSaler from './components/AddSaler/index'
import TagsView from './components/TagsView'
import voucher from '@/views/cashierDesk/components/voucher'
export default {
  name: 'BillingOrder',
  components: { TagsView, voucher, AddSaler, Remark, Client, SearchMember, ProductList, classfiyList },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .search_Fil{

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
