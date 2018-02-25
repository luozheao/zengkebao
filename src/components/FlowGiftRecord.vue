<template>
  <div id="flowGiftRecord">

    <div v-show="router=='/home/flowGiftRecord'">
    <van-row  class="dateChoose">
      <van-col span="5">
        <div @click="isShowDateChoose=true">
          更多<br>日期
        </div>
      </van-col>
      <van-col span="5">
         <div :class="{'active':active==1}" @click="active=1">
           11-19<br><span>20笔</span>
         </div>
      </van-col>
      <van-col span="5">
        <div :class="{'active':active==2}" @click="active=2">
          11-29<br><span>20笔</span>
        </div>
      </van-col>
      <van-col span="5">
        <div :class="{'active':active==3}" @click="active=3">
          11-30<br><span>20笔</span>
        </div>
      </van-col>
      <van-col span="4" class="toBack">
        <div @click="toBack">
          <van-icon name="arrow-left" />返回
        </div>
      </van-col>
    </van-row>

    <div v-for="item,index in msgArr" :key="index" class="msgWrap">
      <van-row>
          <van-col span="20">
            <div class="tel">{{item.tel}}</div>
            <div class="date">{{item.date}}</div>
            <div class="money">消费金额:￥{{item.money}}</div>
          </van-col>
          <van-col span="4">
             <div class="flowType">{{item.flowType}}</div>
             <div class="flow">{{item.flow}}M</div>
          </van-col>
      </van-row>
    </div>

    <van-row  class="btnArea">
      <van-col span="8">
        <div @click="isShowTelSearch=true">
           <div class="search h"></div>
           查询
        </div>
      </van-col>
      <van-col span="8">
        <router-link to="/home/flowGiftRecord/report" style="display:block;">
          <div class="report h"></div>
          统计报告
         </router-link>

      </van-col>
      <van-col span="8">
          <div>
            <div class="buyFlow h"></div>
             流量充值
          </div>
      </van-col>
    </van-row>
    </div>
    <router-view></router-view>

     <!--更多日期弹窗-->
    <van-actionsheet v-model="isShowDateChoose" title=" " >

      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :max-date="maxDate"
        @confirm="confirmEvent"
        @cancel="isShowDateChoose=false"
      />

    </van-actionsheet>
     <!--查询手机号-->
    <van-actionsheet v-model="isShowTelSearch" title=" " >
      <van-search
        v-model="searchValue"
        show-action
        @search="onSearch"
        type="number"
        maxlength="11"
        placeholder="请输入要查询的手机号码"
        style="padding:85px 15px 150px 15px"
      >
        <van-button slot="action" @click="onSearch"  class="serachValue"  >查询</van-button>
      </van-search>
    </van-actionsheet>
  </div>
</template>

<script>

  export default {
    name: 'FlowGiftRecord',
    data() {
      return {
          msgArr:[
            {
              tel:13786444747,
              date:'2017-11-13 16:01:01',
              money:'199.00',
              flow:50,
              flowType:'移动'
            },
            {
              tel:13786444747,
              date:'2017-11-13 18:01:01',
              money:'199.00',
              flow:50,
              flowType:'联通'
            },
            {
              tel:13786444747,
              date:'2017-12-13 16:01:01',
              money:'199.00',
              flow:50,
              flowType:'电信'
            },
          ],
          active:1,
          isShowDateChoose:false,
          isShowTelSearch:false,
          maxDate: new Date(),
          currentDate: new Date(),
        searchValue:'',
      }
    },
    computed: {

      router(){

        return this.$route.path;
      },
    },
    methods: {
      toBack(){
        this.$router.back(-1);
      },
      confirmEvent(value){
        //todo:从后台请求数据，value为选中的日期
        console.log(value);
        this.isShowDateChoose=false;
      },
      onSearch(){
        //todo:返回搜索结果
        this.isShowTelSearch=false;
      },
    },
    mounted(){
      console.log(this.router);
    },
  }
</script>

<style scoped lang="scss" type="text/scss">
#flowGiftRecord{
  @import "../../static/css/main.scss";
  .dateChoose{
     background: white;
     height: 85px;
     border-top:1px solid $borderColor;
     border-bottom:1px solid $borderColor;

    .active{
      background: $themeColor;
      color:white;
      span{
        color:white !important;
      }
      border-radius:10px ;

    }
     .van-col{
       text-align: center;
       border-right: 2px dashed #e4e4e4;
       height: 100%;
       div{
         height: 100%;
         padding-top: 10px;
       }
       span{
         color:#949494;
         font-size: 22px;/*px*/
       }
     }
     .toBack{
      line-height: 75px;
    }

  }
  .msgWrap{
    padding: 25px 35px;
    margin-top:15px ;
    background: white;
    .tel{
      font-size:30px;/*px*/
    }
    .date{
      margin-top:15px;
      color: #949494;
      font-size:24px;/*px*/
    }
    .money{
      color:white;
      background: $themeColor;
      width:45%;
      padding: 5px 15px;
      margin-top:25px;
      font-size:22px;/*px*/
    }
    .flowType{
      font-size:22px;/*px*/
      color:$themeColor;
      margin-top:25px ;
      text-align: center;
    }
    .flow{
      font-size:42px;/*px*/
      color:$themeColor;
      text-align: center;
    }
  }
   .btnArea{
     background: white;
     width: 100%;
     position: fixed;
    bottom: 0;
     border-top:1px solid $borderColor ;
    .van-col{
     height: 85px;
     text-align: center;
      .search{
        background: url("../../static/images/u902.png") no-repeat;

      }

      .report{
        background: url("../../static/images/u907.png") no-repeat;

      }
      .buyFlow{
        background: url("../../static/images/u912.png") no-repeat;

      }
      .h{
        width: 30px;
        height: 30px;
        background-size:100%;
        margin: 10px auto 5px;
      }
    }
  }

   .serachValue{
      margin-left: 25px;
      background: $themeColor;
      color: white;
     border-radius: 10px;
     height: 80px;
   }
}
</style>
<style lang="scss" type="text/scss">

</style>
