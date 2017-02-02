app.controller('teamsController', ['$scope', 'requests',  '$http', '$rootScope', function($scope, requests,  $http, $rootScope) {

	requests.getAllTeams(function(data) {

		$scope.teams = data;


	}, function(data) {
		console.log("Não consegui pegar o getMock");
	})


}]);
