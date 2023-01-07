module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        fallback: { 
            "util": false,
            "stream": false,
            "crypto": require.resolve("crypto-browserify")
        }
    }
}