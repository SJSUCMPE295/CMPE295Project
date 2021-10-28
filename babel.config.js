module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);

    const isTargetWeb = api.caller((caller) => caller && caller.target === 'web');

    const isDev = ['test', 'production'].includes(process.env.NODE_ENV) === false;

    return {
        compact: true,
        presets: [
            [
                '@babel/env',
                {
                    modules: false,
                    useBuiltIns: 'entry',
                    corejs: 3.6,
                    ...(isTargetWeb === false && {
                        targets: {
                            node: 'current',
                        },
                    }),
                },
            ],
            '@babel/react',
            '@babel/typescript',
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
            '@babel/proposal-object-rest-spread',
            '@babel/proposal-optional-chaining',
            '@babel/syntax-dynamic-import',
            [
                'babel-plugin-import',
                {
                    libraryName: '@mui/material',
                    libraryDirectory: '',
                    camel2DashComponentName: false,
                },
                'core',
            ],
            [
                'babel-plugin-import',
                {
                    libraryName: '@mui/icons-material',
                    libraryDirectory: '',
                    camel2DashComponentName: false,
                },
                'icons',
            ],
            'macros',
            isDev && isTargetWeb && 'react-refresh/babel',
        ].filter(Boolean),
        env: {
            test: {
                plugins: [
                    '@babel/transform-modules-commonjs',
                    '@babel/syntax-dynamic-import',
                    '@babel/plugin-transform-runtime',
                ],
            },
            tooling: {
                presets: [
                    [
                        '@babel/env',
                        {
                            modules: 'commonjs',
                        },
                    ],
                    '@babel/typescript',
                ],
            },
        },
    };
};
