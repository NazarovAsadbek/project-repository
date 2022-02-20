'use_strict'

var LayoutTwo = (function () {
  var initLayoutTwo = function () {

    // var mainContentWrap2 = document.querySelector('.app-admin-wrap-layout-2');
    // var secondarySidebarLayout = document.querySelector('.secondary-sidebar-layout-settings');
    // var secondarySidebarLayoutButton = document.querySelector('.secondary-sidebar-layout-settings-button');

    // secondarySidebarLayoutButton.addEventListener("click", function(){
    //   ULUtil.hasClass(mainContentWrap2, 'close-secondary-sidebar') ? ULUtil.removeClass(mainContentWrap2, 'close-secondary-sidebar') : ULUtil.addClass(mainContentWrap2, 'close-secondary-sidebar');
    // });

  }
  return {
    init: function () {
      initLayoutTwo()
    },
  }
})()

jQuery(document).ready(function () {
  LayoutTwo.init()
})
