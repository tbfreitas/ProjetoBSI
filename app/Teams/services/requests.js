app.factory('requests', [ '$http', function($http){

	return{
		getMock : getMock
	}

	function getMock(onSucess,onError){		

		$http.get('app/Teams/mock/teams.js')
            .success(function(data,status){
                onSucess(data);
            })
            .error(function(data,status){
                onError(data)
            })

	}	
	

	 
}])