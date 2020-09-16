<template>
  <div class="classfiy2">

    <header>
      <ul>
        <li>商品类型</li>
        <li v-for="(item,index) of productList" :key="index" @click="HandleChoose(index)"
            :class="productListIndex==index?'tagsActive cursor':'cursor'">{{item.title}}
        </li>
      </ul>


      <div class="header_right">
        <i class="el-icon-arrow-down"/>
      </div>
    </header>

    <div class="classfiy_filter">

      <el-row class="block-col-2">
        <el-col :span="4">
          <span class="demonstration">筛选条件： </span>
          <el-dropdown>
      <span class="el-dropdown-link">
        --折射率--  <i class="el-icon-arrow-down el-icon--right"></i>
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
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
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
        <el-col :span="10" offset="1">
          <div class="grid-content bg-purple">
            <div>
              <el-input placeholder="请输入内容" v-model="input2">
                <template slot="append">搜索</template>
              </el-input>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row justify="space-between" class="filter_list">
        <el-col span="12">
          <el-radio-group v-model="radio1">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col span="12">
          <el-row type="flex" justify="end">
            <el-col :span="4">全部商品(280)</el-col>
            <el-col :span="4"> 未绑定(280)</el-col>
            <el-col :span="4"> 已绑定(0)</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" class="filer_world">
        <el-col justify="space-between" v-for="item in 36">A</el-col>
      </el-row>
      <div v-if="!false==false">
        <dataBaseList></dataBaseList>
      </div>
      <div>
        <catenaList></catenaList>
      </div>
        产品引用
                  <div class="referenceProduct">
                    <el-dialog style="z-index: 9999 " top="40vh" width="300px" :visible.sync="referenceProduct">
                      <p slot="title" class="title">引用资料库产品</p>
                <div class="referenceProductChoose">
                  <span>全部售价</span>
                  <el-switch
                    active-color="#00DBFF"
                    inactive-color="#B9B9B9"
                    active-value="100"
                    inactive-value="0">
                  </el-switch>
                </div>
                <div class="referenceProductChoose">
                  <span>光度范围</span>
                  <el-switch
                    active-color="#00DBFF"
                    inactive-color="#B9B9B9"
                    active-value="100"
                    inactive-value="1">
                  </el-switch>
                </div>
                <div class="referenceProductChoose">
                  <span>全部型号</span>
                  <el-switch
                    active-color="#00DBFF"
                    inactive-color="#B9B9B9"
                    active-value="100"
                    inactive-value="0">
                  </el-switch>
                </div>
                <div class="referenceProductChoose">
                  <span>图片</span>
                  <el-switch
                    active-color="#00DBFF"
                    inactive-color="#B9B9B9"
                    active-value="100"
                    inactive-value="0">
                  </el-switch>
                </div>
                <el-row type="flex" class="footer_datatype" justify="space-around">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <el-button>默认按钮</el-button>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <el-button>默认按钮</el-button>
                    </div>
                  </el-col>
                </el-row>
                    </el-dialog>
                  </div>
        未绑定品牌
            <div class="referenceProduct2 referenceProduct">
                    <el-dialog style="z-index: 9999 " top="10vh" width="650px" :visible.sync="referenceProduct">
                      <p slot="title" class="title">未绑定的品牌</p>
                      <div class="unbataType">
                        <el-row class="undataType_Header">
                          <el-col :span="4">
                            <span>关键词搜索</span>
                          </el-col>
                          <el-col>
                          <div>
                            <el-input placeholder="请输入内容" v-model="input2">
                              <template slot="append">查询</template>
                            </el-input>
                          </div>
                          </el-col>
                        </el-row>
                        <el-row class="undatatypeList"   type="flex"  justify="space-between">
                          <el-col :span="6" v-for="item of 20">好品牌</el-col>
                        </el-row>
                                          <el-row type="flex"  class="row-bg content_datatype_pur2 content_dataTyoe_footer" justify="center">
                                            <el-col :span="6"  ><div>
                                              <button>取消</button>
                                            </div></el-col>
                                            <el-col :span="6"><div>
                                              <button>返回</button>
                                            </div></el-col>
                                          </el-row>
                      </div>
         品牌引用
                      <p slot="title" class="title">引用绑定资料库品牌</p>
                      <div>
                        <el-row type="flex" class="row-bg content_datatype_pur2"  justify="center">
                          <el-col :span="8">
                            <div class="grid-content bg-purple-light" align="center">引用并创建品牌</div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content bg-purple" align="center">选择已有品牌</div>
                          </el-col>
                        </el-row>
                        <el-row  type="flex" class="content_datatype_pur"  justify="center">
                          <el-col :span="8">
                            <span>引用资料库图文介绍</span>
                            <el-switch
                              active-color="#00DBFF"
                              inactive-color="#B9B9B9"
                              active-value="100"
                              inactive-value="0">
                            </el-switch>
                          </el-col>
                          <el-col :span="8">
                          </el-col>
                        </el-row>
                        <el-row type="flex"  class="row-bg content_datatype_pur2 content_dataTyoe_footer" justify="center">
                          <el-col :span="6"  ><div>
                            <button>取消</button>
                          </div></el-col>
                          <el-col :span="6"><div>
                            <button>确定引用</button>
                          </div></el-col>
                        </el-row>
                      </div>
                    </el-dialog>
                  </div>
      <div class="hide_content">
        <el-dialog style="z-index: 9999 " top="10vh" width="465px" :visible.sync="referenceProduct">
          <div class="referenceProduct_hint">
            <p> 提示</p>
            <div>
              <p>引用并创建品牌，是否确认引用？</p>
              <el-row type="flex" class="row-bg content_datatype_pur2 content_dataTyoe_footer" justify="center">
                <el-col :span="6">
                  <div>
                    <button class="cancel_hint">取消</button>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div>
                    <button class="cancel_hint">确定引用</button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>

</template>

<script>
  import catenaList from "@/views/AddProduct/components/Database/catenaList";
 import dataBaseList from "@/views/AddProduct/components/Database/dataBaseList";
 export default {
    name: "classfiyList",
   data() {
     return {
        referenceProduct: true,//產品引用
        productListIndex: 0,
        productList: [
          {
            title: '常用',
            id: '1',

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
         }, {-->
           title: '定制',
            id: '5'
          },
        ]
      }
    },
    components: {dataBaseList, catenaList},
    methods: {
      HandleChoose(index) {
        this.productListIndex = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .hide_content::v-deep {
    .el-dialog__header {
      display: none !important;
    }
    .el-dialog__headerbtn {
      display: none !important;
    }
    .referenceProduct_hint {
      & > p {
        padding-left: 20px;
        width: 465px;
        height: 45px;
        line-height: 45px;
        border-radius: 9px 9px 0px 0px;
        background-color: rgba(0, 0, 0, 1);
        color: #fff;
        font-size: 16px;
        text-align: left;
        font-family: Roboto;
        border: 1px solid rgba(255, 255, 255, 0);
      }
      & > div {
        padding-bottom: 20px;
        padding-left: 20px;
        .el-col:nth-of-type(1) {
          button {
            background: #fff;
            width: 99px;
            height: 35px;
            line-height: 20px;
            border-radius: 3px;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Roboto;
            border: 1px solid rgba(187, 187, 187, 1);
          }
        }
        .el-col:nth-of-type(2) {
          button {
            width: 99px;
            height: 35px;
            line-height: 20px;
            border-radius: 3px;
            background: rgba(0, 219, 255, 1);
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            text-align: center;
            font-family: Roboto;
            border: 1px solid rgba(255, 255, 255, 0);
          }
        }
      }
    }
  }
  .title {
    line-height: 70px;
  }
  .classfiy2::v-deep {
    font-size: 16px;
    .hide_content::v-deep {
      .unbataType {
        .undatatypeList {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .el-col {
            margin-bottom: 20px;
            width: 120px;
            height: 70px;
            line-height: 70px;
            border-radius: 6px;
            background-color: rgba(249, 249, 249, 0.6);
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Roboto;
            border: 1px dashed rgba(185, 185, 185, 1);
          }
        }
        padding: 0 20px;
        .undataType_Header {
          margin: 13px 0 20px 0;
          display: flex;
        }
      }
      .el-dialog {
        border-radius: 6px;
      }
      .referenceProduct2 {
        .title {
          border-bottom: 1px solid rgba(236, 236, 236, 1);;
        }

        .content_dataTyoe_footer {
          padding-bottom: 20px;
        }
        .content_datatype_pur2 {
          .el-col {
            &:nth-of-type(1) {
              margin-right: 15px;
              button {
                background: #fff;
                width: 145px;
                height: 45px;
                line-height: 20px;
                border-radius: 3px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Roboto;
                border: 1px solid rgba(238, 238, 238, 1);
              }
            }
            &:nth-of-type(2) {
              margin-left: 15px;
              button {
                width: 145px;
                height: 45px;
                line-height: 20px;
                border-radius: 3px;
                background-color: rgba(0, 0, 0, 1);
                color: rgba(255, 255, 255, 1);
                font-size: 14px;
                text-align: center;
                font-family: Roboto;
                border: 1px solid rgba(255, 255, 255, 0);
              }
            }
          }
        }
        .content_datatype_pur {
          margin-bottom: 50px;
          .el-col {
            margin-right: 15px;
            display: flex;
            justify-content: space-between;
          }
          .el-switch {
            margin: auto 0;
          }
        }
        .grid-content {
          margin: 20px 0;
          width: 202px;
          height: 101px;
          border-radius: 6px;
          line-height: 110px;
          background-color: rgba(249, 249, 249, 1);
          font-family: Roboto;
          border: 1px solid rgba(236, 236, 236, 1);
        }
      }
      .referenceProduct::v-deep {
        height: 45px;
        line-height: 45px;
        border-radius: 9px 9px 0px 0px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        text-align: left;
        font-family: Roboto;
        border: 1px solid rgba(255, 255, 255, 0);
      }
      .el-dialog {
        z-index: 999;
      }
      .el-dialog__wrapper {
        z-index: 1 !important;
      }
      .footer_datatype {
        margin-top: 40px;
        padding-bottom: 20px;
        button {
          display: block;
          margin: 0 auto;
        }
      }
      .referenceProductChoose {
        display: flex;
        justify-content: space-between;
        .el-switch {
          font-size: 24px;
          margin: auto 0;
        }
      }
      .el-dialog__body {
        padding: 0 20px 0 20px;
      }
      .el-switch {
        justify-content: space-between;
        display: flex;
      }
    }
    .filter_list {
      border-bottom: 1px solid #ccc;
      margin: 10px 0 8px 0;
    }
    .filer_world {
      padding-bottom: 23px;
      border-bottom: 1px dashed #ccc;
      & > div {
        border: 1px solid #B9B9B9;
        height: 35px;
        line-height: 35px;
        text-align: center;
        line-height: 35px;
        margin-right: 2px;
      }
    }
    .el-input-group__append {
      text-align: center;
      width: 100px;
      color: #fff !important;
      background: #000;
    }
    background: #fff;

    .el-icon-arrow-down:before {
      /*content: /25BC;*/
    }
    border-radius: 8px;
    margin: 0 20px;
    .classfiy_filter {
      padding: 10px 20px 10px 0px;
      line-height: 40px;
      .demonstration {
        margin-right: 20px;
      }
    }
    .classfiy_list {
      .el-row {
        padding: 20px 20px 20px 20px;
        .el-col-5 {
          padding-top: 15px;
        }
        .el-col-4 {
          display: flex;
          justify-content: space-around;
          span {
            margin-top: 25px;
            border-right: 1px solid rgba(187, 187, 187, 1);
            width: 100px;
            text-align: center;
            display: block;
          }
        }
      }
    }

    header {
      overflow: hidden;
      line-height: 40px;
      text-align: center;
      ul {
        float: left;
        li {
          &:nth-of-type(1) {
            font-weight: 600;
            margin-right: 20px;
            text-align: left;
            color: #101010;
          }
          line-height: 80px;
          float: left;
          width: 80px;
          text-align: center;

          &.productActive {
            color: #00DBFF;
          }
        }
      }

      div {
        float: right;
        width: 80px;
        i {
          text-align: center;
        }
      }
    }
  }

</style>
