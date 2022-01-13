const webpack = require("webpack");
const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
    addWebpackModuleRule({
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                esModule: false
            }
        }
    })
);