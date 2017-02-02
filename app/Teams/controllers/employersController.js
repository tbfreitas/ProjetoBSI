app.controller('employersController',['$scope','requests','$rootScope', '$routeParams' , function($scope,requests,$rootScope,$routeParams){

	console.log($routeParams)
	$scope.teamId  = $routeParams.teamId;
	var teamID     = $routeParams.teamId;

	requests.getOneTeam(teamID,function(data){

		$scope.team = data;
		console.log($scope.team)

	},function(){


	});

}]);
