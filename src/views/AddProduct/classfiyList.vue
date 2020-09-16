<template>
  <div class="classfiy">

    <header>
      <ul>
        <li v-for="(item,index) of productList" :key="index" :class="productListIndex==index?'tagsActive cursor':'cursor'" @click="HandleChoose(index)">{{ item.title }}</li>
      </ul>

      <div class="header_right">
        <i class="el-icon-arrow-down" />
      </div>
    </header>
    <div class="classfiy_list">
      <el-row :gutter="20">
        <el-col :span="4">
          <span>价格商品 </span>
          <span>品牌 </span></el-col>
        <el-col :span="12" offset="2"><div class="grid-content bg-purple">
          <div style="margin-top: 15px;">
            <el-input v-model="input2" placeholder="请输入内容">
              <template slot="append">搜索</template>
            </el-input>
          </div>
        </div></el-col>
        <el-col :span="5" offset="1"><div class="grid-content bg-purple">
          <el-radio-group>
            <el-radio-button label="价格商品" />
            <el-radio-button label="库存商品" />
          </el-radio-group>
        </div></el-col>
      </el-row>
    </div>
    <div class="classfiy_filter">

      <el-row class="block-col-2">
        <el-col :span="4">
          <span class="demonstration">筛选条件： </span>
          <el-dropdown>
            <span class="el-dropdown-link">
              --折射率--  <i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

        <el-col :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>

      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ClassfiyList',
  data() {
    return {
      productListIndex: 0,
      productList: [
        {
          title: '常用',
          id: '1'

        },
        {
          title: '验光',
          id: '2'
        },
        {
          title: '配镜 ',
          id: '3'
        }, {
          title: '修眼镜',
          id: '4'
        }, {
          title: '定制',
          id: '5'
        }
      ]
    }
  },
  methods: {
    HandleChoose(index) {
      this.productListIndex = index
    }
  }
}
</script>

<style scoped  lang="scss">
.classfiy::v-deep{

  .el-icon-arrow-down:before{
    /*content: /25BC;*/
  }
  border-radius: 8px;
  background-color: rgba(247, 247, 247, 1);
  margin: 0 20px;
  .el-input-group__append{
    background: #D7D3D3;
    span{
      color: #fff!important;
    }
  }
  .el-input-group__prepend{
    background: #fff;
    color: #101010;
  }
  .classfiy_filter{
    padding:20px 20px 20px 20px;
  }
  .classfiy_list{

  .el-row{
    padding:20px 20px 20px 20px;
    .el-col-5{
      padding-top: 15px;
    }
    .el-col-4{
      display: flex;
      justify-content: space-around;
      span{
        margin-top: 25px;
        border-right:  1px solid rgba(187, 187, 187, 1);
        width:100px;
        text-align: center;
        display: block;
      }
    }
    div{}
  }
  }

  header{
    height: 40px;
    line-height: 40px;

    text-align: center;
    ul{
      float: left;
      li{
        float: left;
        width: 80px;
        text-align: center;
        &.productActive{
          color: #00DBFF;

        }
      }
    }
    div{
      float: right;
      width: 80px;
      i{
        text-align: center;
      }
    }
  }
}

</style>
