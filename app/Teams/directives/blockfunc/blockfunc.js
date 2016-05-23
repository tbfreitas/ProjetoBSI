app.directive('blockfunc', function(){

	return{
		restrict: 'AE',
		replace : true ,
		scope : {
			func:'='
		},
		templateUrl : 'app/Teams/directives/blockfunc/blockfunc.html',
		link: function (scope,element, attrs) {			

			scope.func = scope.func;

			console.log(scope.func)    
			
	    }	
	}
})