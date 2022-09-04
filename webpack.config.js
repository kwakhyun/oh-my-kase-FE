const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    // 생략
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: false,
            KAKAO_MAP_KEY: process.env.KAKAO_MAP_KEY,
        }),
    ],
    // 생략
};