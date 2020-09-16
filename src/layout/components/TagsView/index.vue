<template>
  <div class="header">

    <el-row v-if="$route.name=='DeliveryOrder'">
      <el-col :span="9">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">外卖平台</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">订单状态</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <p class="cursor" @click="PlatformSet">平台设置</p>

        </el-menu>
      </el-col>
      <el-col :span="3" style="height: 60px;line-height: 60px;display: flex; align-items: center;  justify-content: center;">
        <div class=" header_right2">
          <i class="el-icon-search" />
        </div>
      </el-col>
    </el-row>

    <!-- <el-row v-if="$route.name">
      <el-col :span="9">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">今日收银</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">配镜中</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">开票</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
      <el-col :span="3" style="height: 60px;line-height: 60px;display: flex; align-items: center;  justify-content: center;">
        <div class=" header_right2">
          <i class="el-icon-search" />
        </div>
      </el-col>
    </el-row>

    <el-row v-else>
      <el-col :span="9">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">今日收银</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">配镜中</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-2">选项2</el-menu-item>
              <el-menu-item index="1-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">开票</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项1</el-menu-item>
              <el-menu-item index="3-4-2">选项2</el-menu-item>
              <el-menu-item index="3-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">订单管理</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
            <el-submenu index="4-4">
              <template slot="title">选项4</template>
              <el-menu-item index="4-4-1">选项1</el-menu-item>
              <el-menu-item index="4-4-2">选项2</el-menu-item>
              <el-menu-item index="4-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        />
      </el-col>
      <el-col :span="9">
        <div class="header_right">
          <el-input placeholder=" 订单号或员工信息查询" prefix-icon="el-icon-search" />
          <svg-icon icon-class="money" @click="FastPayment" />
          <i class="el-icon-s-cooperation" />
          <button>开单</button>
        </div>
      </el-col>
    </el-row>-->

    <el-row v-else-if="$route.name!='UnfoldPresentate'" class="el-row-client ">
      <el-col :span="9">
        <el-menu class="el-menu_all" :default-active="activeIndex" mode="horizontal" @select="handleSelect">

          <div class="header_right2_left">
            <p>客户预约</p>
            <div class=" header_right2">
              <i class="el-icon-bell" />
            </div>
          </div>
          <div />
        </el-menu>
      </el-col>

      <el-col :span="9">
        <el-menu class="el-menu_all" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <div class="">
            <div class="block">
              <i class="el-icon-arrow-left" />
              <el-date-picker
                v-model="value2"

                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions"
              />
              <i class="el-icon-arrow-right" />
            </div>
          </div>
        </el-menu>
      </el-col>

      <el-col :span="3" style="height: 60px;line-height: 60px;display: flex; align-items: center;  justify-content: space-around;">
        <div class=" header_right2">
          <i class="el-icon-search" />
        </div>
        <div class=" header_right2">
          <i class="el-icon-plus" />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import ScrollPane from './ScrollPane'
import path from 'path'

export default {
  components: { },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [], activeIndex: '1',
      activeIndex2: '1'

    }
  },
  computed: {

    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    routes() {
      return this.$store.state.permission.routes
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    $route() {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  methods: {
    // 平台设置
    PlatformSet() {
      this.$router.push('/PlatformBind')
    },
    // 快速支付 显示隐藏
    FastPayment() {

    },
    isActive(route) {
      return route.path === this.$route.path
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags() {
      const affixTags = this.affixTags = this.filterAffixTags(this.routes)
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('tagsView/addVisitedView', tag)
        }
      }
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
      return false
    }

  }
}
</script>

      <style lang="scss" scoped>
        .el-row-client{
          display: flex;
          justify-content: space-between;
          &>div{

          }
        }
        .el-menu_all::v-deep{
          position: relative;
          .el-date-picker{
           margin-left: 150px!important;
          }
          .el-input__icon {display: none }
          .el-input--medium .el-input__inner{
            border: none;
            text-align: center;
          }
          line-height: 60px;
          justify-content: space-around;
          .header_right2_left{
            display: flex;
            width: 200px;
            justify-content: space-between;
          }

        }

        .header_right2{
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 12px;
          background-color: rgba(247, 247, 247, 1);
          text-align: center;
          margin: auto 0;
        }
        .el-row{
          p{
            line-height: 60px;
          }
        }
        .header{
          &>div{
            box-shadow: 0 1px 5px rgba(0,21,41,.08);
            padding-top: 10px;
            height:77px;
            background-color:#Fff;
          }


          .el-menu.el-menu--horizontal{
            border-bottom:none
          }
      .el-row{
        &>div{
          &:nth-of-type(2){
            float: right;
          }

        }
      }
        .header_right{
          height: 40px;
          padding-top: 15px;
          width:600px;
          display: flex;
          justify-content: space-around;
          svg{
            border-radius: 2px solid;
            font-size: 24px;
            margin-top: 4px;
          }
          i{
            font-size: 30px;
            background-color: rgba(255, 255, 255, 0);
            text-align: center;
          }
          button{
            width: 114px;
            height: 30px;
            border-radius: 6px;
            background-color: rgba(0, 0, 0, 1);
            font-size: 16px;
            text-align: center;
            font-family: Roboto;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0);
          }
          .el-input{
            width: 299px;
            line-height:30px;
            height: 30px;
            border-radius: 6px;
            background-color: rgba(247, 247, 247, 1);
            color: rgba(215, 211, 211, 1);
            font-size: 14px;
            text-align: left;
            font-family: Roboto;
          }
        }
        }

      </style>

      <style lang="scss">
      //reset element css of el-icon-close

      </style>
