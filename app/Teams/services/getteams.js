app.service('getteams',['$http','$rootScope' ,  function($http, $rootScope) {
  
  return{
      getteam  : getteam
  }

  function getteam(teamName,onSuccess,onError) {

    var url = 'app/Teams/mock/Teams/' + teamName +'.js';

    $http.get(url)
         .success(function(data){
              onSuccess(data);

         })           
         .error(function(data){
            console.log("Teste de erro.");
          })
      
  };


}]);