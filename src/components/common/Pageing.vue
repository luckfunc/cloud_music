<template>
  <div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :url="url"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from "@/utils/table";
export default {
  name: "Pageing",
  props: {
    total: Number,
    url: String,
  },
  data() {
    return {
      size: 10, //每页显示条数
      page: 1, //当前页数
    };
  },
  methods: {
    //分页设置
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.page = 1;
      getTableData(
          this.$parent,
          "/works",
          { page: this.page, size: this.size },
          ["completed"]
      );
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      getTableData(
          this.$parent,
          "/works",
          { page: this.page, size: this.size },
          ["completed"]
      );
    },
  },
  created() {
    // console.log(this.$parent);
    getTableData(this.$parent, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
};
</script>

<style>
</style>