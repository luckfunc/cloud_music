//封装要发起的请求
import request from "@/utils/request"; //把网络请求工具拿过来

//封装网络请求方法
//推荐歌单数据
export const recommendMusic = params => request({
  url: '/personalized',
  params
})
//热门歌曲
export const hotMusic = params => request({
  url: '/personalized/newsong',
  params
})
