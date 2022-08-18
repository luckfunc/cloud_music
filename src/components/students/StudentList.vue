<template>
  <div class="studentList">
    <!-- 查询重置 -->
    <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        size="mini"
    >
      <el-form-item label="姓名">
        <el-input
            v-model="formInline.name"
            placeholder="请输入要查询的姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  @click="valueFind">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button  @click="valueReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!--
        1：1-10 11 -20 21 -30  31 -40  slice((当前页数-1)*每页页数10,每页页数*10*当前页数
    -->
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column align="center" prop="age" label="年龄">
      </el-table-column>
      <el-table-column align="center" prop="number_text" label="学号">
      </el-table-column>
      <el-table-column align="center" prop="class_text" label="班级">
      </el-table-column>
      <el-table-column align="center" prop="state_text" label="状态">
      </el-table-column>
      <el-table-column align="center" prop="phone" label="联系方式">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
              type="danger"
              size="big"
              icon="el-icon-delete"
              @click="del(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { students, studentDel } from "@/api/api";

export default {
  name: "StudentList",
  data() {
    return {
      tableData: [],
      currentPage: 1, //当前是那一页
      pageSize: 10, // 每页显示条数
      total: 0, //总条数
      formInline: {
        name: "",
      },
    };
  },
  computed: {
    compData() {
      return this.tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.pageSize * this.currentPage
      );
    },
  },
  methods: {
    //查询
    valueFind() {
      console.log(this.formInline);
      this.getData(this.formInline);
    },
    valueReset() {
      this.formInline = {};
      this.getData(this.formInline);
    },
    //请求数据
    getData(params) {
      students(params)
          .then((res) => {
            // console.log(res.data.data)
            if (res.data.status === 200) {
              console.log(res);
              this.tableData = res.data.data;
              this.total = res.data.total;
              this.tableData.forEach((item) => {
                //尽量不要修改原数据
                item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
                item.state === "1"
                    ? (item.state_text = "已入学")
                    : item.state === "2"
                        ? (item.state_text = "未入学")
                        : (item.state_text = "休学中");
                item.number
                    ? (item.number_text = `2022020${item.number}`)
                    : item.number;
                item.class ? (item.class_text = `${item.class}班`) : "不存在";
              });
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
    },
    //删除操作
    del(row) {
      // console.log(id);
      studentDel(row.id).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          if (confirm("此操作不可逆是否继续")) {
            this.$message({ type: "success", message: "删除数据成功" });
            this.getData();
          } else {
            this.$message({ message: "当前数据保留", type: "info" });
          }
        }
      });
    },
    //分页设置
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },

  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.studentList {
  .demo-form-inline,
  .el-form-item {
    text-align: left;
    margin-top: 10px;
  }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>