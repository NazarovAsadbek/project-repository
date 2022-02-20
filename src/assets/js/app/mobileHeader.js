'use_strict'

var MobileHeader = (function () {
  var initMobileHeader = function () {
      var toggleHeader = document.querySelector('.ul-mobile-header-toggle')
      var topBar = document.querySelector('.ul-header-topbar')

      if (toggleHeader) {
        toggleHeader.addEventListener('click', function (e) {
          if (topBar) {
            ULUtil.hasClass(topBar, 'open') ? ULUtil.removeClass(topBar, 'open') : ULUtil.addClass(topBar, 'open')
          }
        })
      }
  }
  return {
    init: function () {
      initMobileHeader()
    },
  }
})()

jQuery(document).ready(function () {
  MobileHeader.init()
})
