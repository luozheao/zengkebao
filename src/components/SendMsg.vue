<template>
  <div id="sendMsg">
    <van-cell-group>
      <van-cell   class="cellTitle">
        <template slot="title">
          <div  class="van-cell-txt" >短信余额：2323条&nbsp&nbsp <span class="d">短信充值</span></div>
        </template>
        <div @click="toBack">
          <van-icon slot="right-icon"   name="arrow-left"  />
          <div  style="display: block;float: right; margin-top: -3px;" >返回</div>
        </div>
      </van-cell>

       <van-cell class="sendMsgWrap">
         <van-row class="operWrap">
           <van-col span="6" >
             <van-radio :name="1" v-model="radio" class="t">普通短信</van-radio>
          </van-col>
           <van-col span="6" >
             <van-radio :name="2" v-model="radio" class="t">屏幕短信</van-radio>
           </van-col>
           <van-col span="12" >
               <div class="sendMsg"  @click="sendMsgEvent" style="margin-top:0;float:right;">确认发送</div>
           </van-col>
         </van-row>

       </van-cell>



    </van-cell-group>
    <br>

    <div :class="{'msgWrap':true,'active':active==index}" v-for="msg,index in msgArr"  @click="active=index">
      {{msg}}
     </div>

  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'SendMsg',
    data() {
      return {
        radio:1,
        active:0,
        msgArr:[
          "【荔苑】雪花快乐地飘，驯鹿飞快地跑，我将祝福系在鹿角上，赶在平安夜的钟声敲响前来到你身旁。愿我的真诚能温暖你的心房，愿你在新年里幸福安康",
          "【荔苑】冬至节气到，【荔苑】祝你健康平安，爱情甜蜜，家兴业旺，财源滚滚；祝你冬至快乐。"
        ]
      }
    },
    computed: {},
    methods: {
      toBack(){
        this.$router.back(-1);
      },
      sendMsgEvent(){
         this.$router.back(-1);
         //todo：后台发送
         Toast('信息发送成功！');
      },
    },
    mounted(){},
  }
</script>

<style scoped lang="scss" type="text/scss">
#sendMsg{
  @import "../../static/css/main.scss";
   .d{
     color: $themeColor;
   }
  .sendMsgWrap{
    height: 75px;
    background: white;
  }
  .t{
    padding: 5px 0;
    text-align: left;
    font-size:22px;/*px*/
    margin-top: 10px;
  }
  .msgWrap{
     background: white;
    padding: 15px;
    margin-bottom: 15px;
    font-size:22px;/*px*/
  }
  .active{
    border:1px solid $themeColor;
  }
}
</style>
<style lang="scss" type="text/scss">

</style>
