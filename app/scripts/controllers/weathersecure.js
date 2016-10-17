'use strict';

/**
 * @ngdoc function
 * @name ruthbelindaApp.controller:WeathersecureCtrl
 * @description
 * # WeathersecureCtrl
 * Controller of the ruthbelindaApp
 */
angular.module('ruthbelindaApp')
  .controller('WeathersecureCtrl', function ($scope, $http) {


    $scope.login = function(valid){
      var url = "https://i545hvxm8e.execute-api.us-east-1.amazonaws.com/dev/login";
      var credentials = {
        "username": "foo",
        "password": "limonada"
      };

      credentials.username = valid? "ruthoverboard": "foo;"

      $http.post(url, credentials)
        .success(function(data){
          localStorage.setItem("token", data.token)
        })
        .error(function(error){
          alert(error);
        });



    };



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getWeather = function(){
      var info = {Cities: $scope.cities.split(",")};
      console.log(info);
      var url = "https://i545hvxm8e.execute-api.us-east-1.amazonaws.com/dev/weather-secure";

      $http.put(url, info)
        .success(function(info){
          $scope.cityWeather = info;
        })
        .error(function(error){
          alert(error);
        })
    }
  });
