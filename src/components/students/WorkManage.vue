<template>
  <div class="workManage">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所在班级" align="center">
      </el-table-column>
      <el-table-column align="center" prop="title" label="作业名称">
      </el-table-column>
      <el-table-column align="center" prop="completed_text" label="是否完成">
      </el-table-column>
    </el-table>
    <Pageing :total="total" :url="url" />
  </div>
</template>

<script>
// import { getTableData } from "@/utils/table";
import Pageing from "../common/Pageing.vue";
export default {
  name: "WorkManage",
  components: { Pageing },
  data() {
    return {
      tableData: [],
      total: 0,
      loading: true,
      url: "/works",
    };
  },
};
</script>
<style lang="less">
.workManage {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>