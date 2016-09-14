app.factory('requests', [ '$http', function($http){

	return{
		getMock : getMock
	}

	function getMock(onSucess,onError){		


		$http.get('http://localhost:8888/back/team-management/teams')
            .success(function(data,status){
                onSucess(data);
            })
            .error(function(data,status){
                onError(data)
            })

	}	

	

	 
}])