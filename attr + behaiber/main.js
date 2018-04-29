
var myApp = angular.module('myApp', [])


myApp.directive('enter', function(){
    // restrict: "A",
	return function(scope, element){
		element.bind("mouseenter", function(){
			element.addClass("w3-panel w3-red")
		})
	}
})

myApp.directive('leave', function(){
	return function(scope, element){
		element.bind("mouseleave", function(){
			element.removeClass("w3-panel w3-red")
		})
	}
})