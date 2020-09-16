<template>
  <div class="ReservatList">
    <ul>
      <li v-for="item of ReservatList">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReservatList',
  data() {
    return {
      ReservatList: [
        '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光', '验光'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.ReservatList{
  margin-left: 23px;
  ul{
    margin-top: 30px;
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    li{
      margin-top: 17px;
      background: #fff;
      margin-right: 25px;
      width: 200px;
      height: 100px;
      line-height:  100px;
      border-radius: 6px;
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      text-align: center;
      box-shadow: 0px 0px 3px 0px rgba(236, 236, 236, 1);
    }
  }
}
</style>
