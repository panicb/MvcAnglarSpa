(function () {
    angular
        .module("app", ['ngRoute'])
        .config(routeConfiguration);

    function routeConfiguration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app_js/home/home.html',
            })
            .when('/coffeespots', {
                templateUrl: 'app_js/coffeespots/coffeespots.html',
            })
            .otherwise({ redirectTo: '/' });
    }
})();