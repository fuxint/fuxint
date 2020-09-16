<template>
    <div class="UnfoldPresentate">
          <div class="UnfoldPresentate_Head">
            <span> 产品和项目介绍 </span>
            <div>
              <svg-icon icon-class="shopping" />
            </div>
          </div>

      <div  class="UnfoldPresentate_Con">

      </div>
    </div>
</template>

<script>
    export default {
        name: "UnfoldPresentate"
    }
</script>

<style scoped lang="scss">
.UnfoldPresentate{
  margin:10px 35px;
  .UnfoldPresentate_Head{
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    span{
      font-size: 20px;
    }
    div{
      svg{
      color:#101010 ;
      }
      line-height: 50px;
      text-align: center;
      width: 50px;
      height: 50px;
      background-color: rgba(247, 247, 247, 1);
      border-radius: 50%;
    }
  }
}
</style>
