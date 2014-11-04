App.controller('DataBusController', ['$scope', 'DataBusService', function($scope, DataBusService) {
    $scope.eventos = {};


    $scope.BuscarEventos = function(cliente){
        DataBusService().success(function(dados){
            $scope.eventos = dados;
        });
    };
}]);
