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
                            "@vue/babel-plugin-jsx"
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
