"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotMusic = exports.recommendMusic = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//封装要发起的请求
//把网络请求工具拿过来
//封装网络请求方法
//推荐歌单数据
var recommendMusic = function recommendMusic(params) {
  return (0, _request["default"])({
    url: '/personalized',
    params: params
  });
}; //热门歌曲


exports.recommendMusic = recommendMusic;

var hotMusic = function hotMusic(params) {
  return (0, _request["default"])({
    url: '/personalized/newsong',
    params: params
  });
};

exports.hotMusic = hotMusic;