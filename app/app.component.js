(function() {
  'use strict';

  var component = {
    template: '<div>' +
    '<app-header></app-header><contents></contents>' +
    '</div>'
  };

  angular.module('app')
      .component('reminderApp', component);
})();
