(function () {
  'use strict';

  function translationConfig($translateProvider, englishConstants, germanConstants) {
    $translateProvider
        .translations('en', englishConstants)
        .translations('de', germanConstants);
    $translateProvider.useSanitizeValueStrategy('escape');
  }
  translationConfig.$inject = ['$translateProvider', 'englishConstants', 'germanConstants'];

  function localeConfig(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('/app/i18n/locales/{{locale}}.js')
  }
  localeConfig.$inject = ['tmhDynamicLocaleProvider'];

  angular.module('app.i18n')
      .config(translationConfig)
      .config(localeConfig);
})();
