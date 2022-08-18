<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>学生管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
              type="password"
              v-model="form.password"
              @keyup.enter.native="login('form')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')"> 登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import  {nameRule,passRule} from "@/utils/vaildate";
  // import { nameRule, passRule } from "@utils/validate";
import { setToken } from "@/utils/setToken";
import { login } from "@/api/api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          /*  把登录方法封装成API进行使用
          this.service.post("/login", this.form).then((response) => {
            if (response.data.status === 200) {
              setToken('username',response.data.username)
              setToken("token", response.data.token);
              this.$message({message:response.data.message,type:'success'});
              this.$router.push('/home')
            }
            console.log(response);
          });
          */
          login(this.form).then((response) => {
            if (response.data.status === 200) {
              setToken("username", response.data.username);
              setToken("token", response.data.token);
              this.$message({
                message: "登录成功" || response.data.message,
                type: "success",
              });
              this.$router.push("/home");
              console.log(response);
            }
          });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/login.jpg") center no-repeat;
  background-size: 100% 100%;

  .el-card .el-card__body {
    margin-right: 50px;
  }
  .box-card {
    width: 450px;
    margin: 200px auto;

    .el-card__header {
      font-size: 30px;
    }
  }

  .el-button {
    width: 100%;
  }
}
</style>