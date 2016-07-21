(function() {
  'use strict';
  
  function i18nActionsService($translate, dispatcher, appConfig, $rootScope, tmhDynamicLocale) {
    var newLang = '';
    var langChanged = false;
    var localeChanged = false;

    function dispatch() {
      if (langChanged && localeChanged) {
        dispatcher.dispatch({
          type: appConfig.actionTypes.SWITCH_LANG,
          payload: newLang
        });
      }
    }

    $rootScope.$on('$translateChangeSuccess', function() {
      langChanged = true;
      dispatch();
    });

    $rootScope.$on('$localeChangeSuccess', function() {
      localeChanged = true;
      dispatch();
    });

    this.switchLang = function(lang) {
      newLang = lang;
      $translate.use(newLang);
      tmhDynamicLocale.set(newLang);
    };

    this.init = function(lang) {
      this.switchLang(lang);
    };
  }
  i18nActionsService.$inject = ['$translate', 'dispatcher', 'appConfig', '$rootScope', 'tmhDynamicLocale'];
  
  angular.module('app.actions')
      .service('i18nActionsService', i18nActionsService);
})();
