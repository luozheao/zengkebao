<template>
  <div id="myFans">
    <div v-show="router=='/home/myFans'">
    <van-cell-group>
     <van-cell   class="cellTitle">
      <template slot="title">
        <div  class="van-cell-txt" >流量赠送统计</div>
      </template>
      <div @click="toBack">
        <van-icon slot="right-icon"   name="arrow-left"  />
        <div  style="display: block;float: right; margin-top: -3px;" >返回</div>
      </div>
    </van-cell>
    </van-cell-group>

    <van-row class="operWrap">
      <van-col span="12" >

             <div class="sendMsg" @click="sendMsgEvent">发送短信{{num?"("+num+")":""}}</div>

      </van-col>
      <van-col span="12" >
        <van-button  class="chooseAll" @click="chooseAllEvent" > {{chooseAllMsg}} </van-button>
      </van-col>
    </van-row>

      <br>

    <van-row class="peopleMsgWrap" v-for="item,index in peopleMsg" :key="index">
      <van-col span="4" >
        <img class="img" :src="item.src" />
      </van-col>
      <van-col span="17" >
        <div class="t1">{{item.name}}</div>
        <div class="t2">{{item.tel}}&nbsp&nbsp{{item.time}}</div>
      </van-col>
      <van-col span="3" >
         <van-checkbox v-if="item.isShowChecked" class="checked" v-model="item.checked" @change="setMsgNum"></van-checkbox>
      </van-col>
    </van-row>

    <van-row  class="btnArea">
      <van-col span="8">
        <div @click="isShowTelSearch=true">
          <div class="search h"></div>
          筛选
        </div>
      </van-col>
      <van-col span="8">
        <router-link to="/home/flowGiftRecord/report" style="display:block;">
          <div class="report h"></div>
          短信发送记录
        </router-link>

      </van-col>
      <van-col span="8">
        <div>
          <div class="buyFlow h"></div>
          营销短信
        </div>
      </van-col>
    </van-row>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'MyFans',
    data() {
      return {
        chooseAllMsg:'全选',
        num:0,
        peopleMsg:[
          {
            src:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=58b114ba8b0a19d8df0e8c575293e9ee/a08b87d6277f9e2f930650031430e924b899f38e.jpg',
            name:'刘德华',
            tel:'13810302039',
            time:'30分钟前',
            checked:false,
            isShowChecked:true,
          },
          {
            src:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=ed6c2b0bf0f2b211f0238d1cabe90e5d/203fb80e7bec54e7cb855766b2389b504fc26a59.jpg',
            name:'郭德纲',
            tel:'13810302039',
            time:'30分钟前',
            checked:false,
            isShowChecked:true,
          },
          {
            src:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=ed6c2b0bf0f2b211f0238d1cabe90e5d/203fb80e7bec54e7cb855766b2389b504fc26a59.jpg',
            name:'郭德纲',
            tel:'13810302039',
            time:'30分钟前',
            checked:false,
            isShowChecked:false,
          },
        ]
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
      sendMsgEvent(){
        if(this.num>0){
           this.$router.push({path:'/home/myFans/sendMsg'});
        }
      },
      chooseAllEvent(){
         if(this.chooseAllMsg=='全选'){
            this.chooseAllMsg='全不选';
            this.peopleMsg.forEach(p=>{
               p.checked=true;
            });
         }else{
            this.chooseAllMsg='全选';
           this.peopleMsg.forEach(p=>{
             p.checked=false;
           });
         }
         this.setMsgNum();
      },
      setMsgNum(){
        let num=0;
        this.peopleMsg.forEach(p=>{
            if(p.checked&&p.isShowChecked){
               ++num;
            }
        });
        this.num=num;
      },
    },
    mounted(){},
  }
</script>

<style scoped lang="scss" type="text/scss">
#myFans{
  @import "../../static/css/main.scss";


  .operWrap{
    background: white;height: 75px;

    .chooseAll{
      width: 150px;
      height: 50px;
      line-height: 50px;
      float: right;
      margin-right: 35px;
      margin-top:15px ;
      border-radius: 7px;
      border: 1px solid #c9c9c9;
    }
  }

  .peopleMsgWrap{
    background: white;
    height: 95px;
    border-bottom:1px solid $borderColor ;
    .van-col{
      height: 95px;
    }
    .img{
      width:75px;
      height:75px;
      margin-left: 15px;
      margin-top:10px ;
    }
    .t1{
      margin-top:15px ;
      margin-bottom: 5px;
    }
    .t2{
      font-size:18px;/*px*/
      color:#949494;
    }
    .checked{
      width:40px;
      height:40px;
      margin-top:30px;
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
        background: url("../../static/images/u1068.png") no-repeat;

      }

      .report{
        background: url("../../static/images/u1073.png") no-repeat;

      }
      .buyFlow{
        background: url("../../static/images/u1645.png") no-repeat;

      }
      .h{
        width: 30px;
        height: 30px;
        background-size:100%;
        margin: 10px auto 5px;
      }
    }
  }


}
</style>
<style lang="scss" type="text/scss">

</style>
