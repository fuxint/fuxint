<template>
  <div class="display:flex">
    <el-row class="el-row-client ">
      <el-col :span="9">
        <el-menu class="el-menu_all" mode="horizontal">

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
        <el-menu class="el-menu_all" mode="horizontal">
          <div>
            <div class="topCenter">
              <i class="el-icon-arrow-left" />
              <el-input v-model="input" placeholder="请输入内容" />
              <i class="el-icon-arrow-right" />
            </div>
          </div>
        </el-menu>
      </el-col>

      <el-col :span="3" style="height: 60px;line-height: 60px;display: flex; align-items: center;  justify-content: space-around;">
        <div class=" header_right2" @click="SearchAppoint=true">
          <i class="el-icon-search" />
        </div>
        <div class=" header_right2">
          <i class="el-icon-plus" />
        </div>
      </el-col>
    </el-row>
    <div class="BookingOrderBox">
      <div class="BookingOrder">
        <div>
          <ul>
            <li @click="ModifyReservatInfo">
              <img src="../../static/image/menu1.png" alt="">
              <div>
                <p>曹雪凝</p>
                <span>门店店长 (31231)</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <ol ref="systemForm" @scroll="sysHandleScroll()">
              <li v-for="item of 12"> <div>1</div></li>
            </ol>
          </div>
          <ul ref="externalForm" @scroll="exterHandleScroll()">
            <li v-for="item of 11">
              <div>
                <div>
                  <i class="el-icon-trophy" /><span>张三丰</span>
                </div>
                <div>
                  <span>15888356226</span><i class="el-icon-document-copy" />
                </div>
                <p>配镜</p>
                <span>备注：</span>
              </div>
            </li>
            <li>
              <div style="background: #fff" @click="AddBooking" />
            </li>
          </ul>
        </div>
      </div>
      <div class="filter_classfiy">
        <ul>
          <li v-for="(item,index) of classfiyList" :key="index" class="fz2 cursor">
            <span class="block" :style="{'background':item.color}" />
            <p>{{ item.title }}({{ item.num+'0:00' }})</p>
          </li>
        </ul>
        <div>
          <i class="el-icon-refresh" />
        </div>
      </div>
    </div>

    <el-dialog
      top="0"
      class="SearchAppointBox"
      title="提示"
      width="100vw"
      modal="true"
      :visible.sync="SearchAppoint"
    >
      <div class="dialog SearchAppoint">
        <div>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容">
              <template><el-button slot="prepend" icon="el-icon-search" /></template>
              <template slot="append">搜索</template>
            </el-input>
          </div>
        </div>
        <div class="bookorderSearch">
          <el-dialog top="160px" width="750px" modal="false" title="收货地址" :visible.sync="SearchAppoint">
            <div class="bookorderSearchTop">
              <span>2020-07-08 今天</span>
              <i class="el-icon-error" />
            </div>
            <div>
              <ul>
                <li>
                  <span>13:00  </span>
                  <div>
                    <el-avatar size="14" :src="1313" />
                    <div>
                      <p>曹雪凝</p>
                      <span>门店店长 (31231)</span>
                    </div>

                    <div class="userBookOrder">
                      <span>张三丰    </span>
                      <span>30分钟</span>
                      <span>配镜</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-dialog>
        </div>
        <span @click="SearchAppoint=false">取消</span>
      </div>

    </el-dialog>

    <AddBooking />
    <ModifyReservatInfo />
    <NewMembersBooking />
    <ModificatTime />
    <SelectEmployee />
    <ChooseTimeAppoint></ChooseTimeAppoint>
  </div>

</template>

<script>
// NewMembersBooking 新增预约会员你      AddBooking添加预约    ModifyReservatInfo预约信息   ModificatTime编辑时长
// 选择员工SelectEmployee   ChooseTimeAppointment选择时间
import ChooseTimeAppoint from "@/views/BookingOrder/components/ChooseTimeAppoint";
import SelectEmployee from '@/views/BookingOrder/AddAppointment/SelectEmployee'
import ModificatTime from '@/views/BookingOrder/AddAppointment/ModificatTime'
import NewMembersBooking from '@/views/BookingOrder/AddAppointment/NewMembersBooking'
import AddBooking from '@/views/BookingOrder/components/AddBooking'
import ModifyReservatInfo from '@/views/BookingOrder/components/ModifyReservatInfo'
export default {
  name: 'Index',
  components: { SelectEmployee, ModifyReservatInfo, AddBooking, NewMembersBooking, ModificatTime, ChooseTimeAppoint },
  data() {
    return {
      SearchAppointList: false,
      SearchAppoint: false,
      classfiyList: [
        {
          status: 0,
          num: 12,
          color: '#FFCB01',
          title: '配送中'
        },
        {
          status: 1,
          num: 0,
          color: '#007AFF',
          title: '加工中'
        },
        {
          status: 0,
          num: 0,
          color: '#FFCB01',
          title: '配送中'
        },
        {
          status: 0,
          num: 0,
          color: '#FF3A30',
          title: '待结算'
        },
        {
          status: 0,
          num: 0,
          color: '#30FF6C ',
          title: '预约'
        },
        {
          status: 0,
          num: 0,
          color: '#D7D3D3 ',
          title: '已作废'
        }
      ]
    }
  },
  mounted() {
    this.$store.state.settings.tagsView = false
  },
  methods: {
    // 两个scroll同时滚动
    sysHandleScroll() {
      this.$refs.externalForm.scrollLeft = this.$refs.systemForm.scrollLeft
    },
    // 两个scroll同时滚动
    exterHandleScroll() {
      this.$refs.systemForm.scrollLeft = this.$refs.externalForm.scrollLeft
    },
    // 搜索预约
    SearchAppointment() {

    },
    // 修改预约信息
    ModifyReservatInfo() {

    },
    // 添加预约
    AddBooking() {

    }
  }
}
</script>

<style scoped lang="scss">
  .bookorderSearch::v-deep{
    .el-dialog__body{
      padding: 0;
      border-radius: 6px;
    }
    ul{
      padding:18px 37px ;
      li{
        display: flex;
        span{
          display: block;
        }
        .userBookOrder{
          display: flex;
          margin-left: 80px;
          span{
            margin-right: 20px;
            &:nth-of-type(2){
              color: #00DBFF;
            }
          }
        }
        &>div{

          display: flex;
          div{
            p{
              font-size: 16px;
              color: #000000;
            }
            span{
              line-height:30px;
            }
            margin-left:10px;
          }
        }
        &>span{
          line-height: 60px;
          width: 140px;
          height: 60px;
          text-align: center;
          border-right:2px solid #00DBFF;
          margin-right: 30px;
        }
      }
    }
    .bookorderSearchTop{
      font-size: 16px;
      position: relative;
      padding:18px 37px ;
      background: #F7F7F7;
      &>span{
        color: rgba(251, 58, 95, 0.9);
      }
      i{
        position: absolute;
        right: 10px;
        font-size: 20px;
        color: #666666;

      }
    }
  }

  .SearchAppointListBox::v-deep{

    .SearchAppointList{

    }
  }
  .SearchAppoint::v-deep{
    .el-input__inner{
      width: 450px!important;
    }
    &>span{
      display: block;
      right: 40px;
      top:50px;
      position: absolute;
    }
    width: 570px  ;
    height: 70px;
    margin:  auto;
  }
  .SearchAppointBox::v-deep{
    background: transparent;
    margin: auto;

    .el-dialog__header{
      display: none;
    }
    .el-input-group__prepend{
      background: #fff;
      border-right: 0px solid #fff;
    }
    .el-input-group__append{
      color: #fff;
      background: #000;
    }
  }

  .el-menu.el-menu--horizontal{
    border:none;
  }
  .el-row-client{
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .el-menu_all::v-deep{
.topCenter{
  display: flex;
  i{
    margin: auto 0;
  }
  .el-input--medium,.el-input__inner,el-input {
    width: 180px!important;
  }
}
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

  .BookingOrderBox{
  padding-top:20px;
    .BookingOrder{
      display: flex;
     // flex-wrap: wrap;
      &>div{
        &:nth-of-type(1){
          margin-top: 20px;
          ul{
            li{
              border-radius: 5px;
              width: 225px;
              height: 130px;
              background-color: rgba(247, 247, 247, 1);
              text-align: center;
              border: 1px dashed rgba(236, 236, 236, 1);
              display: flex;
              img{
                display: block;
                margin: auto 14px;
                width: 42px;
                height: 44px;
              }
              div{
                text-align: left;
                padding-top:40px;
               span{
                 display: block;
                 line-height: 40px;
                 color: #666666 ;
                 font-size: 14px;
               }
              }
            }
          }
          height: 100vh;
          width:240px;
          border-right: 1px solid #ccc;
        }
        &:nth-of-type(2){
          &>div{
            ol{

              overflow-x: auto;
              displey:-webkit-flex; display: flex; -webkit-flex-flow:row nowrap;
              li {
                margin: 0 10px;
                width:  140px;
                &>div {
                  width:  140px;
                }
              }
            }
          }
          ul{
            &::-webkit-scrollbar{
              display: none;
            }
            overflow-x: hidden;
             displey:-webkit-flex; display: flex; -webkit-flex-flow:row nowrap;
            li{
              margin: 0 10px;
              width:  140px;
              &>div{
                font-size: 14px;
                padding: 5px;
                width: 140px;
                height: 130px;
                background-color: rgba(227, 227, 227, 1);
                border: 1px dashed rgba(236, 236, 236, 1);
                line-height: 30px;
                color: #939292;
                &>div{
                  &:nth-of-type(1){
                    display: flex;
                    i{
                      color: #FFC400;
                      margin: auto 5px auto 0;
                    }
                  }
                  &:nth-of-type(2){
                    display: flex;
                    justify-content: space-between;
                    i{
                    margin: auto 5px auto 0;
                      font-size: 18px;
                      color: #101010;
                    }

                  }
                }
              }
            }
          }
          height: 100vh;
          min-width:800px;
          max-width: 1800px;
         // width:1400px;
        }
      }

    }
  .filter_classfiy{
    color: #fff;
    right: 20px;
    bottom: 86px;
    position: fixed;
    width:600px;
    height: 34px;
    line-height: 34px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.82);
    display: flex;
    justify-content: space-between;
    div{
      width:80px;
      font-size: 30px;
      text-align: center;
    }
    ul{
      padding-right: 10px;
      border-right: 1px solid rgba(255, 255, 255, 1);;
      display: flex;
      justify-content: space-around;
      width:600px;
      li{
        margin-left: 10px;
        display: flex;
        &>span{
          width: 13px;
          height: 13px;
          border-radius: 50%;
          margin:  auto 5px;
        }
      }

    }
  }
  }

</style>
