//统一出口
import {
    recommendMusic,
    hotMusic,
} from '@/api/Home'
import {
    hotMusicSearchFont,
    hotSearch
} from '@/api/Search';
import {getSongById, getLyricById} from "@/api/Play";
import {getCommentValue} from "@/api/Comment";

export const recommendMusicApi = recommendMusic; //把工具方法拿出来导出
export const hotMusicApi = hotMusic; //热门歌曲方法拿过来导出
export const hotMusicSearchFontApi = hotMusicSearchFont //热门搜索关键词导出
export const hotSearchApi = hotSearch;
export const getSongByIdApi = getSongById; //歌曲详情
export const getLyricByIdApi = getLyricById;    //歌词
export const getCommentValueApi = getCommentValue;