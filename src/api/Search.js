import request from "@/utils/request";
//热门搜索关键词
export const hotMusicSearchFont = () => request({
  url: '/search/hot',
})

//热搜请求接口列表
export const hotSearch = (params) => request({
  url: '/cloudsearch',
  params
})