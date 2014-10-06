App.factory('CepService', ['$http', function($http) {
    var WidenetCepProxy = new WidenetCepDataproxy($http);
    return {
        WidenetDataproxy: function(cep){
            return WidenetCepProxy;
        }
    }
}]);
