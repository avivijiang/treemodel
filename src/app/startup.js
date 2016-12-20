define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {

  window.ko = ko;
  window.globle_var = {
    ctx: '/TreeModel'
  }

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('m-table', { require: 'components/table/table' });
  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
