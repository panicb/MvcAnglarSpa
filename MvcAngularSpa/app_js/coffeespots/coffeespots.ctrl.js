(function () {
    'use strict';

    angular
        .module('app')
        .controller('coffeeSpotsCtrl', coffeeSpotsCtrl);

    function coffeeSpotsCtrl(coffeeSpotService) {
        /* jshint validthis: true */
        var vm = this;

        vm.isAdd = false;

        vm.coffeeSpotToAdd = null;
        vm.coffeeSpotToEdit = null;

        vm.coffeeSpots = [];

        vm.addCoffeeSpot = addCoffeeSpot;
        vm.saveCoffeeSpot = saveCoffeeSpot;
        vm.editCoffeeSpot = editCoffeeSpot;
        vm.cancelEdit = cancelEdit;

        vm.getTemplateToDisplay = getTemplateToDisplay;

        activate();

        function activate() {
            getCoffeeSpots();
        }

        function getCoffeeSpots() {
            coffeeSpotService.getCoffeeSpots()
                .then(function (data) {
                    if (data) {
                        vm.coffeeSpots = data.data;
                    }
                }, function (error) {
                    //show error message
                });
        }

        function addCoffeeSpot() {
            if (vm.isAdd && vm.coffeSpotToAddForm.$valid) {
                coffeeSpotService.addCoffeeSpot(vm.coffeeSpotToAdd)
                    .then(function (data) {
                        //success
                        vm.coffeeSpots.push(data.data);
                        vm.coffeeSpotToAdd = null;
                    }, function (error) {
                        //show error message
                    });
            }
        }

        function saveCoffeeSpot() {
            if (vm.cofeeSpotEditForm.$valid) {
                coffeeSpotService.saveCoffeeSpot(vm.coffeeSpotToEdit)
                    .then(function (data) {
                        //success
                        vm.test = data;
                        vm.coffeeSpotToEdit = null;
                    }, function (error) {
                        //show error message
                    });
            }
        }

        function editCoffeeSpot(coffeSpot) {
            vm.coffeeSpotToEdit = angular.copy(coffeSpot);
        }

        function cancelEdit() {
            vm.coffeeSpotToEdit = null;
        }

        function getTemplateToDisplay(coffeeSpot) {
            if (vm.coffeeSpotToEdit && coffeeSpot.Id === vm.coffeeSpotToEdit.Id) {
                return 'editCoffeeShop';
            } else {
                return 'displayCoffeeShop'
            };
        }
    }
})();