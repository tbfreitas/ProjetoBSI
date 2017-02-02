app.factory('requests', [ '$http', function($http){

	return{
		getAllTeams : getAllTeams,
		getOneTeam  : getOneTeam

	}

	function getAllTeams(onSucess,onError){

		var url = 'http://localhost:8888/back/team-management/teams';
		//var url = 'app/Teams/mock/teams.js';

		$http.get(url)
            .success(function(data,status){
                onSucess(data);
            })
            .error(function(data,status){
                onError(data)
            })

	}

	function getOneTeam(teamId,onSuccess,onError) {

		//var url = 'app/Teams/mock/Teams/' + teamName +'.js';
		var url = 'http://localhost:8888/back/team-management/teams/' + teamId;

		$http.get(url)
				 .success(function(data){
							onSuccess(data);

				 })
				 .error(function(data){
						console.log("Teste de erro.");
					})

	};




}])
