// @ts-ignore
import colors from 'vuetify/es5/util/colors';

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    mode: 'universal',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s',
        title: 'Translate',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/global.scss'
    ],
    styleResources: {
        scss: [
            '@/assets/css/palette.scss',
            '@/assets/css/variables.scss'
        ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/authAmplify',
        '@/plugins/apiClient'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/eslint-module',
        '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'nuxt-vuex-localstorage',
        '@nuxtjs/style-resources'
    ],

    dotenv: {
        filename: `.env.${( process.env.NODE_ENV || '' ).substr( 0, 3 )}`
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/css/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        filenames: {
            css: ( { isDev }: any ) => isDev ? '[name].css' : '[contenthash].css'
        },
        extractCSS: {
            ignoreOrder: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(scss|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        publicPath: '/static',
        extend ( config: any, { isDev, isClient }: { isDev: boolean, isClient: boolean } ) {
            if ( isDev && isClient && process.env.ESLINT ) {
                config.module.rules.push( {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)|(commons)|(\.nuxt)|(\.svg$)/
                } );
            }
        }
    }
};
