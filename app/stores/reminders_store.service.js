(function() {
  'use strict';

  function RemindersStoreService(dispatcher, appConfig) {
    this._listeners = {};
    this._data = [];

    function handleAction(action) {
      var actionTypes = appConfig.actionTypes;
      switch (action.type) {
        case actionTypes.GET_ALL: this.handleGetAll(action.payload); break;
        case actionTypes.ADD: this.handleAdd(action.payload); break;
        case actionTypes.UPDATE: this.handleUpdate(action.payload); break;
        case actionTypes.REMOVE: this.handleRemove(action.payload); break;
      }
    }
    dispatcher.register(handleAction.bind(this));
  }

  RemindersStoreService.prototype.handleGetAll = function(data) {
    this._data = data;
    this.emit('CHANGE', this._data);
  };

  RemindersStoreService.prototype.handleAdd = function(data) {
    this._data.push(data);
    this.emit('CHANGE', this._data);
  };

  RemindersStoreService.prototype.handleRemove = function(id) {
    var reminderToDelete = this._data.filter(function(reminder) {
      return reminder.id === id;
    })[0];
    var index = this._data.indexOf(reminderToDelete);
    if (index > -1) {
      this._data.splice(index, 1);
    }
    this.emit('CHANGE', this._data);
  };

  RemindersStoreService.prototype.handleUpdate = function(data) {
    var id = data.id;
    var reminderToUpdate = this._data.filter(function(reminder) {
      return reminder.id === id;
    })[0];
    var index = this._data.indexOf(reminderToUpdate);
    if (index > -1) {
      this._data[index] = data;
    }

    this.emit('CHANGE', this._data);
  };

  RemindersStoreService.prototype.addListener = function (eventType, cb) {
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

  RemindersStoreService.prototype.emit = function (eventType, args) {
    var listeners = this._listeners[eventType];
    if (listeners) {
      listeners.forEach(function(cb) {
        cb(args);
      });
    }
  };

  RemindersStoreService.$inject = ['dispatcher', 'appConfig'];
  
  angular.module('app.stores')
      .service('remindersStoreService', RemindersStoreService);
})();
