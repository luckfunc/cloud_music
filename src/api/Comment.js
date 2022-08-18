import request from "@/utils/request";
export  const getCommentValue=params=>request({
    url:'/comment/music',
    params
})