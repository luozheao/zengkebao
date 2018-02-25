<template>
  <div>
    <div class="title">重置密码</div>
    <van-cell-group>
      <br>


      <van-field
        v-model="password1"
        type="password"
        label="新密码"
        placeholder="请输入密码"
        required
      />

      <van-field
        v-model="password2"
        type="password"
        label="新密码"
        placeholder="请重新输入密码"
        required
      />

    </van-cell-group>

    <br>
    <van-button   bottom-action  class="btnCenter" @click="sure">确认修改</van-button>

  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'ResetPassword',
    data() {
      return {
        password1:'',
        password2:'',
      }
    },
    computed: {},
    methods: {
      sure(){
        //todo请求后台数据，验证是否成功
        Toast('修改成功！');
        this.$router.push({path: '/'});
      }
    },
    mounted(){},
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "../../static/css/main.scss";
</style>
<style lang="scss" type="text/scss">

</style>
