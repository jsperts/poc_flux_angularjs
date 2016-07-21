(function() {
  'use strict';

  var component = {
    template: '<md-content><add-item></add-item><list></list></md-content>'
  };
  
  angular.module('app.components')
      .component('contents', component);
})();
