App.controller('CadastroDeClienteController', ['$scope', '$log', 'CadastroClienteService', 'PushBulletService', function($scope, $log, CadastroClienteService, PushBulletService) {
    $scope.status = '';
    $scope.dadosdoendereco = null;
    $scope.dadosclimaticos = null;
    $scope.dadosdoip = null;

    $scope.BuscarTodosClientes = function()
    {
        CadastroClienteService.PessoaGateway().BuscarTodos().success(function(dados){
            $log.log(dados);
        });
    };

    $scope.ValidarCep = function(cliente){
        CadastroClienteService.WidenetDataproxy().BuscarEnderecoPeloCep(cliente.cep).success(function(dados){
            $scope.dadosdoendereco = dados;
            $scope.BuscarClima(cliente);
        });
    };

    $scope.BuscarClimaPorGeoPosicao = function(latitude, longitude){
        CadastroClienteService.OpenWeatherProxy().BuscarClimaPorGeoPosicao(latitude, longitude).success(function(dados){
            $scope.dadosclimaticos = dados;
        });
    };

    $scope.BuscarDadosDoIp = function()
    {
        CadastroClienteService.GeoIpDataProxy().BuscarDadosDoIp().success(function(dados){
            $scope.dadosdoip = dados;
            $scope.BuscarClimaPorGeoPosicao(dados.latitude, dados.longitude);
        });
    }

    $scope.IniciarPushBullet = function()
    {
           PushBulletService.PushBulletAsyncService().StartAsync(function(e){
               $log.log(e);
           });
    }

    $scope.BuscarTodosClientes();
    $scope.BuscarDadosDoIp();
    $scope.IniciarPushBullet();

}]);
