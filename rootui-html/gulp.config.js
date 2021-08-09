const path = require( 'path' );

const cfg = {};

// Build Paths.
cfg.name = 'rootui';
cfg.src = './src';
cfg.dist = './build';

// Dev Server.
cfg.dev_server = {
    host: 'localhost',
    port: 3000,
    base: '{dist}',
};

// Copy files.
cfg.copy_files = [
    {
        from: '{src}/static/**',
        to: '{dist}',
    },
    {
        from: [
            // jQuery
            './node_modules/*jquery/dist/jquery.min.js',

            // Feather Icons
            './node_modules/*feather-icons/dist/feather.min.js',
            './node_modules/*feather-icons/dist/feather.min.js.map',

            // FontAwesome
            './node_modules/@fortawesome/*fontawesome-free/js/all.js',
            './node_modules/@fortawesome/*fontawesome-free/js/v4-shims.js',

            // OFI
            './node_modules/*object-fit-images/dist/ofi.min.js',

            // Popper
            './node_modules/*popper.js/dist/umd/popper.min.js',
            './node_modules/*popper.js/dist/umd/popper.min.js.map',

            // Bootstrap
            './node_modules/*bootstrap/dist/js/bootstrap.min.js',
            './node_modules/*bootstrap/dist/js/bootstrap.min.js.map',

            // OverlayScrollbars
            './node_modules/*overlayscrollbars/js/jquery.overlayScrollbars.min.js',
            './node_modules/*overlayscrollbars/css/OverlayScrollbars.css',

            // Fancybox
            './node_modules/@fancyapps/*fancybox/dist/jquery.fancybox.min.js',
            './node_modules/@fancyapps/*fancybox/dist/jquery.fancybox.css',

            // Highlight
            './node_modules/*highlightjs/highlight.pack.min.js',
            './node_modules/*highlightjs/styles/default.css',

            // Emojione
            './node_modules/*emojione/lib/js/emojione.min.js',

            // EmojioneArea
            './node_modules/*emojionearea/dist/emojionearea.min.js',
            './node_modules/*emojionearea/dist/emojionearea.css',

            // Sortable
            './node_modules/*sortablejs/Sortable.min.js',

            // Chart.js
            './node_modules/*chart.js/dist/Chart.min.js',

            // Chartist
            './node_modules/*chartist/dist/chartist.min.js',
            './node_modules/*chartist/dist/chartist.min.js.map',
            './node_modules/*chartist/dist/chartist.css',

            // Peity
            './node_modules/*peity/jquery.peity.min.js',

            // eCharts
            './node_modules/*echarts/dist/echarts.min.js',

            // Flot
            './node_modules/*flot/dist/es5/jquery.flot.js',
            './node_modules/*flot/source/jquery.flot.pie.js',

            // Validator
            './node_modules/*validator/validator.min.js',

            // Swiper
            './node_modules/*swiper/swiper-bundle.min.js',
            './node_modules/*swiper/swiper-bundle.min.js.map',
            './node_modules/*swiper/swiper-bundle.min.css',

            // Moment
            './node_modules/*moment/min/moment.min.js',
            './node_modules/*moment/min/moment.min.js.map',

            // Fullcalendar
            './node_modules/*fullcalendar/main.min.js',
            './node_modules/*fullcalendar/main.min.css',

            // jsTree
            './node_modules/*jstree/dist/jstree.min.js',
            './node_modules/*jstree/dist/themes/default/style.min.css',
            './node_modules/*jstree/dist/themes/default/throbber.gif',
            './node_modules/*jstree/dist/themes/default/32px.png',

            // SweetAlert
            './node_modules/*sweetalert2/dist/sweetalert2.min.js',
            './node_modules/*sweetalert2/dist/sweetalert2.css',

            // jqVmap
            './node_modules/*jqvmap/dist/jquery.vmap.min.js',
            './node_modules/*jqvmap/dist/maps/jquery.vmap.usa.js',
            './node_modules/*jqvmap/dist/jqvmap.css',

            // DataTables
            './node_modules/*datatables/media/js/jquery.dataTables.min.js',

            // DateTimePicker
            './node_modules/*jquery-datetimepicker/build/jquery.datetimepicker.full.min.js',
            './node_modules/*jquery-datetimepicker/jquery.datetimepicker.css',

            // DateRangePicker
            './node_modules/*daterangepicker/daterangepicker.js',
            './node_modules/*daterangepicker/daterangepicker.css',

            // Bootstrap Touchspin
            './node_modules/*bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',

            // Ion Rangeslider
            './node_modules/*ion-rangeslider/js/ion.rangeSlider.min.js',
            './node_modules/*ion-rangeslider/css/ion.rangeSlider.css',

            // Inputmask
            './node_modules/*inputmask/dist/jquery.inputmask.min.js',

            // EasyMDE
            './node_modules/*easymde/dist/easymde.min.js',
            './node_modules/*easymde/dist/easymde.min.css',

            // Pickr
            './node_modules/@simonwep/*pickr/dist/pickr.min.js',
            './node_modules/@simonwep/*pickr/dist/themes/classic.min.css',

            // Dropzone
            './node_modules/*dropzone/dist/min/dropzone.min.js',
            './node_modules/*dropzone/dist/dropzone.css',

            // Selectize
            './node_modules/*selectize/dist/js/standalone/selectize.min.js',
            './node_modules/*selectize/dist/css/selectize.css',

            // Quill
            './node_modules/*quill/dist/quill.min.js',
            './node_modules/*quill/dist/quill.snow.css',
        ],
        to: '{dist}/assets/vendor',
    },
];

// Compile JS.
cfg.compile_webpack_js = {
    '{dist}/assets/js/rootui-init.js': '{src}/js/rootui-init.js',
    '{dist}/assets/js/rootui.js': '{src}/js/rootui.js',
    '{dist}/assets/js/yaybar.js': '{src}/js/yaybar.js',
};

// Compile SCSS.
cfg.compile_webpack_scss = {
    '{dist}/assets/css/rootui.css': '{src}/css/rootui.scss',
    '{dist}/assets/css/rootui-night.css': '{src}/css/rootui-night.scss',
    '{dist}/assets/css/bootstrap-custom.css': '{src}/css/bootstrap-custom.scss',
    '{dist}/assets/css/yaybar.css': '{src}/css/yaybar.scss',
};

// Compile HTML.
cfg.compile_webpack_html = {
    from: '{src}/html/*.njk',
    to: '{dist}',
    renderPath: '{src}/html',
    dataFile: '{src}/html/data/global.json',
    filterData( data, file ) {
        data.filename = path.basename( file );
        data.headerComment = ''; // `<!--\n${data.getHeaderComment()}\n-->`;

        // active menu item for menu
        data.isActiveMenuItem = function( itemFile, item, filename ) {
            if ( itemFile === filename || ( item.sub && item.sub[ filename ] ) ) {
                return true;
            }

            let returnVal = false;

            if ( item.sub ) {
                Object.keys( item.sub ).forEach( ( fileSub ) => {
                    const itemSub = item.sub[ fileSub ];

                    if ( fileSub === filename || ( itemSub.sub && itemSub.sub[ filename ] ) ) {
                        returnVal = true;
                    }
                } );
            }

            return returnVal;
        };

        // set object data
        data.setObjectData = function( obj, key, val ) {
            obj[ key ] = val;
            return obj;
        };

        return data;
    },
};

// Compile Images.
cfg.compile_webpack_images = {
    outputPath: '{dist}/assets/images',
    publicPath: './assets/images',
};

module.exports = cfg;
