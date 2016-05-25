app.directive('blockfunc', function(){

	return{
		restrict: 'AE',
		replace : true ,
		scope : {
			func:'='
		},
		templateUrl : 'app/Teams/directives/blockfunc/blockfunc.html',
		link: function (scope,element, attrs) {			

			scope.func 	   = scope.func;  
			
			var url 	   = scope.func.Image;  
			var children   = element[0].children[0].children[1];
		
			$(children).css("background-size", "193px");
			$(children).css("background-image", "url("+url+") ");

	    }	
	}
})