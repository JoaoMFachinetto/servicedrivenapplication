App.controller('CadastroDeClienteController', ['$scope', '$log', 'CSG', function($scope, $log, CSG) {
    $scope.status = '';
    $scope.dadosdoendereco = null;
    $scope.dadosclimaticos = null;
    $scope.dadosdoip = null;

    $scope.BuscarTodosClientes = function()
    {
        CSG.PessoaGateway().BuscarTodos().success(function(dados){
            $log.log(dados);
        });
    };

    $scope.ValidarCep = function(cliente){
        CSG.WidenetDataproxy().BuscarEnderecoPeloCep(cliente.cep).success(function(dados){
            $scope.dadosdoendereco = dados;
            $scope.BuscarClima(cliente);
        });
    };

    $scope.BuscarClimaPorGeoPosicao = function(latitude, longitude){
        CSG.OpenWeatherProxy().BuscarClimaPorGeoPosicao(latitude, longitude).success(function(dados){
            $scope.dadosclimaticos = dados;
        });
    };

    $scope.BuscarDadosDoIp = function()
    {
        CSG.GeoIpDataProxy().BuscarDadosDoIp().success(function(dados){
            $scope.dadosdoip = dados;
            $scope.BuscarClimaPorGeoPosicao(dados.latitude, dados.longitude);
        });
    }

    $scope.BuscarTodosClientes();
    $scope.BuscarDadosDoIp();

}]);
