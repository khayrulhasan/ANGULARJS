
var myApp = angular.module('myApp', []);

myApp.directive('alert', function(){
	return {
		restict: "A",
		link: function(){
			alert('This is khayrul hasan')
		}
	}
})

myApp.directive('flash', function(){
	return {
		restict: "A",
		link: function(){
			alert('This is khayrul hasan')
		}
	}
})

