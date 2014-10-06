App.controller('CadastroDeClienteController', ['$scope', 'CepService', 'ClimaService', function($scope, CepService, ClimaService) {
    $scope.status = '';
    $scope.dadosdoendereco = null;
    $scope.dadosclimaticos = null;


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
}]);
