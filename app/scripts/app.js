'use strict';

/**
 * @ngdoc overview
 * @name ruthbelindaApp
 * @description
 * # ruthbelindaApp
 *
 * Main module of the application.
 */
angular
  .module('ruthbelindaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tareas', {
        templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl',
        controllerAs: 'tareas'
      })
      .when('/tarea01', {
        templateUrl: 'views/tarea01.html',
        controller: 'Tarea01Ctrl',
        controllerAs: 'tarea01'
      })
      .when('/tarea02', {
        templateUrl: 'views/tarea02.html',
        controller: 'Tarea02Ctrl',
        controllerAs: 'tarea02'
      })
      .when('/tarea03', {
        templateUrl: 'views/tarea03.html',
        controller: 'Tarea03Ctrl',
        controllerAs: 'tarea03'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
