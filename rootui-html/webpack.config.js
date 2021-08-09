const webpack = require( 'webpack' );
const fs = require( 'fs' );
const path = require( 'path' );
const glob = require( 'glob' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );

let extendConfig = ( cfg ) => cfg;

// extend webpack config.
if ( fs.existsSync( './webpack.config.extend.js' ) ) {
    // eslint-disable-next-line
    extendConfig = require('./webpack.config.extend.js');
}

// Nunjucks.
// get data for nunjucks templates
function getNunjucksData( file, gulpConfig ) {
    let data = JSON.parse( fs.readFileSync( gulpConfig.compile_webpack_html.dataFile, 'utf8' ) );

    if ( gulpConfig.compile_webpack_html.filterData ) {
        data = gulpConfig.compile_webpack_html.filterData( data, file );
    }

    return data;
}

module.exports = ( data ) => {
    const configs = [];
    const config = {
        mode: data.mode === 'dev' ? 'development' : 'production',
        plugins: [
            new FriendlyErrorsWebpackPlugin( {
                clearConsole: false,
            } ),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.DefinePlugin( {
                'process.env': {
                    NODE_ENV: JSON.stringify( data.mode === 'dev' ? 'development' : 'production' ),
                },
            } ),
            new webpack.BannerPlugin( {
                banner: data.getHeaderComment(),
                entryOnly: true,
            } ),
        ],
        output: {
            path: path.join( process.cwd(), './' ),
            filename: '[name]',
        },
    };

    // Optimizations.
    if ( data.mode === 'deploy' ) {
        config.optimization = {
            minimizer: [
                new TerserPlugin( {
                    extractComments: false,
                } ),
                new OptimizeCSSAssetsPlugin(),
            ],
        };
    }

    // Watch.
    if ( data.mode === 'dev' ) {
        config.watch = true;
    }

    // HTML.
    const HTMLList = glob.sync( data.gulpConfig.compile_webpack_html.from );
    let HTMLPlugins = false;

    if ( HTMLList && HTMLList.length ) {
        HTMLPlugins = HTMLList.map( ( htmlSrc ) => {
            const name = path.basename( htmlSrc ).replace( /\.[^/.]+$/, '' );

            return new HtmlWebpackPlugin( {
                title: htmlSrc,
                filename: `${ data.gulpConfig.compile_webpack_html.to }/${ name }.html`,
                template: htmlSrc,
                inject: false,
            } );
        } );
    }

    // JS.
    if ( data.gulpConfig.compile_webpack_js ) {
        configs.push( extendConfig( {
            ...config,
            entry: data.gulpConfig.compile_webpack_js,
            module: {
                rules: [
                    {
                        test: /\.(jsx|js)$/,
                        loader: 'babel-loader',
                    }, {
                        test: /\.scss$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                },
                            },
                            'postcss-loader',
                            {
                                loader: 'sass-loader',
                            },
                        ],
                    }, {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                },
                            },
                        ],
                    }, {
                        test: /\.(png|jpe?g|gif|ico|svg|ttf|eot|woff2)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: data.gulpConfig.compile_webpack_images.outputPath,
                                    publicPath: data.gulpConfig.compile_webpack_images.publicPath,
                                    esModule: false,
                                },
                            },
                        ],
                    }, {
                        test: /\.njk$/,
                        use: HTMLPlugins ? ( { resource } ) => {
                            const buildFilePath = resource.replace( /\.njk$/, '.html' );

                            return [
                                {
                                    loader: 'html-loader',
                                    options: {
                                        root: path.resolve( process.cwd(), data.gulpConfig.compile_webpack_html.to ),
                                        attrs: [
                                            'img:src',
                                            'img:data-src',
                                            'img:data-src-night',
                                            'img:data-src-day',
                                            // 'link:href',
                                        ],
                                        interpolate: 'require',
                                        minimize: data.mode === 'deploy',
                                    },
                                },
                                {
                                    loader: 'njk-html-loader',
                                    options: {
                                        data: getNunjucksData( buildFilePath, data.gulpConfig ),
                                        root: data.gulpConfig.compile_webpack_html.renderPath,
                                    },
                                },
                            ];
                        } : {
                            loader: 'null-loader',
                        },
                    },
                ],
            },
            resolve: {
                extensions: [ '.js', '.jsx', '.json' ],
            },
            plugins: [
                ...config.plugins,
                ...( HTMLPlugins || [] ),
            ],
        }, {
            ...data,
            type: 'js',
        } ) );
    }

    // SCSS.
    if ( data.gulpConfig.compile_webpack_scss ) {
        configs.push( extendConfig( {
            ...config,
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: data.mode === 'dev',
                                },
                            }, {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                },
                            },
                            'postcss-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    sassOptions: {
                                        indentedSyntax: true,
                                        indentWidth: 4,
                                        outputStyle: 'expanded',
                                    },
                                },
                            },
                        ],
                    }, {
                        test: /\.css$/,
                        use: [
                            {
                                loader: 'style-loader',
                            }, {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                },
                            },
                            'postcss-loader',
                        ],
                    },
                ],
            },
            entry: data.gulpConfig.compile_webpack_scss,
            plugins: [
                ...config.plugins,
                new FixStyleOnlyEntriesPlugin(),
                new MiniCssExtractPlugin( {
                    filename: '[name]',
                } ),
            ],
            output: {
                path: config.output.path,
                // we need this to prevent conflict "Multiple chunks emit assets to the same filename"
                filename: '[name].js',
            },
        }, {
            ...data,
            type: 'scss',
        } ) );
    }

    // Dev Server.
    if ( data.mode === 'dev' && data.gulpConfig.dev_server ) {
        configs[ 0 ].plugins = [
            ...configs[ 0 ].plugins,
            new BrowserSyncPlugin( {
                host: data.gulpConfig.dev_server.host,
                port: data.gulpConfig.dev_server.port,
                server: { baseDir: [ data.gulpConfig.dev_server.base ] },
            }, {
                // injectCss: true,
            } ),
        ];
    }

    return configs;
};
