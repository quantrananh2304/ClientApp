
import { options } from '../../../common-assets/js/rootui-parts/_options';
import {
    debounceResize, throttleScroll, bodyOverflow, isInViewport,
} from '../../../common-assets/js/rootui-parts/_utility';
import { setOptions } from '../../../common-assets/js/rootui-parts/setOptions';

import { initAjax } from '../../../common-assets/js/rootui-parts/initAjax';
import { initNightMode } from '../../../common-assets/js/rootui-parts/initNightMode';
import { initNavbar } from '../../../common-assets/js/rootui-parts/initNavbar';
import { initDropdown } from '../../../common-assets/js/rootui-parts/initDropdown';
import { initMessenger } from '../../../common-assets/js/rootui-parts/initMessenger';
import { initMailbox } from '../../../common-assets/js/rootui-parts/initMailbox';
import { initTabsSliding } from '../../../common-assets/js/rootui-parts/initTabsSliding';
import { initSpotlightMode } from '../../../common-assets/js/rootui-parts/initSpotlightMode';
import { initSectionLines } from '../../../common-assets/js/rootui-parts/initSectionLines';
import { initToasts } from '../../../common-assets/js/rootui-parts/initToasts';

/* Plugins */
import { initPluginYaybar } from '../../../common-assets/js/rootui-parts/initPluginYaybar';
import { initPluginOverlayScrollbars } from '../../../common-assets/js/rootui-parts/initPluginOverlayScrollbars';
import { initPluginScrollspy } from '../../../common-assets/js/rootui-parts/initPluginScrollspy';
import { initPluginFeather } from '../../../common-assets/js/rootui-parts/initPluginFeather';
import { initPluginIonRangeslider } from '../../../common-assets/js/rootui-parts/initPluginIonRangeslider';
import { initPluginTouchSpin } from '../../../common-assets/js/rootui-parts/initPluginTouchSpin';
import { initPluginDateRangePicker } from '../../../common-assets/js/rootui-parts/initPluginDateRangePicker';
import { initPluginDateTimePicker } from '../../../common-assets/js/rootui-parts/initPluginDateTimePicker';
import { initPluginDataTable } from '../../../common-assets/js/rootui-parts/initPluginDataTable';
import { initPluginJstree } from '../../../common-assets/js/rootui-parts/initPluginJstree';
import { initPluginPickr } from '../../../common-assets/js/rootui-parts/initPluginPickr';
import { initPluginPopover } from '../../../common-assets/js/rootui-parts/initPluginPopover';
import { initPluginHightlight } from '../../../common-assets/js/rootui-parts/initPluginHightlight';
import { initPluginEmojioneArea } from '../../../common-assets/js/rootui-parts/initPluginEmojioneArea';
import { initPluginSortable } from '../../../common-assets/js/rootui-parts/initPluginSortable';
import { initPluginEasymde } from '../../../common-assets/js/rootui-parts/initPluginEasymde';
import { initPluginSweetalert } from '../../../common-assets/js/rootui-parts/initPluginSweetalert';
import { initPluginSwiper } from '../../../common-assets/js/rootui-parts/initPluginSwiper';
import { initPluginInputmask } from '../../../common-assets/js/rootui-parts/initPluginInputmask';
import { initPluginSelectize } from '../../../common-assets/js/rootui-parts/initPluginSelectize';
import { initPluginQuill } from '../../../common-assets/js/rootui-parts/initPluginQuill';
import { initPluginDropzone } from '../../../common-assets/js/rootui-parts/initPluginDropzone';

import { initTransitionFix } from '../../../common-assets/js/rootui-parts/initTransitionFix';

/*------------------------------------------------------------------

  RootUI Class

-------------------------------------------------------------------*/
class ROOTUI {
    constructor() {
        this.options = options;
    }

    init() {
        // prt:sc:dm
        this.initAjax();
        this.initNightMode();
        this.initNavbar();
        this.initDropdown();
        this.initMessenger();
        this.initMailbox();
        this.initTabsSliding();
        this.initSpotlightMode();
        this.initSectionLines();
        this.initToasts();
        this.initPluginIonRangeslider();
        this.initPluginTouchSpin();
        this.initPluginDateRangePicker();
        this.initPluginDateTimePicker();
        this.initPluginDataTable();
        this.initPluginJstree();
        this.initPluginPickr();
        this.initPluginPopover();
        this.initPluginYaybar();
        this.initPluginOverlayScrollbars();
        this.initPluginScrollspy();
        this.initPluginFeather();
        this.initPluginHightlight();
        this.initPluginEmojioneArea();
        this.initPluginSortable();
        this.initPluginEasymde();
        this.initPluginSweetalert();
        this.initPluginSwiper();
        this.initPluginInputmask();
        this.initPluginSelectize();
        this.initPluginQuill();
        this.initPluginDropzone();
        this.initTransitionFix();

        return this;
    }

    setOptions( newOpts ) {
        return setOptions.call( this, newOpts );
    }

    debounceResize( func ) {
        return debounceResize.call( this, func );
    }

    throttleScroll( callback ) {
        return throttleScroll.call( this, callback );
    }

    bodyOverflow( type ) {
        return bodyOverflow.call( this, type );
    }

    isInViewport( $item, returnRect ) {
        return isInViewport.call( this, $item, returnRect );
    }

    initAjax() {
        return initAjax.call( this );
    }

    initNavbar() {
        return initNavbar.call( this );
    }

    initDropdown() {
        return initDropdown.call( this );
    }

    initMessenger() {
        return initMessenger.call( this );
    }

    initMailbox() {
        return initMailbox.call( this );
    }

    initTabsSliding() {
        return initTabsSliding.call( this );
    }

    initNightMode() {
        return initNightMode.call( this );
    }

    initSpotlightMode() {
        return initSpotlightMode.call( this );
    }

    initSectionLines() {
        return initSectionLines.call( this );
    }

    initToasts() {
        return initToasts.call( this );
    }

    initPluginYaybar() {
        return initPluginYaybar.call( this );
    }

    initPluginOverlayScrollbars() {
        return initPluginOverlayScrollbars.call( this );
    }

    initPluginScrollspy() {
        return initPluginScrollspy.call( this );
    }

    initPluginFeather( $context ) {
        return initPluginFeather.call( this, $context );
    }

    initPluginIonRangeslider() {
        return initPluginIonRangeslider.call( this );
    }

    initPluginTouchSpin() {
        return initPluginTouchSpin.call( this );
    }

    initPluginDateRangePicker() {
        return initPluginDateRangePicker.call( this );
    }

    initPluginDateTimePicker() {
        return initPluginDateTimePicker.call( this );
    }

    initPluginDataTable() {
        return initPluginDataTable.call( this );
    }

    initPluginJstree() {
        return initPluginJstree.call( this );
    }

    initPluginPickr() {
        return initPluginPickr.call( this );
    }

    initPluginPopover() {
        return initPluginPopover.call( this );
    }

    initPluginHightlight() {
        return initPluginHightlight.call( this );
    }

    initPluginEmojioneArea() {
        return initPluginEmojioneArea.call( this );
    }

    initPluginSortable() {
        return initPluginSortable.call( this );
    }

    initPluginEasymde() {
        return initPluginEasymde.call( this );
    }

    initPluginSweetalert() {
        return initPluginSweetalert.call( this );
    }

    initPluginSwiper() {
        return initPluginSwiper.call( this );
    }

    initPluginInputmask() {
        return initPluginInputmask.call( this );
    }

    initPluginSelectize() {
        return initPluginSelectize.call( this );
    }

    initPluginQuill() {
        return initPluginQuill.call( this );
    }

    initPluginDropzone() {
        return initPluginDropzone.call( this );
    }


    initTransitionFix() {
        return initTransitionFix.call( this );
    }
}

/*------------------------------------------------------------------

  Init RootUI

-------------------------------------------------------------------*/
window.RootUI = new ROOTUI();
