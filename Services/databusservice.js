App.factory('DataBusService', ['$http', function($http) {
  return function(cep){
      return $http.get('http://localhost:8080/io/api/getevents/53faa6dea195f30d9b7f9c71');
  };
}]);
