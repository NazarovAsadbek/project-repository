'use_strict'

var UlSearch = (function () {
  var adminWrap = document.querySelector("div[class^='app-admin-wrap-layout']")
  var searchInput = document.querySelector('#app-search')

  var initFullWidthSearchInput = function () {
    var wrapper = document.querySelector('.ul-search-full-width')
    var toggle = document.querySelectorAll('.toggle-search')

    if (toggle.length) {
      toggle.forEach((t) => {
        t.addEventListener('click', function (e) {
          if (ULUtil.hasClass(wrapper, 'open')) {
            ULUtil.removeClass(wrapper, 'open')

            // Clean input & trigger event so that autosuggest can detect
            searchInput.value = ''
            ULUtil.triggerCustomEvent(searchInput, 'change')
          } else {
            ULUtil.addClass(wrapper, 'open')
            searchInput.focus()
          }
        })
      })
    }
  }

  var initUlSearch = function () {
    if (!searchInput) {
      return
    }
    new autoComplete({
      data: {
        // Data src [Array, Function, Async] | (REQUIRED)
        src: async () => {
          const source = await fetch(
            '../../dist-assets/js/data/template-list.json',
          )
          // Format data into JSON
          const data = await source.json()
          // Return Fetched data
          return data
        },
        key: ['name'],
        cache: false,
      },

      sort: (a, b) => {
        if (a.match < b.match) return -1
        if (a.match > b.match) return 1
        return 0
      },
      placeHolder: 'Explore Egret (e.g. drag and drop)',
      selector: '#app-search',
      threshold: 1,
      debounce: 300,
      searchEngine: 'loose',
      resultsList: {

        render: true,
        container: (source) => {
          source.setAttribute('id', 'result_list')
        },
        destination: document.querySelector('.search-result'),
        position: 'afterbegin',
        element: 'ul',
      },
      maxResults: 15,
      highlight: true,
      resultItem: {

        content: (data, source) => {
          source.innerHTML = `<a href="${
            data.value.link
          }"><i class="material-icons">${
            data.value.icon || 'trending_flat'
          }</i>${data.match}</a>`
        },
        element: 'li',
      },
      trigger: {
        event: ['input', 'change'],
        condition: (query) => {
          query
            ? ULUtil.addClass(adminWrap, 'search-result-open')
            : ULUtil.removeClass(adminWrap, 'search-result-open')

          return query
        },
      },
      // noResults: () => {                     // Action script on noResults      | (Optional)
      //     const result = document.createElement("li");
      //     result.setAttribute("class", "no_result");
      //     result.setAttribute("tabindex", "1");
      //     result.innerHTML = "No Results";
      //     document.querySelector(".search-result").appendChild(result);
      // },
      onSelection: (feedback) => {
        // Action script onSelection event | (Optional)
        window.location.replace(feedback.selection.value.link)
      },
    })
  }
  return {
    init: function () {
      initFullWidthSearchInput()
      initUlSearch()
    },
  }
})()

jQuery(document).ready(function () {
  UlSearch.init()
})
