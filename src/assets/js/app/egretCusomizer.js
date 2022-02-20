'use_strict'

var EgretCustomizer = (function () {
  var secondarySidebarLayout = document.querySelector(
    '.secondary-sidebar-layout-settings',
  )

  // customizer
  var egretCustomSettings = document.querySelector(
    '.sidebar-customizer-settings',
  )
  var egretCustomizer = document.querySelector('.egret-customizer')
  var egretCustomizerClose = document.querySelector('.customizer-close')

  var closeCustomizer = function () {
    ULUtil.removeClass(egretCustomizer, 'show')
    ULUtil.removeClass(egretCustomizer, 'collapse')
  }

  var initEgretCustomizer = function () {
    if (!egretCustomizer) {
      return
    }
    egretCustomSettings.addEventListener('click', function () {
      if (egretCustomizer) {
        ULUtil.hasClass(egretCustomizer, 'show')
          ? ULUtil.removeClass(egretCustomizer, 'show')
          : ULUtil.addClass(egretCustomizer, 'show')
      }
    })

    egretCustomizerClose.addEventListener('click', function () {
      closeCustomizer()
    })

    // egret customizer color sidebar-theme

    var addColors = document.querySelectorAll('[data-sidebar-color]')
    var adminWrapLayout1 = document.querySelector('.app-admin-wrap-layout-1')

    addColors.forEach(element => {
      element.addEventListener('click', function () {
        var sidebarThemeClass = ULUtil.attr(element, 'data-sidebar-color')
        ULUtil.removeClassByPrefix(adminWrapLayout1, 'sidebar-theme')
        ULUtil.addClass(adminWrapLayout1, sidebarThemeClass)
      })
    })

    secondarySidebarLayout.addEventListener(
      'secondarySidebarClose',
      function () {
        closeCustomizer()
      },
    )
  }

  return {
    init: function () {
      initEgretCustomizer()
    },
  }
})()

jQuery(document).ready(function () {
  EgretCustomizer.init()
})
