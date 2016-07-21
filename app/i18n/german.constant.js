(function() {
  'use strict';

  var translations = {
    TITLE: 'Titel',
    DATE: 'Datum',
    REMINDERS: 'Erinnerungen',
    ADD: 'Hinzufügen',
    DELETE: 'Löschen'
  };

  angular.module('app.i18n')
      .constant('germanConstants', translations);
})();
