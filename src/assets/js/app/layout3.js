'use_strict'

var Layout3 = (function () {
  var initLayout3 = function () {
    var toggleBar = document.querySelector('.ul-header-menu-toggle')
    var overlay = document.querySelector('.ul-sidebar-3-overlay')
    var sidebar = document.querySelector('.sidebar-3')
    toggleBar.addEventListener('click', () => {
      var sidebar = document.querySelector('.sidebar-3')

      if (sidebar) {
        ULUtil.hasClass(sidebar, 'open') ? ULUtil.removeClass(sidebar, 'open') : ULUtil.addClass(sidebar, 'open')
      }
      if (overlay) {
        ULUtil.hasClass(overlay, 'open') ? ULUtil.removeClass(overlay, 'open') : ULUtil.addClass(overlay, 'open')
      }
    })
    if (overlay) {
      overlay.addEventListener('click', () => {
        if (overlay) {
          ULUtil.hasClass(overlay, 'open') ? ULUtil.removeClass(overlay, 'open') : ULUtil.addClass(overlay, 'open')
          ULUtil.hasClass(sidebar, 'open') ? ULUtil.removeClass(sidebar, 'open') : ULUtil.addClass(sidebar, 'open')
        }
      })
    }

    var mainContentWrap3 = document.querySelector('.app-admin-wrap-layout-3')
    var subheader = document.querySelector('.subheader')
    var secondarySidebarLayoutButton = document.querySelector('.secondary-sidebar-layout-settings-button')

    secondarySidebarLayoutButton.addEventListener('click', function () {
      ULUtil.hasClass(mainContentWrap3, 'close-secondary-sidebar') ? ULUtil.removeClass(mainContentWrap3, 'close-secondary-sidebar') : ULUtil.addClass(mainContentWrap3, 'close-secondary-sidebar')
      ULUtil.hasClass(subheader, 'close-secondary-sidebar') ? ULUtil.removeClass(subheader, 'close-secondary-sidebar') : ULUtil.addClass(subheader, 'close-secondary-sidebar')
    })
  }
  return {
    init: function () {
      initLayout3()
    },
  }
})()

jQuery(document).ready(function () {
  Layout3.init()
})
