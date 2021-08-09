const fs = require( 'fs' );
const del = require( 'del' );
const webpack = require( 'webpack' );
const gulp = require( 'gulp' );
const stringTemplate = require( 'string-template' );

const pkg = require( './package' );
const webpackCfg = require( './webpack.config.js' );

let extendGulpConfig = ( cfg ) => cfg;

// Extend gulp config.
if ( fs.existsSync( './gulp.config.extend.js' ) ) {
    // eslint-disable-next-line
    extendGulpConfig = require('./gulp.config.extend.js');
}

function templateConfig( variable, config ) {
    if ( ! config ) {
        config = variable;
    }

    if ( variable !== null && ( typeof variable === 'object' || Array.isArray( variable ) ) ) {
        const newVariable = Array.isArray( variable ) ? [] : {};

        Object.keys( variable ).forEach( ( k ) => {
            newVariable[ templateConfig( k, config ) ] = templateConfig( variable[ k ], config );
        } );

        variable = newVariable;
    } else if ( typeof variable === 'string' ) {
        variable = stringTemplate( variable, config );
    }

    return variable;
}

// Gulp Config.
const gulpConfig = templateConfig( extendGulpConfig( require( './gulp.config.js' ) ) );

/**
 * Get Header Comment
 *
 * @return {string} - comment.
 */
function getHeaderComment() {
    return `Name: ${ pkg.title } - ${ pkg.description }
Version: ${ pkg.version }
Author: ${ pkg.author }
Website: ${ pkg.website }
Purchase: ${ pkg.purchase }
Support: ${ pkg.support }
License: ${ pkg.license }
Copyright ${ new Date().getFullYear() }.`;
}

/**
 * Clean Task
 */
gulp.task( 'clean', ( cb ) => {
    del( gulpConfig.dist ).then( () => {
        cb();
    } );
} );

/**
 * Webpack Task
 */
gulp.task( 'webpack', ( cb ) => {
    let firstJsTaskRun = true;

    const config = webpackCfg( {
        mode: process.env.NODE_ENV,
        gulpConfig,
        getHeaderComment,
    } );

    // Run.
    const webpackObj = webpack( config );

    // On Change.
    function onChange( err ) {
        if ( err ) {
            // eslint-disable-next-line no-console
            console.log( 'Error', err );
        }

        if ( firstJsTaskRun ) {
            firstJsTaskRun = false;
            cb();
        }
    }

    if ( process.env.NODE_ENV === 'dev' ) {
        webpackObj.watch( {}, onChange );
    } else {
        webpackObj.run( onChange );
    }
} );

/**
 * Static Task
 */
let staticCount = 0;
function staticTask( cb ) {
    const staticArr = gulpConfig.copy_files;
    if ( staticArr.length && typeof staticArr[ staticCount ] !== 'undefined' ) {
        gulp.src( staticArr[ staticCount ].from )
            .pipe( gulp.dest( staticArr[ staticCount ].to ) )
            .on( 'end', () => {
                staticCount++;
                staticTask( cb );
            } );
    } else {
        staticCount = 0;
        cb();
    }
}
gulp.task( 'static', staticTask );

/**
 * Default Task
 */
gulp.task( 'default', ( cb ) => {
    process.env.NODE_ENV = 'dev';
    gulp.series( 'clean', 'webpack', 'static' )( cb );
} );

/**
 * Production Task
 */
gulp.task( 'production', ( cb ) => {
    process.env.NODE_ENV = 'production';
    gulp.series( 'clean', 'webpack', 'static' )( cb );
} );

/**
 * Deploy Task
 */
gulp.task( 'deploy', ( cb ) => {
    process.env.NODE_ENV = 'deploy';
    gulp.series( 'clean', 'webpack', 'static' )( cb );
} );
