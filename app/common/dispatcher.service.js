(function() {
  'use strict';

  // No need to remove listeners. The stores which register with the dispatcher will never be removed from scope
  function Dispatcher() {
    this._listeners = [];
  }

  Dispatcher.prototype.register = function(cb) {
    this._listeners.push(cb);
  };

  Dispatcher.prototype.dispatch = function(action) {
    this._listeners.forEach(function(cb) {
      cb(action);
    });
  };

  angular.module('app.common')
      .service('dispatcher', Dispatcher);
})();
