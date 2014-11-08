var App = angular.module('App',[]);

App.filter("fromunixtime", function(){
    return function(data){
        return new Date(data * 1000).toLocaleDateString();
    };
});

App.filter("fromisodate", function(){
    return function(data){
        return new Date(data).toLocaleDateString();
    };
});

App.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[%');
  $interpolateProvider.endSymbol('%]');
});
