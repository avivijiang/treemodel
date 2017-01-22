define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections', 'vue'], function ($, ko, router, Vue) {

  window.ko = ko;
  window.globle_var = {
    ctx: '/TreeModel'
  }

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('m-table', { require: 'components/table/table' });
  ko.components.register('m-menu', { require: 'components/menu/menu' });
  //Vue.component('m-vue', { require: 'components/vuedemo/vuedemo' });
  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
