<template>
  <div class="cashierDesk">

    <div>
      <DeliveyOrderList />
    </div>

    <div class="filter_classfiy">
      <ul>
        <li v-for="(item,index) of classfiyList" :key="index" class="fz2 cursor">
          <span class="block" :style="{'background':item.color}" />
          <p>{{ item.title }}({{ item.num }})</p>
        </li>

      </ul>
      <div>
        <i class="el-icon-refresh" />
      </div>
    </div>
    <CallRider />
  </div>

</template>

<script>
import CallRider from '@/views/DeliveryOrder/components/CallRider'
import DeliveyOrderList from '@/views/DeliveryOrder/components/DeliveyOrderList'
export default {
  name: 'Home',
  components: { DeliveyOrderList, CallRider },
  data() {
    return {
      list: null,
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
  }
}
</script>

<style lang="scss" scoped>
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
        margin-bottom: 15px;
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
</style>
