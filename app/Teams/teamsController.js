app.controller('teamsController',['$scope','requests','getteams', '$http', '$rootScope',function($scope,requests,getteams,$http,$rootScope){
	
	requests.getMock(function(data){
		
		$scope.teams = data;	


	}, function(data) {        
        console.log("Não consegui pegar o getMock");
    })


}]);