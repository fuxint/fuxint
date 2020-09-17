<template>
  <div class="MemberOptometryList">
    <div class="MemberOptometryList_top">会员验光单</div>
    <div class="MemberOptometryListCon">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">框架处方</el-radio-button>
        <el-radio-button label="right">隐形处方</el-radio-button>
        <el-radio-button label="bottom">手动记录</el-radio-button>
      </el-radio-group>

      <div class="MemberOptometryListframe ">
            <p>验光记录</p>
            <div class="optometry">
                  <ul><li>验光时间： 2020-06-15</li><li>验光师：  李白</li> <li>来源：</li> <li>近用</li> </ul>
                   <div> 修改 </div>
            </div>

          <div class="optometryHis">
              <ul>
                <li></li>
                <li>球镜SPH</li>
                <li>柱镜CYL</li>
                <li>轴位Axis</li>
                <li>ADD</li>
                <li>瞳距PD</li>
                <li></li>
              </ul>
              <ul>
                <li>右眼</li>
                <li>-3.00</li>
                <li>-3.00</li>
                <li>180</li>
                <li>180</li>
                <li>180</li>
                <li></li>
              </ul>

            <ul>
              <li>左眼</li>
              <li>-3.75</li>
              <li>-3.75</li>
              <li>-3.75</li>
              <li>-3.75</li>
              <li></li>
               <li></li>
            </ul>
          </div>

        <div class="optometryImg">
              <span>验光单图片</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">

            <i  v-else  class="el-icon-picture" />
          </el-upload>
        </div>



      </div>
      <el-form ref="form" label-width="50px">
        <el-form-item label="备注">
          <el-input ></el-input>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>

<script>
  export default {
    name: "MemberModificate",
    data(){
      return{
        imageUrl:'',
        tabPosition: 'left'
      }
    }
  }
</script>

<style scoped lang="scss">
  .MemberOptometryList::v-deep{
    .el-form{
      margin-left: 0!important;
      .el-form-item__label{
        font-size: 16px;
      }
    }
    .MemberOptometryListCon{
      width: 980px;
      font-size: 14px;
      margin-left: 100px;
      .optometryImg{
        margin-bottom: 18px;
        margin-top: 60px;
        display: flex;
        &>span{
          margin-right: 16px;
          font-size: 16px;
        }

        .avatar-uploader{

          .el-upload{
            margin: auto;
          }
          width: 69px;
          height: 69px;
          background: rgba(244, 244, 244, 1);
          border-radius: 3px;
          display: flex;
          justify-content: center;

          i{
            display: block;
            color: #ABB7BC ;
            &:before{
              font-size: 30px;
           }
          }
        }
      }
      .MemberOptometryListframe{


          &>p{
              line-height: 60px;
              height: 60px;
              font-size:16px;
          }
        .optometryHis{
          border-radius: 4px;
          margin-bottom: 34px;
          margin-top: 20px;
          ul{
            width:590px;
            justify-content: space-between;
            li{
              width: 100px;
              text-align: center;
              height: 35px;
              line-height: 35px;
              border-right: 1px solid #F0ECEC;
              &:nth-last-of-type(1){
                border-right: none;
              }
            }
            display: flex;

            &:nth-of-type(1){
              font-weight: 600;
            }
            &:nth-of-type(1), &:nth-of-type(3){
              background: #F4F4F4;
            }
            &:nth-of-type(2),&:nth-of-type(3){
              color: #101010;
             li{
               &:nth-of-type(1){
                 font-weight: 600;
               }
             }
            }
          }
        }
        .optometry{
          font-weight: 600;
          div{
            margin: auto 0;
            width: 46px;
            height: 25px;
            line-height: 20px;
            border-radius: 7px;
            background-color: rgba(0, 176, 255, 1);
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            text-align: center;
            font-family: Roboto;
            border: 1px solid rgba(255, 255, 255, 0);
          }
          padding: 0 24px 0 6px;
          width: 980px;
          height: 40px;
          display: flex;
          justify-content: space-between;
          background-color: rgba(244, 244, 244, 1);
          ul{
            li{
              line-height:40px;
              margin-right: 50px;
            }
            display: flex;
          }
        }
      }
    }
    .el-form{
      margin-left: 90px;
    }
    width: 100%;
    min-height: 100vh;
    background: #fff;
    .MemberOptometryList_top{
      margin-bottom: 80px;
      font-size: 20px;
      padding-top: 20px;
      text-align: center;
      line-height: 100px;
      border-bottom: 1px solid #DFDEDE;
    }
  }
</style>
