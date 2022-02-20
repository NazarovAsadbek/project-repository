'use_strict'

var StickyHeader = (function () {
  var initStickyHeader = function () {
    var body = ULUtil.get('body')
    window.addEventListener('scroll', () => {
      var header = document.querySelector('.ul-header-navigation')
      var yOffset = window.pageYOffset

        if (yOffset > 300 && !ULUtil.isInResponsiveRange('tablet-and-mobile')) {
          body.classList.add('sticky-header')
        } else {
          body.classList.remove('sticky-header')
        }
    })
  }
  return {
    init: function () {
      initStickyHeader()
    },
  }
})()

jQuery(document).ready(function () {
  StickyHeader.init()
})
