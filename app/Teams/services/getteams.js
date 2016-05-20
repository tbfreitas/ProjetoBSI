app.service('getteams',['$http', function($http) {
  
  return{
      saveteam : saveteam,
      getteam  : getteam
  }

  var team; 

  function saveteam(teamName) {

    var url = 'app/Teams/mock/Teams/' + teamName +'.js';

    $http.get(url)
         .success(function(data){
              team = data;
              console.log(team);
         })           
         .error(function(data){
            console.log("Teste de erro.");
          })
      
  };

  var getteam = function(){
      return team;
  };



}]);