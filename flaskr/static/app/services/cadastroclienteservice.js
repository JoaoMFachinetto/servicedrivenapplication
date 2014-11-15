App.factory('CadastroClienteService', ['$http', function($http) {
    var WidenetCepProxy = new WidenetCepDataproxy($http);
    var OpenWheather = new OpenWeatherDataproxy($http);
    var IpDataProxy = new GeoIpDataproxy($http);

    var PessoaDataGateway = new PessoaGateway($http);

    return {
        WidenetDataproxy: function(cep){
            return WidenetCepProxy;
        },
        OpenWeatherProxy: function(cep){
            return OpenWheather;
        },
        GeoIpDataProxy: function(){
            return IpDataProxy;
        },
        PessoaGateway: function(){
            return PessoaDataGateway;
        }
    }


}]);
