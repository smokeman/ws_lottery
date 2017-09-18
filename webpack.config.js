const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VuxLoader = require('vux-loader')

let originalConfig = {
    entry: {
        main: './src/main'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        // publicPath:path.join(__dirname,'/dist/'),
        publicPath: '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'less-loader'],
                            fallback: 'vue-style-loader'
                        }),
                        // less:xtractTextPlugin.extract({
                        //     use:'less-loader',
                        //     fallback:'vue-style-loader'
                        // })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // use:[
                //     'style-loader',
                //     'css-loader'
                // ]
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            // {
            //     test:/\.less$/,
            //     use:'less-loader'
            // },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
    // resolveLoader:{
    //     moduleExtensions:["-loader"]
    // }
}

const webpackConfig = originalConfig
module.exports = VuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
// module.exports = vuxLoader.merge(config, {
//   plugins: [
//     'vux-ui', 'progress-bar', 'duplicate-style',
//     {
//       name: 'less-theme',
//       path: 'src/style/theme.less'
//     }
//   ]
// })
