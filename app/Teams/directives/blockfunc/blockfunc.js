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
			var url = scope.func.Image;  

			var x = element[0].children[0].children[1];
		
			$(x).css("background-size", "193px");
			$(x).css("background-image", "url("+url+") ");

	    }	
	}
})