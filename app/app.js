var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'teamsController'
      }).
      when('/employers.html', {
        templateUrl: 'employers.html',
        controller: 'employersController'
      }).     
      otherwise({
        redirectTo: '/index'
      });

}]);