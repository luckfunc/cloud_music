<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333333"
          text-color="#fff"
          active-text-color="#ffd04b">
        <template v-for="(menu,index) in menus ">
          <el-submenu :index="index+''" :key="index" v-if="!menu.hidden">
            <template slot="title">
              <i :class="menu.iconClass"></i>
              <span>{{ menu.name }}</span>
            </template>
            <el-menu-item-group v-for="(child,index) in menu.children" :key="index">
              <el-menu-item :index="child.path+''">
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>

      </el-menu>
    </el-aside>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    }
  },
  created() {
    // console.log(this.$router.options.routes)
    // console.log(this.$router.options.routes[3].children[0].name)
    this.menus = [...this.$router.options.routes];
  }
};
</script>
<style lang="less">
.menu {
  .el-aside {
    height: 100%;

    .el-menu {
      height: 100%;

      .fa {
        margin: 0 10px 0 0;
        color: #fff;
      }
    }

    .el-submenu .el-menu-item {
      min-width: 0;
    }
  }
}
</style>