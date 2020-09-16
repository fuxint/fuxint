<template>
  <div class="voucher">
    <div class="voucher_header">
      <el-row>
        <el-col :span="3" class="white">单据</el-col>
        <el-col :span="18">
          <div class="avatar">
            <div><el-avatar size="medium" :src="1" /></div>
            <div><el-avatar size="medium" :src="1" /></div>
            <div v-if="ClientPeople==''" class="pointer" @click="OpenNewUser"><el-avatar size="medium" :src="1" class="newUser">新</el-avatar></div>
            <div v-if="ClientPeople&&ClientPeople!=''" class="avatar_new" @click="CheckMembersInfo"><el-avatar size="medium" :src="1" /><span>{{ ClientPeople.name }}</span><i class="el-icon-circle-close" @click="DelNewClient()" /></div>
          </div>
          <div class="open_member  ">
            <i class="el-icon-trophy" />
            <span class="white fz4">选择会员</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="voucher_right">
            <el-popover
              v-model="voucherMore"
              placement="bottom"
              width="200"
              trigger="click"
            >
              <div class="moreList">
                <ul>
                  <li @click="OnlineVrification">
                    <i class="el-icon-lollipop block" />
                    <span class="fz4 block">网店核销</span>
                  </li>
                  <li>
                    <i class="el-icon-lollipop block" />
                    <span class="fz4 block">网店核销网店核销</span>
                  </li>
                </ul>
              </div>
              <i slot="reference" class="el-icon-more" @click="adhibitionMore" />
            </el-popover>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="voucher_content">
      <div />
      <ul>
        <!--               <li class="cursor">-->
        <!--                 <p class="fz4">BOSS框架-板材      x1         </p>-->
        <!--                 <span class="fz6">￥ 4000.00</span>-->
        <!--               </li>-->
        <li class="cursor">
          <p class="fz4">BOSS框架-板材      x1         </p>
          <span class="fz6">￥ 4000.00</span>
        </li>

        <li class="cursor">
          <p>Num</p>
          <span class="fz6">1</span>
        </li>

        <li class="cursor">
          <p>验光单
            <el-date-picker
              type="date"
              placeholder="选择日期"
            />
          </p>

        </li>

        <el-table
          :data="tableData"
          border
          style="width: 90%;margin-top: 20px"
        >
          <el-table-column
            prop="date"
            width="70"
            label=""
          />
          <el-table-column
            prop="name"
            width="70"
            label="姓名"
          />
          <el-table-column
            prop="address"
            width="70"
            label="地址"
          />
          <el-table-column
            prop="address"
            width="70"
            label="地址"
          />
          <el-table-column
            prop="address"
            width="70"
            label="地址"
          /> <el-table-column
            prop="address"
            width="70"
            label="地址"
          /> <el-table-column
            prop="address"
            width="72"
            label="地址"
          />
        </el-table>

        <li class="cursor glassesList">
          <div class="fz4">
            <p>镜片_蔡司_数码型1.67钻立方防蓝光膜_定制:4780</p>
            <p>
              定制_0_s:-3.00 -3.00 180 R - Num:-1</p>   </div>
          <span class="fz6">￥ 4000.00</span>
        </li>

        <li class="cursor glassesList">
          <div class="fz4">
            <p>镜片_蔡司_数码型1.67钻立方防蓝光膜_定制:4780</p>
            <p>
              定制_0_s:-3.00 -3.00 180 R - Num:-1</p>   </div>
          <span class="fz6">￥ 4000.00</span>
        </li>

        <li class="person_voucher" @click="AddSaler">
          <div v-if="SalerList.length>0" class="fz4 person_voucher2 cursor">
            <span class="block"><img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="">李磊</span>
            <p>100%</p>
          </div>
          <div v-else class="fz4 person_voucher2  cursor2 cursor" @click="ChooseSalesman">
            <span class="block"> 暂未设置销售人员</span>
          </div>
        </li>

      </ul>

    </div>
    <div class="footer_voucher">
      <el-input
        placeholder="单据备注"
      >
        <i slot="prefix" class="el-input__icon el-icon-edit" />
      </el-input>
      <el-row>
        <el-col :span="12"><button class="fz4 stay">挂单</button></el-col>
        <el-col :span="12"><button class="fz4 settle">结账   ￥ 4000.00</button></el-col>
      </el-row>
    </div>

    <div class="VerificationAudit_box">
      <el-dialog :before-close="handleClose" width="25%" :visible.sync="VerificationAudit">
        <p slot="title" class="title">网店订单核销</p>
        <div class="VerificationAudit">
          <span class="block">可以对团购，网络订单等进行操作...</span>
          <el-input v-model="orderVerification" placeholder="请输入或扫描核销码" />
          <button class="block" @click="affirmVerification">确认</button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Voucher',
  data() {
    return {
      SalerList: '', // 銷售人員
      ClientPeople: {}, // 新添加用戶
      orderVerification: '',
      voucherMore: false,
      VerificationAudit: false, // 网店订单核销
      tableData: [{
        type: '左眼',
        name: '王小虎',
        address: '1231'
      }, {
        type: '左眼',
        name: '王小虎',
        address: '121'
      }]
    }
  },
  mounted() {
    this.ClientPeople = this.$store.state.client.ClientPeople
    console.log(this.$store.state)
  },
  methods: {
    //    選擇銷售人員
    ChooseSalesman() {

    },
    handleClose() {

    },
    //    开通新用户
    OpenNewUser() {
      this.$store.dispatch('client/ChangeClient', true)
    },
    // 删除新用户
    DelNewClient() {
      this.$confirm('是否确认删除新用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('client/DelNewClient', true)
        this.ClientPeople = this.$store.state.client.ClientPeople
        console.log(this.ClientPeople)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 查看会员信息
    CheckMembersInfo() {

    },
    adhibitionMore() {
      this.voucherMore != this.voucherMore
    },
    // 网店订单核销
    OnlineVrification() {
      this.VerificationAudit = true
    },
    // 确认核销码！
    affirmVerification() {
      if (this.orderVerification == '') {
        this.$message.error('请输入核销码！')
      }
    },
    // 显示添加销售或者比例人员
    AddSaler() {

    }

  }
}
</script>

<style scoped lang="scss">
  .fz4{
    color: #00DBFF;
  }
  .glassesList{
    min-height: 80px;
    margin-bottom: 30px;
    &>div{
      font-size: 16px;
        width:80%;
      p{
        display: block;
        text-align: left;
        &:nth-of-type(2){
          color: #010101;
        }
      }
    }
  }
.footer_voucher{

  width: 100%;
  padding:0 20px;
  position: absolute;
  bottom:10px;
  button{
    width: 100%;
    height: 60px;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    border: none;
    &.settle{
      background: #00DBFF;
    }
    &.stay{
      background: #000 ;
    }

  }
  .el-input{
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-radius: 8px;
  }
}
  .voucher_content{
    text-align: center;
    margin: -20px 12px 10px 12px;

    /*line-height: 20px;*/
    /**/
    /*text-align: center;*/
    ul{border-radius: 6px;
      background: #fff;
      padding: 24px;
      .person_voucher2{
        p{
          color: #AAA6A6;
        }

        span{
          display: flex; img{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin:8px 10px 0 0;
        }
        }
      }
      .person_voucher{
        .cursor2{
          color: #000;
        }
        height: 40px;
        line-height: 40px;
        border-radius: 6px;
        margin-top: 15px;
        background-color: rgba(247, 247, 247, 1);
        div{
          padding:0 13px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          i{
            font-weight: 600;
          }
        }
      }
      li{
        justify-content: space-between;
        display: flex;
      height: 40px;
        line-height: 40px;

      }
    }
  }

  .moreList{
    cursor: pointer;
    min-height: 160px;
    ul{
      li{
        height: 40px;
        display: flex;
        overflow: hidden;
        .el-icon-lollipop {
          margin-right: 15px;
          font-size:20px;
          color: orangered;
        }
        span{
          text-align: center;
          display: inline-block;
          min-width: 60px;
        }
      }
    }
  }

.voucher{
  position: relative;
  height: 100vh;
  padding: 20px 20px 0 0;
  background-color: rgba(247, 247, 247, 1);
  .VerificationAudit_box::v-deep{
    .el-icon-close{
      color: #fff!important;
    }
    .el-dialog__headerbtn{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #666666;
    }
    .el-dialog__close{
      color: #fff;
    }
    .el-dialog{
      border-radius: 8px;
    }
  .el-dialog__body{
      padding:0 0 !important;
    }
  .title{
    text-align: center;
  }

.VerificationAudit{
  padding-bottom: 40px!important;

  button{
    margin: 0 auto;
    width: 80%;
    height: 40px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-family: Roboto;
    border: 1px solid rgba(215, 211, 211, 1);
  }
padding:0 30px;

  .el-input{
    height: 50px;
    line-height: 50px;
    display: block;
    width: 80%;
    margin:20px  auto 20px auto;
  }
  p,span{
    text-align: center;
    line-height: 30px;
  }

  span{
    color: #666666;
  }

}

  }
  .voucher_header{
    border-radius: 6px 6px 0px 0px;
    min-height: 100px;
    background: #000;
    padding-top: 10px;
    padding-left: 15px;
    .el-col-3{
      line-height: 40px;

    }
    .el-col-18{
      .avatar{
        .avatar_new{
          display: flex;
          width: 228px;
          height: 39px;
          line-height: 39px;
          border-radius: 6px;
          background-color: rgba(249, 243, 8, 0.84);
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          text-align: left;
          position: relative;
          .el-avatar{
            margin: 1px 5px;
          }
          .el-icon-circle-close{
            position: absolute;
            right: 5px;
            top: 10px;
            font-size: 18px;
          }
        }
        .newUser{
          color: #EE6060 ;
          font-weight: 600;
        }
        float: left;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
       .el-avatar{
        display: block;
         margin-right: 10px;
        }
      }
      .open_member{
        i{
          color: yellow;
          margin-right: 5px;
        }
        float: right;
        width: 113px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 6px;
        background-color: rgba(217, 217, 217, 0.39);
        color: rgba(16, 16, 16, 1);
      }

    }

    .voucher_right{
      width: 60px;
      float: right;

      i{
        text-align: center;
        font-size: 24px;
        color: #fff;
      }
    }
  }

}
</style>
