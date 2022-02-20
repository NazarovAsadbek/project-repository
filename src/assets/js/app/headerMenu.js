'use_strict'

var HeaderMenu = (function () {
  var initHeadermenu = function () {
    var body = ULUtil.get('body')
    var headerMenuWrap = ULUtil.getByClass('ul-header-menu-wrap')

    function closeAllSubmenu () {
      const q = body.querySelectorAll('.ul-menu-item--open')
      for (var i = 0; i < q.length; i++) {
        ULUtil.removeClass(q[i], 'ul-menu-item--open')
      }
    }

    document.addEventListener('click', function (e) {
      if (
        ULUtil.hasClass(e.target, 'ul-menu-link') &&
        ULUtil.hasClass(e.target.parentNode, 'ul-menu-item--open')
      ) {
        ULUtil.removeClass(e.target.parentNode, 'ul-menu-item--open')
        e.preventDefault()
      } else if (
        ULUtil.hasClass(e.target, 'ul-menu-link') &&
        ULUtil.hasClass(e.target.parentNode, 'ul-menu-item-submenu')
      ) {
        var menuLink = e.target
        var menuItem = menuLink.parentNode
        ULUtil.addClass(menuItem, 'ul-menu-item--open')
        e.preventDefault()
        console.log('preventDefault')
      } else if (ULUtil.hasClass(e.target, 'ul-menu-link')) {
      } else {
        // Close submenu
        closeAllSubmenu()
      }

      if (
        ULUtil.hasClass(e.target, 'ul-header-menu-toggle') ||
        ULUtil.hasClass(e.target.parentNode, 'ul-header-menu-toggle')
      ) {
        if (ULUtil.hasClass(headerMenuWrap, 'ul-header-menu-wrap--open')) {
          ULUtil.removeClass(headerMenuWrap, 'ul-header-menu-wrap--open')
        } else {
          ULUtil.addClass(headerMenuWrap, 'ul-header-menu-wrap--open')
        }
      }
    })
  }
  return {
    init: function () {
      initHeadermenu()
    },
  }
})()

jQuery(document).ready(function () {
  HeaderMenu.init()
})
