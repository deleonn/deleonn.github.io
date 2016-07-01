var app = angular.module('skeleton-app', []);

app.controller('skeleton-controller', function($scope, $http, $timeout){

  $scope.isLoaded = false;

  $scope.test = $timeout(function(){
    $scope.isLoaded = true;
  }, 2000);

});
