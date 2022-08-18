<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
import { dataview } from "@/api/api.js";
export default {
  name: "DateView",
  data() {
    return {};
  },
  methods: {
    drow(legend, xAxis, series) {
      let myChart = this.$echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          text: "会话量",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: legend,
        },
        xAxis: {
          type: "category",
          data: xAxis,
        },
        yAxis: {
          type: "value",
        },
        series: series,
      };
      myChart.setOption(option);
    },
  },
  created() {
    //第二个图标的绘制
    dataview()
        .then((res) => {
          if (res.data.status === 200) {
            let { legend, xAxis, series } = res.data.data;
            this.drow(legend, xAxis, series);
          }
        })
        .catch((err) => {
          throw err;
        });
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main1"));
    myChart.setOption({
      title: {
        text: "学生视图",
      },
      tooltip: {},
      xAxis: {
        data: ["一班", "二班", "三班", "四班", "五班", "六班"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [50, 30, 54, 62, 15, 45],
        },
      ],
    });
  },
};
</script>

<style lang="less" scoped>
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>