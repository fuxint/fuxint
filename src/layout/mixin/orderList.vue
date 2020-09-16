<template>
  <div class="orderList">
    <el-row>
      <el-col v-for="(item,index) of orderList" :key="index">
        <el-card shadow="always" body-style="padding:10px">
          <ul>
            <li>{{ item.id }}</li>
            <li><i class="el-icon-user-solid" />{{ item.identity }}</li>
            <li><i class="el-icon-time" />{{ item.time }}12:30</li>
          </ul>
          <el-table
            border
            :data="item.tableData"
            style="width: 100%"
          >
            <el-table-column
              width="200px"
              label="名称"
            >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                <i class="el-icon-edit" />
              </template>
            </el-table-column>
            <el-table-column
              label="金额"
            >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
          </el-table>

          <ul>
            <li>合计</li>
            <li>
              <b>￥{{ item.priceAll }}</b>
            </li>
          </ul>

          <el-input
            v-model="item.remark"
            prefix-icon="el-icon-edit"
            placeholder="备注"
            clearable
          />
          <div class="cardFoot">
            <p>付款</p>
            <p>加工单提交</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data() {
    return {
      orderList: [
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '游客',
          priceAll: '4000.00',
          remark: '备注',
          type: '0'

        },
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '会员',
          priceAll: '4000.00',
          remark: '加急',
          type: '01'

        },
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '游客',
          priceAll: '4000.00',
          remark: '加急',
          type: '01'

        },
        {
          id: 1,
          title: new Date().toLocaleString(),
          tableData: [
            {
              name: '11111',
              price: 'haha1'
            },
            {
              name: '11111',
              price: 'haha1'
            }
          ],
          identity: '游客',
          priceAll: '400.00',
          remark: '备注',
          type: '01'

        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.orderList{
  padding:40px 20px;
  .el-table{
    height: 180px!important;
    font-size: 12px;
    .el-table::before{
      height: 0!important;
    }
  }
  .el-row{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .el-col{
      margin-bottom: 20px;
      width: 260px;
      margin-right: 20px;
    }
    .cardFoot{
      display: flex;
      justify-content: space-between;
      p{
        text-align: right;
        font-size: 14px;
        line-height: 60px;
        cursor: pointer;
        color: #00DBFF ;
      }
    }

    .el-input__inner{
      color: #F00!important;
    }
  .el-card::v-deep{
    border: none;
    height: 380px;
    .el-icon-edit:before{
      color: #666;
    }
    input{
      color: red;
    }
.has-gutter{
  display: none!important;
}
    ul{
      padding-left: 5px;
      &:nth-of-type(2){
        font-size: 12px;
        line-height: 24px;
        li{
          &:nth-of-type(2){
            text-align: right;
          }
        }

      }

      margin-top: 5px;
      margin-bottom: 20px ;
      display: flex;
      justify-content: space-between;
      li{
        .el-icon-user-solid:before{
          color: #666;
        }
        font-size: 14px;
        i{
          margin-right: 3px;
        }
        width: 33%;
        &:nth-of-type(3){
          margin-top: 2px;
         text-align: right;
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }

  }

}
</style>
