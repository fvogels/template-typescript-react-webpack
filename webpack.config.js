const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function determineMode() {
    return process.env.NODE_ENV;
}

const output_path = path.join(__dirname, 'dist');

module.exports = [
    {
        mode: determineMode(),
        module: {
            rules: [{
                test: /\.tsx?$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        resolve: {
            extensions: [ '.js', '.json', '.ts', '.tsx' ],
            plugins: [ new TsconfigPathsPlugin() ]
        },
        entry: './src/app.tsx',
        output: {
            path: output_path,
            filename: 'react.bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html')
            })
        ]
    }
];
