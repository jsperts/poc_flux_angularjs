(function() {
  'use strict';

  var translations = {
    TITLE: 'Title',
    DATE: 'Date',
    REMINDERS: 'Reminders',
    ADD: 'Add',
    DELETE: 'Delete'
  };

  angular.module('app.i18n')
      .constant('englishConstants', translations);
})();
