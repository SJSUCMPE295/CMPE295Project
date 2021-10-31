const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../src/**/*.stories.tsx',
        '../src/**/*.stories.@(ts|tsx)',
        '../src/**/*.stories.(ts|tsx|js|jsx|mdx)',
        '../src/**/**/**/*.stories.*',
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        'storybook-addon-jsx',
        '@storybook/addon-a11y',
    ],
    webpackFinal: (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                // TODO:  "react-docgen-typescript-loader",
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');

        // config.resolve.plugins = [
        //     ...(config.resolve.plugins || []),
        //     new TsconfigPathsPlugin({
        //         extensions: config.resolve.extensions,
        //     }),
        // ];
        return config;
    },
};
