<template>
  <div class="infoList">
    <!-- 新增 -->

    <el-form :inline="true" class="demo-form-inline" size="mini">
      <el-form-item>
        <el-button  @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="_name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="_sex" label="性别" align="center">
      </el-table-column>
      <el-table-column align="center" prop="_age" label="年龄">
      </el-table-column>
      <el-table-column align="center" prop="_father" label="父亲">
      </el-table-column>
      <el-table-column align="center" prop="_mather" label="母亲">
      </el-table-column>
      <el-table-column align="center" prop="_time" label="入校时间">
      </el-table-column>
      <el-table-column align="center" prop="_address" label="家庭住址">
      </el-table-column>
      <el-table-column align="center" prop="_phone" label="联系方式">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
              type="danger"
              size="mini"
              icon="el-icon-edit"
              @click="edit(scope.row)"
          >
            修改
          </el-button>
          <el-button
              type="danger"
              size="mini"
              icon="el-icon-edit"
              @click="del(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        :title="state === true ? '添加学生信息' : '修改学生信息'"
        :visible.sync="dialogFormVisible"
        width="500px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
            label="父亲姓名"
            :label-width="formLabelWidth"
            prop="father"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
            label="母亲姓名"
            :label-width="formLabelWidth"
            prop="mather"
        >
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
            label="家庭住址"
            :label-width="formLabelWidth"
            prop="address"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
            label="入校时间"
            :label-width="formLabelWidth"
            prop="time"
        >
          <el-date-picker
              v-model="form.time"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              align="right"
              type="date"
              placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
            label="联系方式"
            :label-width="formLabelWidth"
            prop="phone"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')">取 消</el-button>
        <el-button type="primary" @click="sure('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getInfos, editInfos, delInfos} from "@/api/api";

export default {
  name: "InfoList",
  data() {
    return {
      state: true,
      total: 0,
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
      },
      formLabelWidth: "80px",
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
          },
        ],
        sex: [
          {
            required: true,
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入家庭住址",
          },
        ],
        time: [
          {
            required: true,
            message: "请输入入学时间",
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入联系方式",
          },
        ],
      },
    };
  },
  methods: {
    edit(row) {
      this.dialogFormVisible = true;
      this.form = {...row};
      // this.form=row;
      this.state = false;
    },
    del(row) {
      console.log(row);
      this.$alert('你确定要删除吗', '提示', {
        confirmButtonText: '确定',
        callback: () => {
          delInfos(row.id)
              .then(res => {
                if (res.data.status === 200) {
                  console.log(row.id)
                  this.getData();
                  this.$message({message: res.data.message, type: 'success'})
                }
              }).catch(err => {
            console.log(err)
          })
        }

      })

    },
    closeInfo(form) {
      this.dialogFormVisible = false;
      this.$refs[form].resetFields();
    },
    //添加学生信息
    addStudent() {
      this.dialogFormVisible = true;
      this.state = true;
      this.form = {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
      };
    },
    //确定
    getData() {
      getInfos().then((res) => {
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          this.tableData.forEach((item) => {
            item.sex = 1 ? (item._sex = "男") : (item._sex = "女");
            item._name = item.name;
            item._age = item.age;
            item._address = item.address;
            item._father = item.father;
            item._time = item.time;
            item._mather = item.mather;
            item._phone = item.phone;
          });
          this.total = res.data.total;
        }
      });
    },

    sure(form) {
      console.log(form, this.form);
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.state) {
            editInfos('post', this.form).then((res) => {
              if (res.data.status === 200) {
                console.log(res);
                this.getData();
                this.$refs[form].resetFields();
                this.dialogFormVisible = false;
                this.$message({message: res.data.message, type: "success"});
              }
            });
          } else {
            editInfos('put',this.form).then((res) => {
              if (res.data.status === 200) {
                this.$refs[form].resetFields();
                console.log(res);
                this.getData();
                this.dialogFormVisible = false;
                this.$message({message: res.data.message, type: "success"});
              }
            });
          }
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="less">
.infoList {
  .demo-form-inline,
  .el-form-item {
    text-align: left;
    margin-top: 10px;
  }
}
</style>