(function () {
    'use strict';

    angular
        .module('app')
        .factory('coffeeSpotService', coffeeSpotService);

    coffeeSpotService.$inject = ['$http'];

    function coffeeSpotService($http) {
        var service = {
            getCoffeeSpots: getCoffeeSpots,
            addCoffeeSpot: addCoffeeSpot,
            saveCoffeeSpot: saveCoffeeSpot
        };

        function getCoffeeSpots() {
            return $http({ method: 'GET', url: '/api/coffeespots' });
        }

        function addCoffeeSpot(coffeeSpot) {
            return $http({ method: 'POST', data: coffeeSpot, url: '/api/coffeespots' });
        }

        function saveCoffeeSpot(coffeeSpot) {
            return $http({ method: 'PUT', data: coffeeSpot, params: { Id: coffeeSpot.Id }, url: '/api/coffeespots/' });
        }

        return service;
    }
})();