export const items = [
  {
    title: 'HTML',
    icon: 'mdi-language-html5',
    color: 'deep-orange',
    group: 'pages',
    children: [
      {
        title: 'Blank Page',
        icon: 'mdi-circle-medium',
        to: 'blank',
      },
      // {
      //   title: "Projects",
      //   group: "pages/projects",
      //   // icon: 'mdi-view-dashboard',
      //   children: [
      //     {
      //       title: "Overview",
      //       icon: "mdi-circle-medium",
      //       to: "overview"
      //     }
      //   ]
      // },
    ],
  },
  {
    title: 'CSS',
    icon: 'mdi-language-css3',
    color: 'blue',
    group: 'pages/css',
    children: [
      {
        title: 'Vanila circular menu',
        icon: 'mdi-circle-medium',
        to: 'animated-circular-menu-vanilla',
      },
      {
        title: 'Anime Js background',
        icon: 'mdi-circle-medium',
        to: 'awesome-animejs-background',
      },
    ],
  },

  {
    title: 'JavaScript',
    icon: 'mdi-language-javascript',
    color: 'yellow',
    group: 'pages',
    children: [
      {
        title: 'Blank Page',
        icon: 'mdi-circle-medium',
        to: 'blank',
      },
    ],
  },
]
