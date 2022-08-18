<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from "@/assets/data.json";

export default {
  name: "MapView",
  data() {
    return {};
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main"));
    //地图注册
    this.$echarts.registerMap("china", geoJson); ////注册可用地图,必须包括geo组件或者map图标类型的时候才可以使用
    console.log(geoJson);
    let option = {
      backgroundColor: "rgb(255,255,255)",
      geo: {
        geo: "china",
        aspectScale: 0.75, //scale地图长宽比
        zoom: 1.1,
        itemStyle: {
          normal: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#B3E19B", //百分之0的颜色
                },
                {
                  offset: 0,
                  color: "#FFF", //百分之100的颜色
                },
              ],
              globalCoord: true,
            },
            shadowColor: "rgb(58, 115, 192)",
            shadowOffsetX: 10,
            shadowOffsetY: 11,
          },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              opacity: 0.5,
            },
          },
        ],
      },
      series: [
        {
          //配置地图相关参数,绘制地图,这个对象是关于地图图标的相关设置
          type: "map",
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "black",
              },
            },
            emphasis: {
              textStyle: {
                color: "black",
              },
            },
          },
          zoom: 1.1,
          map: "china",
          itemStyle: {
            normal: {
              // backgroundColor: "rgb(0,0,0)",
              backgroundColor: "rgb(230,229,234)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#fffFFF", //百分之0的颜色
                  },
                  {
                    offset: 0,
                    color: "#76CFF1", //百分之100的颜色
                  },
                ],
                globalCoord: true,
              },
            },

            emphasis: {
              areaColor: "#BBDEF1",
              borderWidth: 0.1,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style scoped lang='less'>
.map-view {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>