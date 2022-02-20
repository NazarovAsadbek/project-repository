<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>
<script>
export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "#661c23",
        collapseButtonCloseColor: "#661c23",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Dashboard",
            iconLeft: '<i class="mdi mdi-view-dashboard"></i>',
            subMenuOptions: [
              {
                type: "link",
                text: "Learning Management",
                path: { name: "learning-management" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },

              {
                type: "link",
                text: "Job Management",
                path: { name: "job-management" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Analytic",
                path: { name: "analytic" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Cryptocurrency",
                path: { name: "crypto-currency" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Sales",
                path: { name: "sales" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Subscription",
                path: { name: "donation" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
            ],
          },
          {
            type: "link",
            text: "Invoice",
            iconLeft: '<i class="mdi mdi-book-open-page-variant"></i>',
            subMenuOptions: [
              {
                type: "link",
                text: "Invoice Ver 1",
                path: { name: "invoice-ver-one" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Invoice Ver 2",
                path: { name: "invoice-ver-two" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Edit Invoice",
                path: { name: "edit-invoice" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
            ],
          },
          {
            type: "link",
            text: "Datatable",
            iconLeft: '<i class="mdi mdi-folder-table"></i>',
            subMenuOptions: [
              {
                type: "link",
                text: "DataIterators",
                path: { name: "dataIterators" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "SimpleTables",
                path: { name: "simpleTables" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "DataTables",
                path: { name: "dataTables" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
            ],
          },
          {
            type: "link",
            text: "UI Kits",
            iconLeft: '<i class="mdi mdi-cogs"></i>',
            subMenuOptions: [
              {
                type: "link",
                text: "Button",
                path: { name: "button" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Avatar",
                path: { name: "avatar" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Alerts",
                path: { name: "alerts" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Accordion",
                path: { name: "accordion" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Badge",
                path: { name: "badge" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Chips",
                path: { name: "chips" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Snackbar",
                path: { name: "snackbar" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Sparklines",
                path: { name: "sparklines" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Stepper",
                path: { name: "stepper" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Tooltip",
                path: { name: "tooltip" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "Treeview",
                path: { name: "treeview" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
              {
                type: "link",
                text: "FileInputs",
                path: { name: "fileInputs" },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.vnb {
  &__menu-options {
    &__option {
      &__link {
        &:focus {
          outline: none;
          border: 1px solid none;
        }
        &:hover {
          color: #0081ff;
          .vnb__menu-options__option__arrow {
            fill: #0081ff;
          }
        }

        &__icon {
          svg {
            fill: #0081ff !important;
          }
        }
      }
    }
  }

  &__sub-menu-options {
    &__option {
      &__link {
        &:focus {
          outline: none;
          border: 1px solid none;
        }
        color: #000 !important;
        &:hover {
          color: #0081ff !important;
        }
      }
    }
  }
}

.vnb__collapse-button {
  &:focus {
    border: 1px solid none;
    outline: none;
  }
  &:after {
    content: "\F035C";
    font-size: 25px;
    font-weight: 600;
    font-family: "Material Design Icons";
  }
  svg {
    display: none !important;
  }
}

.vnb__popup {
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll !important;
  .vnb__popup__top__close-button {
    &:focus {
      border: 1px solid none;
      outline: none;
    }
    top: 20px;
    right: -33px;
    svg {
      fill: #000 !important;
    }
  }
}
</style>