'use_strict'

var Layout4 = (function () {
  var initLayout4 = function () {
    var toggleBar = document.querySelector('.ul-header-menu-toggle')
    var overlay = document.querySelector('.ul-sidebar-4-overlay')
    var sidebar = document.querySelector('.ul-sidebar-4')
    toggleBar.addEventListener('click', () => {
      var sidebar = document.querySelector('.ul-sidebar-4')

      if (sidebar) {
        ULUtil.hasClass(sidebar, 'open')
          ? ULUtil.removeClass(sidebar, 'open')
          : ULUtil.addClass(sidebar, 'open')
      }
      if (overlay) {
        ULUtil.hasClass(overlay, 'open')
          ? ULUtil.removeClass(overlay, 'open')
          : ULUtil.addClass(overlay, 'open')
      }
    })
    if (overlay) {
      overlay.addEventListener('click', () => {
        if (overlay) {
          ULUtil.hasClass(overlay, 'open')
            ? ULUtil.removeClass(overlay, 'open')
            : ULUtil.addClass(overlay, 'open')
          ULUtil.hasClass(sidebar, 'open')
            ? ULUtil.removeClass(sidebar, 'open')
            : ULUtil.addClass(sidebar, 'open')
        }
      })
    }

    // var mainContentWrap4 = document.querySelector('.app-admin-wrap-layout-4');
    // var header = document.querySelector('.ul-header-4');
    // var secondarySidebarLayoutButton = document.querySelector('.secondary-sidebar-layout-settings-button');

    // secondarySidebarLayoutButton.addEventListener("click", function(){

    //   ULUtil.hasClass(header, 'close-secondary-sidebar') ? ULUtil.removeClass(header, 'close-secondary-sidebar') : ULUtil.addClass(header, 'close-secondary-sidebar');
    // });
  }
  return {
    init: function () {
      initLayout4()
    },
  }
})()

jQuery(document).ready(function () {
  Layout4.init()
})
