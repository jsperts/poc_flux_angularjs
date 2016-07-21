(function() {
  'use strict';

  function ServerCommService(appConfig, $http) {
    this.update = function(dataType, id, data) {
      return $http.put(appConfig.restUrl + dataType + '/' + id, data)
          .then(function(response) {
            return response.data;
          });
    };

    this.add = function(dataType, data) {
      return $http.post(appConfig.restUrl + dataType, data)
          .then(function(response) {
            return response.data;
          });
    };

    this.getAll = function(dataType) {
      return $http.get(appConfig.restUrl + dataType)
          .then(function(response) {
            return response.data;
          });
    };

    this.remove = function(dataType, id) {
      return $http.delete(appConfig.restUrl + dataType + '/' + id);
    };
  }
  ServerCommService.$inject = ['appConfig', '$http'];

  angular.module('app.common')
      .service('serverCommService', ServerCommService);
})();
