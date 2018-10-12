// const withCSS = require('@zeit/next-css')

// module.exports = withCSS({/* my next config */})

// const withCSS = require('@zeit/next-css')

// module.exports = withCSS({
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// })

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        }
      }
    })

    return config
  }
})
