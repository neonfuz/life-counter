var lifeCounter = angular.module('lifeCounter', ['ngMaterial']);
lifeCounter.controller('Player', function($scope) {
  $scope.life = 20;

  $scope.increment = function(ammount) {
    ammount = ammount ? ammount : 1;
    $scope.life += ammount;
  }

  $scope.decrement = function(ammount) {
    ammount = ammount ? ammount : 1;
    $scope.life -= ammount;
  }

  $scope.reset = function(ammount) {
    ammount = ammount ? ammount : 20;
    $scope.life = ammount;
  }
});
