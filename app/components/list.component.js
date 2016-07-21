(function() {
  'use strict';

  function Ctrl(remindersStoreService, reminderActionsService, $scope) {
    this.list = [];

    this.removeReminder = function(id) {
      reminderActionsService.remove(id);
    };

    this.updateReminder = function(id, reminder) {
      reminderActionsService.update(id, reminder);
    };

    // Store connection and cleanup
    function changeListener(data) {
      this.list = data;
    }
    var removeChangeListener = remindersStoreService.addListener('CHANGE', changeListener.bind(this));
    $scope.$on('$destroy', function() {
      removeChangeListener();
    });

    // Init
    reminderActionsService.getAll();
  }
  Ctrl.$inject = ['remindersStoreService', 'reminderActionsService', '$scope'];

  var component = {
    templateUrl: './app/components/list.tmpl.html',
    controller: Ctrl
  };
  
  angular.module('app.components')
      .component('list', component);
})();
