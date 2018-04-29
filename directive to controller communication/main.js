
var myApp = angular.module('myApp', [])


myApp.controller('cusDir', function($scope){
	$scope.loadAlert = function(){
		alert('this is khayrul hasa')
	}
})


myApp.directive('enter', function(){
    return function(scope, element, attrs){
		element.bind("mouseleave", function(){
			scope.$apply("loadAlert()");
		})
	}
})

