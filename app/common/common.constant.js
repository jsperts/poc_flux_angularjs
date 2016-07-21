(function() {
  'use strict';
  
  var actionTypes = {
    ADD: 'ADD',
    GET_ALL: 'GET_ALL',
    UPDATE: 'UPDATE',
    REMOVE: 'REMOVE',
    SWITCH_LANG: 'SWITCH_LANG'
  };
  
  var appConfig = {
    defaultLang: 'en',
    restUrl: 'http://localhost:8081/',
    actionTypes: actionTypes
  };
  
  angular.module('app.common')
      .constant('appConfig', appConfig);
})();
