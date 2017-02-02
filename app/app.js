// var app = angular.module("app", ['ngRoute']);

// app.config(['$routeProvider', function($routeProvider) {

//     $routeProvider.
//       when('/', {
//         templateUrl: 'team.html',
//         controller: 'teamsController'
//       }).
//       when('/employers/:teamId?', {
//         templateUrl: 'employers.html',
//         controller: 'employersController'
//       }).
//       otherwise({
//         redirectTo: 'team.html',
//       });

// }]);

var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'app/Teams/templates/team.html',
        controller: 'teamsController'
      }).
      when('/employers/:teamId?', {
        templateUrl: 'app/Teams/templates/employers.html',
        controller: 'employersController'
      }).
      otherwise({
        redirectTo: 'app/Teams/templates/team.html',
      });

}]);
