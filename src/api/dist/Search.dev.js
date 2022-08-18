"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotSearch = exports.hotMusicSearchFont = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//热门搜索关键词
var hotMusicSearchFont = function hotMusicSearchFont() {
  return (0, _request["default"])({
    url: '/search/hot'
  });
}; //热搜请求接口列表


exports.hotMusicSearchFont = hotMusicSearchFont;

var hotSearch = function hotSearch(params) {
  return (0, _request["default"])({
    url: '/cloudsearch',
    params: params
  });
};

exports.hotSearch = hotSearch;