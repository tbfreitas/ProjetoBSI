app.service('getteams',['$http','$rootScope' ,  function($http, $rootScope) {
  
  return{
      saveteam : saveteam,
      getteam  : getteam
  }

  var team; 

  function saveteam(teamName) {

    var url = 'app/Teams/mock/Teams/' + teamName +'.js';

    $http.get(url)
         .success(function(data){
              $rootScope.team = data;

         })           
         .error(function(data){
            console.log("Teste de erro.");
          })
      
  };

  function getteam(){
      return team;
  };



}]);