(function() {
  'use strict';

  function i18nStoreService(dispatcher, appConfig, $mdDateLocale, $filter, $locale) {
    this._listeners = {};
    this._data = '';

    this._$mdDateLocale = $mdDateLocale;
    this._$locale = $locale;

    $mdDateLocale.formatDate = function(date) {
      return $filter('date')(date);
    };

    function handleAction(action) {
      var actionTypes = appConfig.actionTypes;
      switch (action.type) {
        case actionTypes.SWITCH_LANG: this.handleSwitchLang(action.payload); break;
      }
    }
    dispatcher.register(handleAction.bind(this));
  }

  i18nStoreService.prototype.handleSwitchLang = function(newLang) {
    // Adjust calendar
    this._$mdDateLocale.firstDayOfWeek = this._$locale.DATETIME_FORMATS.FIRSTDAYOFWEEK;
    this._$mdDateLocale.shortMonths = this._$locale.DATETIME_FORMATS.SHORTMONTH;
    this._$mdDateLocale.shortDays = this._$locale.DATETIME_FORMATS.SHORTDAY;
    this._data = newLang;
    this.emit('CHANGE', this._data);
  };

  i18nStoreService.prototype.addListener = function (eventType, cb) {
    if (this._listeners[eventType]) {
      this._listeners[eventType].push(cb);
    } else {
      this._listeners[eventType] = [cb];
    }

    var cbIndex = this._listeners.length - 1;
    var self = this;
    return function removeListener() {
      self._listeners[eventType].splice(cbIndex, 1);
    };
  };

  i18nStoreService.prototype.emit = function (eventType, args) {
    var listeners = this._listeners[eventType];
    if (listeners) {
      listeners.forEach(function(cb) {
        cb(args);
      });
    }
  };

  i18nStoreService.prototype.getInitialData = function() {
    return this._data;
  };

  i18nStoreService.$inject = ['dispatcher', 'appConfig', '$mdDateLocale', '$filter', '$locale'];

  angular.module('app.stores')
      .service('i18nStoreService', i18nStoreService);
})();
