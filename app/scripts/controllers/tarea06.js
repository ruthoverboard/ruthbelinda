'use strict';

/**
 * @ngdoc function
 * @name ruthbelindaApp.controller:Tarea06Ctrl
 * @description
 * # Tarea06Ctrl
 * Controller of the ruthbelindaApp
 */
angular.module('ruthbelindaApp')
  .controller('Tarea06Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.mandaTexto = function(){
      var info = {Text: $scope.mensaje};
      console.log(info);
      var url = "https://i545hvxm8e.execute-api.us-east-1.amazonaws.com/dev/slackMess";

      $http.post(url, info)
        .success(function(info){
          $scope.texto = info;
        })
        .error(function(error){
          alert(error);
        })

    };
  });
