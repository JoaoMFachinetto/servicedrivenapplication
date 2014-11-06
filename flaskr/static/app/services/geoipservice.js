App.factory('GeoIpService', ['$http', function($http) {
  var IpDataProxy = new GeoIpDataproxy($http)
    return {
        GeoIpDataProxy: function(){
            return IpDataProxy;
        }
    }
}]);
