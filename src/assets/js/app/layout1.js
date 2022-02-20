'use_strict'

var Layout1 = (function () {
  var initLayout1 = function () {
     // Layout script
  var $body = $('body')
  var $appAdminWrap = $('.app-admin-wrap-layout-1')
  var $sidebarPanel = $('.sidebar-panel')
  var $sidebarFullToggle = $('.sidebar-full-toggle')
  var $sidebarCompactToggle = $('.sidebar-compact-switch')

  function openSidebarFull () {
    $appAdminWrap.removeClass('sidebar-closed')
    $appAdminWrap.addClass('sidebar-full')
  }
  function closeSidebarFull () {
    $appAdminWrap.addClass('sidebar-closed')
    $appAdminWrap.removeClass('sidebar-full')
  }
  function openSidebarCompact () {
    $appAdminWrap.addClass('sidebar-compact')
  }
  function closeSidebarCompact () {
    $appAdminWrap.removeClass('sidebar-compact')
  }
  function toggleOnHover () {
    closeSidebarCompact()
    $appAdminWrap.toggleClass('sidebar-compact-onhover')
  }
  function toggleOverlay () {
    if ($body.find('.ul-overlay').length) {
      $('.ul-overlay').remove()
    } else {
      $body.append(
        $('<div class="ul-overlay">').css({
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0, .1)',
          zIndex: 10,
        }),
      )
    }
  }

  $sidebarFullToggle.on('click', function () {
    $appAdminWrap.toggleClass('sidebar-mobile')
    toggleOverlay()
  })

  $(document).on('click', '.ul-overlay', function () {
    $appAdminWrap.toggleClass('sidebar-mobile')
    toggleOverlay()
  })

  $sidebarCompactToggle.on('click', function () {
    toggleOnHover()
  })

  $sidebarPanel
    .on('mouseenter', function (e) {
      if ($appAdminWrap.hasClass('sidebar-compact-onhover')) {
        closeSidebarCompact()
        openSidebarFull()
      }
    })
    .on('mouseleave', function (e) {
      if ($appAdminWrap.hasClass('sidebar-compact-onhover')) {
        closeSidebarFull()
        openSidebarCompact()
      }
    })
  }

  return {
    init: function () {
      initLayout1()
    },
  }
})()

jQuery(document).ready(function () {
  Layout1.init()
})
