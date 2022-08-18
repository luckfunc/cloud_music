<template>
  <div>
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词"/>
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <ul class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <li
            class="hot_item"
            v-for="(hotSearch, index) in hotSearchFonts"
            :key="index"
            @click="wordBtn(hotSearch.first)"
        >
          {{ hotSearch.first }}
        </li>
      </ul>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap">
      <!-- 标题 -->
      <p class="hot_title" v-if="this.resultList.length !== 0">最佳匹配</p>

<!--      <van-cell-group v-for="result in resultList" :key="result.id">
        <van-cell :title="result.name">
          &lt;!&ndash; :label="result.song.artists[0].name" &ndash;&gt;
          &lt;!&ndash; 使用 right-icon 插槽来自定义右侧图标 &ndash;&gt;
          <template #right-icon>
            <van-icon name="play-circle-o" class="search-icon"/>
          </template>
        </van-cell>
      </van-cell-group>-->
      <SongItem
          v-for="result in resultList"
          :id="result.id"
          :name="result.name"
          :author="result.ar[0].name"
      />
    </div>
  </div>
</template>

<script>
import {hotMusicSearchFontApi, hotSearchApi} from "@/api/index";
import SongItem from "@/components/SongItem";

export default {
  components: {SongItem},
  data() {
    return {
      value: "",
      hotSearchFonts: [], //搜索关键字
      resultList: [], //搜索结果
      timer: null, //用来保存定时器
    };
  },
  methods: {
    async wordBtn(word) {
      this.value = word;
      const res = await hotSearchApi({keywords: word, type: 1});
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer); //防止下面的请求再次执行
      });
    },
  },
  watch: {
    value(val) {
      clearTimeout(this.timer); //防止输入框为空空置还显示请求回来的数据保证最后那次网络请求定时器关闭
      if (val.length === 0) return (this.resultList = []); //判断输入框是否有值
      this.timer = setTimeout(async () => {
        //搜索框的值改变立刻执行（点击或者键盘输入）
        const res = await hotSearchApi({keywords: val, type: 1});
        this.resultList = res.data.result.songs;
      }, 3000);
    },
  },
  //防抖n秒内最后执行一次 这就是防抖 补充 如果函数在n秒内再次执行 就再次运行

  //间隔n秒执行一次
  async created() {
    const res = await hotMusicSearchFontApi();
    this.hotSearchFonts = res.data.result.hots;
    // console.log(this.hotSearchFonts);
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>