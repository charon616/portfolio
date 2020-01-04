module.exports = {
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            transformToRequire: {
                source: 'srcset', // keyにタグ名、値に属性名、配列で複数渡せる
            }
        }
      }]
    }
}