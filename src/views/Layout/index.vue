<template>
  <div>
    <!-- 这样的写法默认就是true -->
    <van-nav-bar :title="activeTitle" fixed/>
    <div class="main">
      <keep-alive>

        <router-view></router-view>

      </keep-alive>
    </div>
    <van-tabbar route>
      <!-- <van-tabbar-item icon="home-o" name="首页" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" name="搜索" replace to="/layout/search"
        >搜索</van-tabbar-item
      > -->
      <van-tabbar-item icon="home-o" replace to="/layout/home"
      >首页
      </van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
      >搜索
      </van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title, //导航标题 拿到当前路由信息对象里面的meta对象
    };
  },
  methods: {},
  watch: {
    $route() {
      //直接监听组件对象身上的属性
      //当路由改变时 数据改变
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>