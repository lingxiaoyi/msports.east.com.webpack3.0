const ExtractTextPlugin = require('extract-text-webpack-plugin')
const dirVars = require('./base/dir-vars.config.js')
let moduleConfig = require('./inherit/module.config.js')

moduleConfig.rules.push({
    test: /\.css$/,
    exclude: /node_modules|bootstrap/,
    use: ExtractTextPlugin.extract([
        {
            loader: 'css-loader',
            options: {
                minimize: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: (loader) => [
                    require('precss'),
                    require('autoprefixer')({
                        browsers: [
                            'last 10 versions'
                        ]
                    })
                ]
            }
        }
    ])
})

moduleConfig.rules.push({
    test: /\.css$/,
    include: /bootstrap/,
    use: ExtractTextPlugin.extract([
        {
            loader: 'css-loader'
        }
    ])
})

moduleConfig.rules.push({
    test: /\.scss$/,
    include: dirVars.srcRootDir,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: (loader) => [
                        require('precss'),
                        require('autoprefixer')({
                            browsers: [
                                'last 10 versions'
                            ]
                        })
                    ]
                }
            }, {
                loader: 'sass-loader' // 将 Sass 编译成 CSS
            }
        ]
    })
})

module.exports = moduleConfig
