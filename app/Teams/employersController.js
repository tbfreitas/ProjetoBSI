app.controller('employersController',['$scope','requests','getteams','$rootScope', '$routeParams' , function($scope,requests,getteams,$rootScope,$routeParams){

	$scope.teamName = $routeParams.teamNome;
	var name        = $routeParams.teamNome;

	getteams.getteam(name,function(data){
		$scope.team = data;
	},function(){


	});
	
}]);