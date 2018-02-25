<template>
  <div id="home">
    <div v-show="router=='/home'">
    <van-row class="entrance">
      <van-col span="8" class="flowGift" ><div @click="flowGiftEvent" >流量赠送</div></van-col>
      <van-col span="8" class="flowGiftRecord"  >
          <router-link to="/home/flowGiftRecord" style="display:block;">赠送记录</router-link>
      </van-col>
      <van-col span="8" class="myFans">我的粉丝</van-col>
    </van-row>
    <van-row class="entrance">
      <van-col span="8" class="renew">流量卡续费</van-col>
      <van-col span="8" class="equipmentMsg ">设备信息</van-col>
      <van-col span="8" class="setUp">设置</van-col>
    </van-row>
    <van-row class="balance">
      <van-col span="12" class="balanceNum">
          流量余额:￥{{balance}}
      </van-col>
      <van-col span="12"  style="text-align: right">
           <div @click="renderFlowGift">
            <div class="render" ></div>
            点击刷新</div>
      </van-col>
    </van-row>
    <div class="flowWrap" v-for="(item,index) in flowMsgArr">
    <van-row  >

        <van-col span="12" class="tel">
          <div>{{item.tel}}</div>
          <div>消费金额{{item.money}}元</div>
        </van-col>

        <van-col span="11" class="rank h">{{item.rankId}}</van-col>

    </van-row>
    <van-row   style="margin-top:5px; ">

      <van-col span="7" class="cancel h"><div @click="cancelFlowGive(item,index)">取消赠送</div></van-col>
      <van-col span="4" class="more h"><div @click="chooseMore">更多<br>套餐</div></van-col>

      <van-col span="11" class="give h" >
        <div @click="sendFlowGift(item,index)">
        <div>赠送{{mealList[item.meal].flow}}</div>
        <div class="mini">￥{{mealList[item.meal].money}}</div>
        </div>
      </van-col>

    </van-row>
    </div>
    </div>
      <router-view></router-view>
    <!--流量赠送-->
    <van-popup v-model="flowGiftCode" style="background: none;">
        <img :src="flowGiftCodeSrc" style="width:100%;">
    </van-popup>
    <!--更多流量赠送选择-->
    <van-actionsheet v-model="moreFlowGiftCode" title=" " >
      <van-row style="padding-top:15px;padding-left: 15px; ">
        <van-col span="7" v-for="(item,index) in mealList" :key="index" class="moreFlowWrap">
          <div @click="sendMoreFlowGift(item,index)">
            <div>赠送{{item.flow}}</div>
            <div class="mini">￥{{item.money}}</div>
          </div>
        </van-col>
      </van-row>

    </van-actionsheet>

  </div>
</template>

<script>
  import { Toast,Dialog  } from 'vant';
  export default {
    name: 'Home',
    data() {
      return {
          flowGiftCode:false,
           moreFlowGiftCode:false,
          flowGiftCodeSrc:'',
          balance:5823.00,
          mealList:[
            {
              flow:30,
              money:3,
            },
            {
              flow:50,
              money:5,
            },
            {
              flow:100,
              money:10,
            },
            {
              flow:200,
              money:20,
            },
            {
              flow:300,
              money:30,
            },
          ],

          flowMsgArr:[
            {
              tel:'13810307869(移动)',
              money:378,
              rankId:"A299",
              meal:1,
            },
            {
              tel:'13810307869(电信)',
              money:378,
              rankId:"A108",
              meal:4,
            },
          ],
      }
    },
    computed: {
      router(){
        return this.$route.path;
      },
    },
    methods: {
      flowGiftEvent(){
          this.flowGiftCodeSrc='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519582917235&di=3b4cc24133a3c3ffd485d6adc6f60eea&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7aec54e736d12f2e127a575b44c2d5628535688a.jpg';
          this.flowGiftCode=true;
      },
      renderFlowGift(){
        //todo 获取后台数据,顺序后台控制
        this.flowMsgArr.push({
          tel:'13110307869(移动)',
          money:278,
          rankId:"B299",
          meal:0,
        },)
        Toast({
          message:'新增流量申请1个',
          position:'top',
        })
      },
      cancelFlowGive(item,index){
        Dialog.confirm({
          message: '是否确认要取消赠送流量'
        }).then(() => {
          // on confirm
          this.flowMsgArr.splice(index,1);
          Toast({
            message:'取消成功',
            position:'top',
          })
        }).catch(() => {
          // on cancel
        });
      },
      sendFlowGift(item,index){
        //todo 获取赠送是否成功的后台数据
        Dialog.confirm({
          message: '是否确认要赠送流量'+this.mealList[item.meal].flow+'M'
        }).then(() => {
          // on confirm
          this.flowMsgArr.splice(index,1);
          Toast({
            message:'赠送成功',
            position:'top',
          })
        }).catch(() => {
          // on cancel
        });
      },
      sendMoreFlowGift(item,index){
        //todo 获取赠送是否成功的后台数据
        Dialog.confirm({
          message: '是否确认要赠送流量'+item.flow+'M'
        }).then(() => {
          // on confirm
          //todo：需要通过id关联起来
           this.flowMsgArr.splice(index,1);
           Toast({
            message:'赠送成功',
            position:'top',
          });
          this.moreFlowGiftCode=false;
        }).catch(() => {
          // on cancel
        });
      },
      chooseMore(){
         this.moreFlowGiftCode=true;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
 #home{
   @import "../../static/css/main.scss";
   $topVal:35px;

   .moreFlowWrap{
     text-align: center;
     font-size:32px;/*px*/
     .mini{
       font-size:26px;/*px*/
     }
     padding: 5px 5px;
     margin-right: 15px;
     background: #9bbb59;
     color:white;
     margin-bottom: 15px;
   }
   .entrance{
     background-color: white;
     border-top:2px solid $borderColor ;
     &>.van-col{
       height: 180px;
       border-right:1px solid $borderColor ;
       border-bottom:1px solid $borderColor ;
       text-align: center;
       line-height: 300px;
     }
   }
   .flowGift{
      background: url("../../static/images/u176.png") no-repeat center $topVal;
     background-size:30% ;
   }
   .flowGiftRecord{
     background: url("../../static/images/u198.png") no-repeat center $topVal;
     background-size:30% ;
   }
   .myFans{
     border-right:none !important; ;

     background: url("../../static/images/u200.png") no-repeat center  $topVal;
     background-size:30% ;
   }
   .renew{
     background: url("../../static/images/u202.png") no-repeat center  $topVal;
     background-size:30% ;
   }
   .equipmentMsg{
     background: url("../../static/images/u204.png") no-repeat center  $topVal;
     background-size:30% ;
   }
   .setUp{
     border-right:none !important;
     background: url("../../static/images/u206.png") no-repeat center  $topVal;
     background-size:30% ;
   }
   .balance{
     padding: 25px;
     background: $themeBackgroundColor;
     .balanceNum{
       color:$themeColor
     }
     .render{
       width: 50px;
       height: 50px;
       display: inline-block;
       background: url("../../static/images/u208.png") no-repeat;
       background-size:100% ;
       margin-bottom:-13px ;
     }






   }
   .flowWrap{
     background: white;
     padding:25px 0 ;
     margin-bottom: 15px;
     .rank{
       font-size:36px !important;/*px*/
       line-height: 100px;
       background-color: #558ed5;}
     .cancel{
       background: #e46c0a;
       margin-left:15px ;
       margin-right:8px ;
       line-height: 100px;
     }
     .more{
       background: #9bbb59;
       margin-left:5px ;
       margin-right:12px ;
       padding-top:10px ;
     }
     .give{
       background: #9bbb59;
       padding-top:15px ;
       .mini{
         font-size:26px;/*px*/
       }
     }
     .tel{
       margin-left:15px ;
       margin-right:-5px ;
       font-size:28px;/*px*/
       padding-left: 15px;
       padding-top:5px ;
     }
     .h{
       height: 100px;
       text-align: center;
       font-size:28px;/*px*/
       color:white;
     }
   }

 }
</style>
<style lang="scss" type="text/scss">


</style>
