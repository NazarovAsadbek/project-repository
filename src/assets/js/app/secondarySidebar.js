'use_strict'

var SecondarySidebar = (function () {
  var adminWrap = document.querySelector("div[class^='app-admin-wrap-layout']")

  var initSecondarySidebar = function () {
    // Layout script
    var secondarySidebarLayoutButton = document.querySelector(
      '.secondary-sidebar-layout-settings-button',
    )
    var secondarySidebarLayout = document.querySelector(
      '.secondary-sidebar-layout-settings',
    )
    var sidebarCloseEvent = new Event('secondarySidebarClose')

    if (!secondarySidebarLayout) {
      return
    }
    secondarySidebarLayoutButton.addEventListener('click', function () {
      if (secondarySidebarLayout) {
        ULUtil.addClass(secondarySidebarLayout, 'close-secondary-sidebar')

        if (ULUtil.hasClass(adminWrap, 'secondary-sidebar-open')) {
          ULUtil.removeClass(adminWrap, 'secondary-sidebar-open')
          secondarySidebarLayout.dispatchEvent(sidebarCloseEvent)
        } else {
          ULUtil.addClass(adminWrap, 'secondary-sidebar-open')
        }
      }
    })
  }

  return {
    init: function () {
      initSecondarySidebar()
    },
  }
})()

jQuery(document).ready(function () {
  SecondarySidebar.init()
})
