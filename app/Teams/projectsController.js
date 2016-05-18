app.controller('teamsController',['$scope','requests', '$http',function($scope,requests,$http){


	requests.getMock(function(data){

		$scope.teams = data;


	}, function(data) {
        
            console.log("Não consegui pegar o mock");
    
    })

	

}]);