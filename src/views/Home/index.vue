<template>
  <div>
    <!-- 标题 -->
    <div>
      <p class="title">推荐歌单</p>
      <van-row gutter="10" type="flex" justify="space-between">
        <van-col span="8" v-for="song in recommendSongs" :key="song.id">
          <van-image width="100%" height="3rem" :src="song.picUrl"/>
          <p class="song_name">{{ song.name }}</p>
        </van-col>
      </van-row>
    </div>
    <p class="title">最新音乐</p>
    <!--    <van-cell-group v-for="newSong in hotSongs" :key="newSong.id">-->
    <!--      <van-cell center :title="newSong.name" :label="newSong.song.artists[0].name ">-->
    <!--        <template #right-icon>-->
    <!--          <van-icon name="play-circle-o" size="0.6rem"/>-->
    <!--        </template>-->
    <!--      </van-cell>-->
    <!--    </van-cell-group>-->
    <SongItem v-for="newSong in hotSongs"
              :name='newSong.name'
              :author='newSong.song.artists[0].name'
              :id='newSong.id'
    ></SongItem>
  </div>
</template>

<script>
import {recommendMusicApi, hotMusicApi} from "@/api";
import SongItem from "@/components/SongItem";
// import Test from "@/components/Test";
export default {
  name: "index",
  components: {SongItem},
  data() {
    return {
      recommendSongs: [], //推荐歌单
      hotSongs: [], //热门歌曲
    };
  },
  async created() {
    const res = await recommendMusicApi({limit: 6});
    this.recommendSongs = res.data.result;
    // this.recommendSongs = this.recommendSongs.splice(0, 6);
    const songsMusic = await hotMusicApi({limit: 20});
    this.hotSongs = songsMusic.data.result;
    // console.log(songsMusic);
  },
};
</script>

<style scoped lang='less'>
// @cell-font-size= '17px';
.title {
  padding: 0.26666667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

.search-icon {
  font-size: 21px;
  line-height: inherit;
}
</style>