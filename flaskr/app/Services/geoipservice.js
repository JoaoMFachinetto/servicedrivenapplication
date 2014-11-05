App.factory('GeoIpService', ['$http', function($http) {
  return function(cep){
      return $http.get('http://www.telize.com/geoip');
  };
}]);
