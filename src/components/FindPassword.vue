<template>
  <div id="findPassword">
    <div v-show="router=='/findPassword'">
    <div class="title">找回密码</div>
    <van-cell-group>
      <br>
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
    </van-cell-group>
    <br>
    <van-button   bottom-action  class="btnCenter" @click="findPasswordBtn">找回密码</van-button>
    <br>
    <br>
    <div class="toLogin" @click="toLogin">已有商家账号，立即登录</div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'findPassword',
    data() {
      return {
        tel:'',
        code:'',
        codeBtnMsg:'发送验证码'
      }
    },
    computed: {
        router(){
          return this.$route.path;
        },

    },
    methods: {
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
      findPasswordBtn(){
            //todo:判断验证码是否正确
            //跳到重置密码页面
             this.$router.push({path: '/findPassword/resetPassword'});
      },
      toLogin(){
        this.$router.back(-1);
      },
    },
    mounted(){},
  }
</script>

<style scoped lang="scss" type="text/scss">
#findPassword{
  @import "../../static/css/main.scss";
}
</style>
<style lang="scss" type="text/scss">

</style>
