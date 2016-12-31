app.factory('requests', [ '$http', function($http){

	return{
		getMock : getMock
	}

	function getMock(onSucess,onError){

		// var url = http://localhost:8888/back/team-management/teams
		var url = 'app/Teams/mock/teams.js';

		$http.get(url)
            .success(function(data,status){
                onSucess(data);
            })
            .error(function(data,status){
                onError(data)
            })

	}




}])
