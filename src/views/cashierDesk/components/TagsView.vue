<template>
    <div class="tags_top">
      <div class="tags_left">
        <i class="el-icon-arrow-left block" />
      </div>
        <ul>
          <li @click="ChooseFilterCla(index)" v-for="(item,index) of tagsView" :key="index" :class="indexTags==index?'tagsActive cursor':'cursor'">
         {{item}}
          </li>
        </ul>

      <div class="tags_right block">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          >
        </el-input>
        <div>
          <i class="el-icon-full-screen block" />
        </div>
        <div>
          <i class="el-icon-search block" />
        </div>
        <div>
          <i  class="el-icon-s-grid block" />
        </div>
      </div>


<!-- 搜索-->

<!--      <div class="search_Fil">-->
<!--        <el-col  >-->
<!--          <div class="grid-content bg-purple">-->
<!--            <div>-->
<!--              <el-input placeholder="请输入内容" v-model="input2">-->
<!--                <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
<!--                <template slot="append">搜索</template>-->
<!--              </el-input>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </div>-->


<!--头部价格区间 -->
<!--      <div class="filter_price">-->
<!--            <div>-->
<!--              <p>价格区间 (元）</p>-->
<!--              <ul>-->
<!--                <li @click="ChooseFilterPrcie(index)"  v-for="(item,index)  of priceFil" :key="index">-->
<!--                 <span :class="priceChoose==index?'chooseActive cursor':'cursor'" > {{item}}</span>-->
<!--                </li>-->
<!--              </ul>-->
<!--              <p>拼音首字母</p>-->
<!--              <ul>-->
<!--                <li @click="ChooseFilterSpell(index)" v-for="(item,index) of priceFil"  :key="index">-->
<!--                  <span  :class="SpellChoose==index?'chooseActive  cursor':'cursor'">{{item}}</span>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--      </div>-->

    </div>
</template>

<script>
  export default {
    name: "TagsView",
      data() {
        return{
        indexTags:0,
        tagsView: [
          '项目',
          '产品',
          '预约',
          '资料库'
        ],
          priceChoose:'',
          SpellChoose:'',
          priceFil:[
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100',
            '50以下',
            '100'
          ]
       }
     },
     methods: {
       //选择区间
       ChooseFilterPrcie(index){
          this.priceChoose=index
       },
       ChooseFilterSpell(index){
         this.SpellChoose=index
       },
       ChooseFilterCla(index){
          this.indexTags=index
       }
      }
    }
</script>

<style scoped lang="scss">
.search_Fil::v-deep{
  .el-icon-search{
    padding-top: 0;
  }
  margin-top: 60px;
  .el-input__inner{
    padding-left: 50px;
    border: none;
    background-color: rgba(247, 247, 247, 1);
  }
  .el-input-group__append{
    width: 113px;
    height:35px;
    line-height: 22px;
    border-radius: 0px 8px 8px 0px;
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 0.97);
    font-size: 15px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 0);
  }
}
  .tags_top{
    position: relative;
    padding: 20px ;
    height: 80px;

    .filter_price{
      position: absolute;
      top: 150px;
      right: 20px;
      width: 575px;
      height: 633px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0px 0px 6px 0px rgba(170, 166, 166, 1);
      border: 1px solid rgba(255, 255, 255, 0);
      padding: 14px 20px;
      font-size: 14px;
      ul,p{
        line-height: 47px;
      }
      p{
        text-align: left;
      }

      ul{
        display: flex;
        flex-wrap: wrap!important;
        justify-content: flex-start;
        font-family: Roboto;
        &:nth-of-type(1)>li{
          width: 140px;
          span{
            width: 120px;

          }
        }
        &:nth-of-type(2)>li{
          width:75px;
          span{
            width: 55px;
          }
        }
        li{
          margin-bottom: 10px;
          text-align: center;
          color: rgba(16, 16, 16, 1);
          border-radius: 6px;
          line-height:40px;
          height: 40px;
          font-size: 14px;
          &.chooseActive{
            background: #00DBFF ;
          }
          span{
            height: 40px;
            border-radius: 6px;
            display: block;
            border: 1px solid  rgba(16, 16, 16, 0.2);

          }
        }
      }



    }

    i{
      font-weight: 700;
      padding-top: 8px;
      font-size: 20px;
      text-align: center;
    }
  &>ul{
      float: left;
      width: 40%;
      display: flex;
      justify-content: space-around;
      li{
        line-height: 40px;
      }
    }

    .tags_right{
      width:500px;
      float: right;
      display: flex;
      justify-content: space-around;
      .el-input{
        width: 299px;
        height: 35px;
        border-radius: 6px;
        background-color: rgba(247, 247, 247, 1);
        color: rgba(215, 211, 211, 1);
        font-size: 14px;
        text-align: left;
        font-family: Roboto;
      }
     div{
       border-radius:8px;
       width: 34px;
       height: 34px;
       background-color: rgba(16, 16, 16, 0.05);

     }

    }
.tags_left{
  border-radius:8px;
  float: left;
  width: 34px;
  height: 34px;
  background-color: rgba(16, 16, 16, 0.05);
}
  }

</style>
