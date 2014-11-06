App.controller('CadastroDeClienteController', ['$scope', 'CepService', 'ClimaService', 'GeoIpService', function($scope, CepService, ClimaService, GeoIpService) {
    $scope.status = '';
    $scope.dadosdoendereco = null;
    $scope.dadosclimaticos = null;
    $scope.dadosdoip = null;


    $scope.ValidarCep = function(cliente){
        CepService.WidenetDataproxy().BuscarEnderecoPeloCep(cliente.cep).success(function(dados){
            $scope.dadosdoendereco = dados;
            $scope.BuscarClima(cliente);
        });
    };

    $scope.BuscarClima = function(cliente){
        ClimaService.OpenWeatherProxy().BuscarClimaPorCep(cliente.cep).success(function(dados){
            $scope.dadosclimaticos = dados;
        });
    };

    $scope.BuscarDadosDoIp = function()
    {
        GeoIpService.GeoIpDataProxy().BuscarDadosDoIp().success(function(dados){
            $scope.dadosdoip = dados;
        });
    }

    $scope.BuscarDadosDoIp();

}]);
