app.service('getteams',['$http', function($http) {
  
  return{
      saveteam : saveteam,
      getteam  : getteam
  }

  var team; 

  function saveteam(teamName) {

    var url = 'app/Teams/mock/Teams/' + teamName +'.js';
    
    console.log(url);

    $http.get(url)
         .success(function(data){
              team = data;
         })            
          
         .error(function(data){
            console.log("Deu ruim");
          })
      
  };

  var getteam = function(){
      return team;
  };



}]);