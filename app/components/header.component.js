(function() {
  'use strict';

  function Ctrl(i18nActionsService, i18nStoreService, $scope) {
    this.lang = '';

    this.switchLang = function() {
      i18nActionsService.switchLang(this.lang);
    };

    function changeListener(data) {
      this.lang = data;
    }

    var removeChangeListener = i18nStoreService.addListener('CHANGE', changeListener.bind(this));

    $scope.$on('$destroy', function() {
      removeChangeListener();
    });

    // Init
    this.lang = i18nStoreService.getInitialData();
  }
  Ctrl.$inject = ['i18nActionsService', 'i18nStoreService', '$scope'];

  var component = {
    templateUrl: './app/components/header.tmpl.html',
    controller: Ctrl
  };

  angular.module('app.components')
      .component('appHeader', component);
})();
