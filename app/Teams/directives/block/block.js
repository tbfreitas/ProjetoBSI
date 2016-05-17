app.directive('block', function(){

	return{
		restrict: 'AE',
		replace : true ,
		scope : {
			team:'='
		},
		templateUrl : 'app/Teams/directives/block/block.html',
		link: function (scope) {	      
			
	    }	
	}
})