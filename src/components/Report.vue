<template>
  <div id="report">
    <van-cell-group style="padding-bottom: 15px;">
      <van-cell   class="cellTitle">
          <template slot="title">
             <div  class="van-cell-txt" >流量赠送统计</div>
          </template>
          <div @click="toBack">
          <van-icon slot="right-icon"  name="arrow-left"  />
          <div  style="display: block;float: right; margin-top: -3px;" >返回</div>
          </div>
       </van-cell>
      <van-cell  class="dateChoose" >
        <van-row>
          <van-col span="12">&nbsp;</van-col>
          <van-col span="6" :class="{'h':true, 'week':true,'active':active==1}" >
            <div @click="dateChooseEvent('week')">最近一周</div>
          </van-col>
          <van-col span="6" :class="{'h':true, 'month':true,'active':active==2}"  >
            <div @click="dateChooseEvent('month')">最近一个月</div>
          </van-col>
        </van-row>
      </van-cell>
      <van-row class="dateChooseWrap">
        <van-col span="8" style="padding-top: 10px">
           <div @click="chooseDate('start')">
             <div>开始日期</div>
             <div>{{startDate}}</div>
           </div>
        </van-col>
        <van-col span="8" class="zhi">
          至
        </van-col>
        <van-col span="8" style="padding-top: 10px">
          <div @click="chooseDate('end')">
          <div>结束日期</div>
            <div>{{endDate}}</div>
          </div>
        </van-col>
      </van-row>
      <van-button   bottom-action style="margin-top:15px;  "  class="btnCenter" @click="start">开始统计</van-button>

    </van-cell-group>

    <br>
    <van-cell-group>
      <van-cell title="赠送客户" value="85位" />
      <van-cell title="赠送套餐" value="89个" />
      <van-cell title="话费金额" value="￥1832.00" />
    </van-cell-group>
    <br>
    <van-cell-group>
      <van-cell title="移动" value="85个" />
      <van-cell title="联通" value="85个" />
      <van-cell title="电信" value="85个" />

    </van-cell-group>
<br>
    <van-cell-group>

      <van-cell   is-link value="前去充值" >
        <template slot="title">
          <div class="van-cell__text">可赠送流量余额：￥<span style="color:#ff9933;">3215.00</span> 元</div>
        </template>
      </van-cell>
    </van-cell-group>



    <!--日期弹窗-->
    <van-actionsheet v-model="isShowDateChoose" title=" " >

      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :max-date="maxDate"
        @confirm="confirmEvent"
        @cancel="isShowDateChoose=false"
      />

    </van-actionsheet>
  </div>
</template>

<script>

  export default {
    name: 'Report',
    data() {
      return {
        isShowDateChoose:false,
        maxDate: new Date(),
        currentDate: new Date(),
        active:1,
        status:'',
        startDate:'',
        endDate:'',
      }
    },
    computed: {},
    methods: {
      toBack(){
        this.$router.back(-1);
      },
      confirmEvent(value){
        let aa=this.getDate(value);
        if(this.status=='start'){
           this.startDate=aa;
        }else{
          this.endDate=aa;
        }
        this.isShowDateChoose=false;
      },
      getDate(value){
        return value.getFullYear()+"/"+(value.getMonth()+1)+'/'+value.getDate();
      },
      getWeek(){
        let date=new Date();
        let targetDate= new Date(date.getTime()-7*24*60*60*1000) ;
        this.startDate=this.getDate(targetDate);
        this.endDate=this.getDate(date);
      },
      getMonth(){
        let date=new Date();
        let targetDate= new Date(date.getTime()-30*24*60*60*1000) ;
        this.startDate=this.getDate(targetDate);
        this.endDate=this.getDate(date);
      },
      start(){},
      chooseDate(type){
        this.isShowDateChoose=true;
        this.status=type;
      },
      dateChooseEvent(type){
         if(type=='week'){
            this.active=1;
            this.getWeek();
         }else{
           this.active=2;
           this.getMonth();
         }
      }
    },
    mounted(){
      this.getWeek();

    },
  }
</script>

<style scoped lang="scss" type="text/scss">
#report{
  @import "../../static/css/main.scss";
 .van-cell-txt{
   border-left:10px solid  $themeColor;/*no*/
   padding-left: 15px;
 }
  .cellTitle{
    background: #f5f5f5;
    height: 55px;
    line-height: 55px;
  }
  .dateChooseWrap{
    height: 95px;
    border-top:1px solid $borderColor ;
    border-bottom:1px solid $borderColor ;
    .van-col{
      text-align: center;
    }
    .zhi{
      line-height: 95px;
    }
  }
  .dateChoose{
    height: 55px;
    line-height: 55px;
    background: white;
    .van-col{
      text-align: center;
    }
    .h{border:2px solid $borderColor }
    .week{
      border-right: none;
    }
    .active{
      color:$themeColor;
    }
    .month{}
  }
}
</style>
<style lang="scss" type="text/scss">
  #report{
    .van-cell__text{
      color: #aeaeae;
    }
  }

</style>
