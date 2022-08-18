<template>
  <div>
    <el-tree
        :data="menus"
        show-checkbox
        node-key="name"
        :props="defaultProps"
        ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes"> 通过node节点获取 </el-button>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
    // console.log(this.$router.options.routes);
    //权限管理和动态路由的思路
    //根据不同的用户登录上来返回对应的路由权限菜单
    //一般可以通过树形控件达到权限的精准控制，根据不同的角色勾选不同的菜单权限，将菜单数据提交给后端进行保存
    //后端保存后，在用户进行登录的时候就会查询改用户或者该角色所拥有的菜单数据，最终进行动态的渲染显示，动态
    //添加路由使用addRoute这个方法
  },
  methods: {
    getCheckedNodes() {
      let arr = this.$refs.tree.getCheckedNodes();
      console.log(arr);
    },
  },
};
</script>

<style scoped>
</style>