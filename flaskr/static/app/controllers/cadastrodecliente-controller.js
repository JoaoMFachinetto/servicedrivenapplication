App.controller('CadastroDeClienteController', ['$scope', '$log', 'CepService', 'ClimaService', 'GeoIpService', 'PushBulletService', function($scope, $log, CepService, ClimaService, GeoIpService, PushBulletService) {
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

    $scope.BuscarClimaPorGeoPosicao = function(latitude, longitude){
        ClimaService.OpenWeatherProxy().BuscarClimaPorGeoPosicao(latitude, longitude).success(function(dados){
            $scope.dadosclimaticos = dados;
        });
    };

    $scope.BuscarDadosDoIp = function()
    {
        GeoIpService.GeoIpDataProxy().BuscarDadosDoIp().success(function(dados){
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

    $scope.BuscarDadosDoIp();
    $scope.IniciarPushBullet();

}]);
