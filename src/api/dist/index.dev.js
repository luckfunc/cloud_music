"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotSearchApi = exports.hotMusicSearchFontApi = exports.hotMusicApi = exports.recommendMusicApi = void 0;

var _Home = require("@/api/Home");

var _Search = require("@/api/Search");

//统一出口
var recommendMusicApi = _Home.recommendMusic; //把工具方法拿出来导出

exports.recommendMusicApi = recommendMusicApi;
var hotMusicApi = _Home.hotMusic; //热门歌曲方法拿过来导出

exports.hotMusicApi = hotMusicApi;
var hotMusicSearchFontApi = _Search.hotMusicSearchFont; //热门搜索关键词导出

exports.hotMusicSearchFontApi = hotMusicSearchFontApi;
var hotSearchApi = _Search.hotSearch;
exports.hotSearchApi = hotSearchApi;