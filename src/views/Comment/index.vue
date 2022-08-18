<template>
  <div>
    <van-nav-bar title="评论" left-arrow @click-left="$router.back()"></van-nav-bar>

    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

        <!--      van-cell 单元格借用一下，内部全都自定义-->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <van-cell
              v-for="list in commentList " :key="list.id"
          >
            <template>
              <div class="wrap">
                <div class="img_wrap">
                  <img :src="list.user.avatarUrl " alt="">
                </div>
                <div class="content_wrap">
                  <div class="header_wrap">
                    <div class="info_wrap">
                      <p>{{ list.user.nickname }}</p>
                      <p>{{ moment(list.time).format('YYYY-MM-DD:mm:ss') }}</p>
                    </div>
                    <div>
                      <van-icon name="good-job-o" />
                      {{ list.likedCount }}</div>
                  </div>
                  <div class="footer_wrap">
                    {{ list.content }}
                  </div>
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import {getCommentValueApi} from "@/api";

export default {
  name: "index",
  data() {
    return {
      loading: false,
      finished: false, //如果设置为trueList下面会显示没有数据了
      isLoading: false,
      commentList: [],
      page: 1//当前要请求第几页

    }
  },
  methods: {
    async onRefresh() {
      //当你ui层面下拉内部会自动把isLoading改为true
      //刷新的时候清空数据再去获取新的数据
      this.commentList = [];
      this.page = 1; //页码回复
      this.getComments();

    },
    async getComments() {
      const res = await getCommentValueApi({
        id: this.$route.query.id,
        limit: 20,
        offset: (this.page - 1) * 20
      });
      // console.log(res.data.hotComments)
      // res.data.comment.forEach(item => {
      res.data.hotComments.forEach(item => {
        if (item) {
          this.commentList.push(item);
        }

      })
      this.commentList = res.data.hotComments;
      // this.commentList = res.data.comment;
      this.isLoading = false;
      this.loading = false; //隐藏2每次请求玩数据  都要把loading关掉 负责不会触发onload事件()可能容易递归
      // 必须要让数据增加
    },
    async onLoad() { //触底了 要加载下一页数据了
      console.log('onLoad执行了')
      //加载后要关闭loading为false
      this.getComments();

      //网页刚打开list就已经触底了马上执行了一次onload事件
      this.page++;

    }
  }
  ,/*
  created() {
    this.getComments();
    // console.log(res.data.comments)

  }*/
}
</script>

<style scoped>
.wrap {
  display: flex;
}

.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.266667rem;
}

.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.content_wrap {
  flex: 1;
}

/*右侧头部*/
.header_wrap {
  display: flex;
}

.info_wrap {
  flex: 1;
}

.info_wrap p:first-child {
  font-size: 0.373333rem;
  color: #666666;
}

.info_wrap p:last-of-type {
  font-size: 0.24rem;
  color: #999999;
}

.header_wrap div:last-of-type {
  color: #999;
  font-size: 0.293333rem;
}


/*评论内容*/
.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>