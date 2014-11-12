App.factory('PushBulletService', ['$http', '$log', function($http, $log) {
    return {
        PushBulletAsyncService: function(){
            return new PushBulletDataproxy($http);
        }
    }
}]);
