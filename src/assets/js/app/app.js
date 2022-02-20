import * as ULUtils from './utils'
import './headerMenu'
import './wizard'
import './sidebarPanel'
import './mobileHeader'
import './stickyHeader'
import './secondarySidebar'
import './search'
import './egretCusomizer'
import './layout1'
import './layout2'
import './layout3'
import './layout4'

var Egret = (function () {
  var initEgret = function () {
    // Material Design
    $('body').bootstrapMaterialDesign()

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // Popover
    $('[data-toggle="popover"]').each(function () {
      var popoverClass = ''
      if ($(this).data('color')) {
        popoverClass = 'popover-' + $(this).data('color')
      }
      $(this).popover({
        trigger: 'focus',
        template:
          '<div class="popover ' +
          popoverClass +
          '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })
    })

    // Metis menu
    $('#menu1').metisMenu()

    // Perfect scrollbar
    $('.perfect-scrollbar, [data-perfect-scrollbar]').each(function (index) {
      var $el = $(this)
      var ps = new PerfectScrollbar(this, {
        suppressScrollX: $el.data('suppress-scroll-x'),
        suppressScrollY: $el.data('suppress-scroll-y'),
      })
    })

    // Sidenav consistant position
    const scrollNav = document.querySelector('.scroll-nav')
    if (scrollNav) {
      scrollNav.scrollTop = localStorage.getItem('ul_navigation_pos') || 0
      scrollNav.addEventListener(
        'ps-scroll-y',
        ULUtil.debounce((e) => {
          localStorage.setItem('ul_navigation_pos', e.target.scrollTop)
        }, 100),
      )
    }

    // feathericon
    if (window.feather) {
      feather.replace()
    }
  }
  return {
    init: function () {
      initEgret()
    },
  }
})()

jQuery(document).ready(function () {
  Egret.init()
})
