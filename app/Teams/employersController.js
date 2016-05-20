app.controller('employersController',['$scope','requests','getteams','$rootScope', '$routeParams' , function($scope,requests,getteams,$rootScope,$routeParams){

	var team = $routeParams.teamNome;

	getteams.getteam(team,function(data){

		$scope.team = data;
		console.log($scope.team);

	},function(){


	});
	
}]);