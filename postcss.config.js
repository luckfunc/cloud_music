module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 能够把所有元素的px单位转成Rem
      // rootValue: 转换px的基准值。
      // 例如一个元素宽是75px，则换成rem之后就是2rem。
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
//postcss技术：webpack的插件(转换/降级css代码)
// postcss-pxtorem插件把px转换位rem

//在使用二倍图的时候量出 宽度位100px  多少rem？

//测量出来的宽度 /当前基准的html的font-size