<template>
  <div  id="Login"  >
    <div v-show="router=='/'">
       <div class="title">商家登录</div>
      <van-cell-group>
      <br>
      <van-field
        v-model="username"
        label="账号"
        icon="clear"
        placeholder="请输入用户ID/手机号码"
        required
        @click-icon="username = ''"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
      <br>
     <van-button   bottom-action  class="btnCenter" @click="loginEvent">登录</van-button>
     <br>
     <van-row>
      <van-col span="2" style="text-align: right">
         <i class="code"></i>
      </van-col>
      <van-col span="10">
        <router-link to="/findPassword">忘记密码</router-link>
      </van-col>
      <van-col span="8" style="text-align: right">
        <i class="shop"></i>
      </van-col>
      <van-col span="4" style="text-align: left">
           <router-link to="/register">注册商家</router-link>
      </van-col>
    </van-row>
     <div class="bottomTxt">
       <router-link to="/home">暂不登陆，跳过 >></router-link>
     </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'Login',
    data() {
      return {
        flowGiftCode:true,
        username:'',
        password:'',
      }
    },
    computed: {
       router(){
         //设置背景颜色
         if(this.$route.path.indexOf('home')>=0){

             document.getElementById('app').style.backgroundColor='#f5f5f5';
         }else{
           document.getElementById('app').style.backgroundColor='#fff';

         }

          return this.$route.path;
       },
    },
    methods: {
      loginEvent(){
        if(!this.username||!this.password){
          Toast('账号或密码不能为空！');

          return;
        }
        //todo:判断账号密码是否正确
        this.$router.push({path: '/home'});

      }
    },
    mounted(){

    },
  }
</script>

<style scoped lang="scss" type="text/scss">
@import "../../static/css/main.scss";
#Login{
  .code{
    width:50px;
    height: 50px;
    display:inline-block ;
    background: url("../../static/images/u26.png") no-repeat 10px 0 ;
    background-size:60% ;
  }
  .shop{
    width:50px;
    height: 50px;
    display:inline-block ;
    background: url("../../static/images/u28.png") no-repeat 10px 0 ;
    background-size:60% ;
  }
  .bottomTxt{
    position: absolute;
    bottom:10%;
    text-align: center;
    font-size:26px;/*px*/
    width:100%;
  }

}
</style>
<style lang="scss" type="text/scss">

</style>
