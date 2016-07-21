(function() {
  'use strict';

  // Use i18nStoreService to make sure that it is listening when the init action is called
  function runFn(i18nStoreService, appConfig, i18nActionsService) {
    i18nActionsService.init(appConfig.defaultLang);
  }
  runFn.$inject = ['i18nStoreService', 'appConfig', 'i18nActionsService'];

  angular.module('app')
      .run(runFn);
})();
