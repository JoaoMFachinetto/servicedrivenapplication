App.factory('ClimaService', ['$http', function($http) {
    var OpenWheather = new OpenWeatherDataproxy($http)
    return {
        OpenWeatherProxy: function(cep){
            return OpenWheather;
        }
    }
}]);
