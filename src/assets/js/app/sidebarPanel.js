'use_strict'

var SidebarPanel = (function () {
  var initSidebarPanel = function () {
    var overlay = document.querySelector('.ul-sidebar-panel-overlay')
    var toggleButtons = document.querySelectorAll('[data-sidebar-panel]')
    var sidebarPanels = document.querySelectorAll('.ul-sidebar-panel')

    toggleButtons.forEach(element => {
      element.addEventListener('click', function (e) {
        var sidebarPanel = document.getElementById(ULUtil.attr(element, 'data-sidebar-panel'))

        if (sidebarPanel) {
          ULUtil.hasClass(sidebarPanel, 'open') ? ULUtil.removeClass(sidebarPanel, 'open') : ULUtil.addClass(sidebarPanel, 'open')
        }

        if (overlay) {
          ULUtil.hasClass(overlay, 'open') ? ULUtil.removeClass(overlay, 'open') : ULUtil.addClass(overlay, 'open')
        }
      })
    })
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        sidebarPanels.forEach(element => {
          ULUtil.removeClass(element, 'open')
        })
        ULUtil.removeClass(e.target, 'open')
      })
    }

    var sidebarClose = document.querySelectorAll('.ul-sidebar-panel-close')

    sidebarClose.forEach(element => {
      element.addEventListener('click', function (e) {
        var parent = e.target.closest('.ul-sidebar-panel')
        ULUtil.removeClass(parent, 'open')
        ULUtil.removeClass(overlay, 'open')
      })
    })
  }
  return {
    init: function () {
      initSidebarPanel()
    },
  }
})()

jQuery(document).ready(function () {
  SidebarPanel.init()
})
