module.exports = {
    mode: 'production',
    entry: [
        './assets/css/palette.scss',
        './assets/css/variables.scss',
        './assets/css/global.scss'
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
