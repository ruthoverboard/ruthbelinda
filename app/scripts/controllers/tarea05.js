'use strict';

/**
 * @ngdoc function
 * @name ruthbelindaApp.controller:Tarea05Ctrl
 * @description
 * # Tarea05Ctrl
 * Controller of the ruthbelindaApp
 */
angular.module('ruthbelindaApp')
  .controller('Tarea05Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getWeather = function(){
      var info = {Cities: $scope.cities.split(",")};
      console.log(info);
      var url = "https://i545hvxm8e.execute-api.us-east-1.amazonaws.com/dev/weatherMultipleRuth";

      $http.put(url, info)
        .success(function(info){
        $scope.cityWeather = info;
      })
        .error(function(error){
          alert(error);
        })
    };

  });
