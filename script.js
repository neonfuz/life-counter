var lifeCounter = angular.module('lifeCounter', ['ngMaterial']);
lifeCounter.controller('Player', function($scope) {
    $scope.life = 20;
    $scope.history = [];

    $scope.increment = function(ammount) {
        ammount = ammount ? ammount : 1;
        $scope.life += ammount;
        var i = $scope.history.length - 1;
        if($scope.history[i].value > 0)
            $scope.history[i].value += 1;
        else
            $scope.history.push({value: 1});
    }

    $scope.decrement = function(ammount) {
        ammount = ammount ? ammount : 1;
        $scope.life -= ammount;
        var i = $scope.history.length - 1;
        if($scope.history[i].value < 0)
            $scope.history[i].value -= 1;
        else
            $scope.history.push({value: -1});
    }

    $scope.reset = function(ammount) {
        ammount = ammount ? ammount : 20;
        $scope.life = ammount;
        $scope.history.push({value: "reset"});
    }
});
