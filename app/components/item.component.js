(function() {
  'use strict';

  function Ctrl() {
    this.remove = function(id) {
      this.onRemove({id: id});
    };

    // isDone is automatically updated when we check/uncheck
    this.change = function(id, data) {
      data.isDone = !data.isDone;
      this.onChange({id: id, reminder: data});
    };
  }
  var component = {
    templateUrl: './app/components/item.tmpl.html',
    bindings: {
      data: '<',
      onRemove: '&',
      onChange: '&'
    },
    controller: Ctrl
  };
  
  angular.module('app.components')
      .component('item', component);
})();
