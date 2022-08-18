<template>
  <van-cell center :title="name" :label="author " :key="id"
            @click="$router.push({
    path:'/comment',
    query:{
          id:id
    }
    })"

  >
    <template #right-icon>
      <van-icon name="play-circle-o" class="search-icon" @touchstart="playFun"/>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'SongItem',
  props: {
    name: String,
    id: Number,
    author: String
  },
  methods: {
    playFun() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id
        }
      })
    }
  }
};
</script>

<style scoped>
/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}

.search-icon {
  font-size: 24px;
  line-height: inherit;
}
</style>