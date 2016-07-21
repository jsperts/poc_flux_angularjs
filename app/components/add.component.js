(function() {
  'use strict';

  var reminder = {
    title: '',
    date: '',
    isDone: false
  };

  function Ctrl(reminderActionsService) {
    this.reminder = angular.copy(reminder);

    this.add = function() {
      reminderActionsService.add(this.reminder);
      this.reminder = angular.copy(reminder);
    };
  }
  Ctrl.$inject = ['reminderActionsService'];

  var component = {
    templateUrl: './app/components/add.tmpl.html',
    controller: Ctrl
  };
  
  angular.module('app.components')
      .component('addItem', component);
})();
