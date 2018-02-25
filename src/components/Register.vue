<template>
  <div id="Register">
    <div class="title">商家注册</div>
    <van-cell-group>
      <br>
      <van-field
        v-model="username"
        label="商家名"
        placeholder="请输入商户名称"
        required
        icon="clear"
        @click-icon="username = ''"
      />

      <van-field
        v-model="tel"
        label="手机号码"
        type="tel"
        maxlength="11"
        placeholder="请输入手机号码"
        required
        icon="clear"
        @click-icon="tel = ''"
      />

      <van-row>
        <van-col span="18">
          <van-field
            v-model="code"
            label="验证码"
            type="number"

            placeholder="请输入验证码"
            required
            icon="clear"
            @click-icon="code = ''"
          />
        </van-col>
        <van-col span="6">
            <div class="getCodeBtn" @click="getCodeBtn">{{codeBtnMsg}}</div>
        </van-col>
      </van-row>


      <van-field
        v-model="registerCode"
        label="注册码"
        placeholder="请输入注册码，无注册码可为空"
      />
    </van-cell-group>
    <br>
    <van-button   bottom-action  class="btnCenter" @click="registerEvent">确认注册</van-button>
    <br>
    <br>
    <div class="toLogin" @click="toLogin">已有商家账号，立即登录</div>
  </div>
</template>

<script>

  export default {
    name: 'Register',
    data() {
      return {
        username:'',
        tel:'',
        code:'',
        registerCode:'',

        codeBtnMsg:'发送验证码'
      }
    },
    computed: {},
    methods: {
      registerEvent(){

      },
      getCodeBtn(){
           if(this.codeBtnMsg=='发送验证码'){
              let i=10;
              this.codeBtnMsg=i+'s后再点击';
              let T= setInterval(p=>{
                --i;
                 this.codeBtnMsg=i+'s后再点击';
                if(i==0){
                  clearInterval(T);
                  this.codeBtnMsg='发送验证码'
                }
              },1000);
           }
      },
      toLogin(){

        this.$router.back(-1);
      },
    },
    mounted(){

    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "../../static/css/main.scss";
  #Register{


  }
</style>
<style lang="scss" type="text/scss">

</style>
