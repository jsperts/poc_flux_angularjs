(function () {
  'use strict';

  function ReminderActionsService(appConfig, serverCommService, dispatcher) {
    var actionTypes = appConfig.actionTypes;
    var dataType = 'reminders';

    this.add = function (reminder) {
      serverCommService.add(dataType, reminder)
          // serverReminder has id set from server
          .then(function (serverReminder) {
            dispatcher.dispatch({
              type: actionTypes.ADD,
              payload: serverReminder
            });
          }).catch(function () {
        console.log('Some error');
      });
    };

    this.remove = function (id) {
      serverCommService.remove(dataType, id)
          .then((function () {
            dispatcher.dispatch({
              type: actionTypes.REMOVE,
              payload: id
            });
          }))
          .catch(function() {
            console.log('Some error');
          });
    };

    this.getAll = function () {
      serverCommService.getAll(dataType)
          .then(function (reminders) {
            dispatcher.dispatch({
              type: actionTypes.GET_ALL,
              payload: reminders
            });
          })
          .catch(function () {
            console.log('Some error');
          });
    };

    this.update = function (id, reminder) {
      serverCommService.update(dataType, id, reminder)
          .then((function(reminder) {
            dispatcher.dispatch({
              type: actionTypes.UPDATE,
              payload: reminder
            });
          }))
          .catch(function() {
            console.log('Some error');
          });
    };
  }

  ReminderActionsService.$inject = ['appConfig', 'serverCommService', 'dispatcher'];

  angular.module('app.actions')
      .service('reminderActionsService', ReminderActionsService);
})();
