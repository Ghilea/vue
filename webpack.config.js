const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const address = './src/vue/index.js';
const output = './public/js';

module.exports = {
    mode: 'development',
    entry: address,
    output: {
        path: path.resolve(__dirname, output),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@comp': path.resolve(__dirname, 'src/vue/components'),
            '@img': path.resolve(__dirname, 'src/vue/assets/image')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            "@babel/preset-env"
                        ],
                        "plugins": [
                            "jsx-vue-functional",
                            "@vue/babel-plugin-jsx",
                            ["@babel/transform-runtime"]
                        ]
                    }
                }

            }
            
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
