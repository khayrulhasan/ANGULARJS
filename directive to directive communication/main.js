var myApp = angular.module('myApp', []);


myApp.directive("superhero", function(){
	
	return {

		restrict: "E",

		scope: {},

		controller: function($scope){
			$scope.abilities = []
			
			this.addStrenght = function(){
				$scope.abilities.push("strenght");
			}

			this.addSpeed = function(){
				$scope.abilities.push("speed");
			}

			this.addFlight = function(){
				$scope.abilities.push("flight");
			}

		},

		link: function(scope, element){
			element.addClass("w3-button w3-block");
			element.bind("mouseenter", function(){
				console.log(scope.abilities);
			})
		}
	}
})



myApp.directive("strenght", function(){
	return {
		require: "superhero",
		link: function(scope, element, attrs, superHeroCtrl){
			superHeroCtrl.addStrenght();
		}
	}
})


myApp.directive("speed", function(){
	return {

		require: "superhero",

		link: function(scope, element, attrs, superHeroCtrl){
			superHeroCtrl.addSpeed();
		}
	}
})


myApp.directive("flight", function(){
	return {
		require: "superhero",
		link: function(scope, element, attrs, superHeroCtrl){
			superHeroCtrl.addFlight();
		}
	}
})