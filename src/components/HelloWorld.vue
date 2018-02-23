<template>
  <div >
    <div class="test">123</div>
    <van-button type="default"  size="mini">默认按钮</van-button>
    <van-button type="primary"  size="small">主要按钮</van-button>
    <van-button type="danger"  size="normal">危险按钮</van-button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  computed:{

  },
  methods:{

  }
}
</script>


<style scoped lang="scss" type="text/css">
  .test{
    width:320px;
    height:100px;/*px*/
    font-size:28px ;/*px*/
    border: 1px solid red;/*no*/
  }
</style>

