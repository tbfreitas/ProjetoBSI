app.controller('teamsController',['$scope','requests','getteams', '$http',function($scope,requests,getteams,$http){

	requests.getMock(function(data){
		
		$scope.teams = data;		

	}, function(data) {        
        console.log("Não consegui pegar o getMock");
    })

	$scope.teste = function(team){		
		
		getteams.saveteam(team.Nome);		
		
	};

}]);