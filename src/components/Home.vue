<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <Breadcrumb />
          <div class="cont">
            <router-view />
          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Footer from "./common/Footer.vue";
import Header from "./common/Header.vue";
import Menu from "./common/Menu.vue";
import Breadcrumb from "./common/Breadcrumb";

export default {
  name: "Home",
  components: { Footer, Header, Menu, Breadcrumb },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;

    .cont {
      margin: 0 20px;
    }
  }
}
</style>