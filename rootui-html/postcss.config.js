const postcss = require( 'postcss' );

module.exports = {
    plugins: [
        // Generate TOC for styles.
        postcss.plugin( 'postcss-table-of-contents', () => ( css ) => {
            let result = '';
            let i = 1;

            // Check all comments.
            css.walkComments( ( comment ) => {
                const commentStr = comment.toString();

                const reg = /\/\*-[-]*?\n([\s\S]*?)\n[ -]*?-\*\//g;
                const title = reg.exec( commentStr );

                if ( title && title[ 1 ] ) {
                    const isSub = ! /\n/.test( title[ 1 ] );
                    const str = title[ 1 ].replace( /^\s+|\s+$/g, '' );
                    if ( ! isSub ) {
                        result += `\n  ${ i }. `;
                        i++;
                    } else {
                        result += '\n    - ';
                    }
                    result += str;
                }
            } );

            if ( ! result ) {
                return;
            }

            css.prepend( `/*------------------------------------------------------------------
  [Table of contents]
  ${ result }
-------------------------------------------------------------------*/` );
        } ),

        // Autoprefixer.
        require( 'autoprefixer' ),
    ],
};
