var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'team.html',
        controller: 'teamsController'
      }).
      when('/employers/:teamNome?', {
        templateUrl: 'employers.html',
        controller: 'employersController'
      }).     
      otherwise({
        redirectTo: 'team.html',
      });

}]);