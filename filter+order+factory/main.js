
var myApp = angular.module('myApp',[]);

myApp.factory('dataFact', function(){

	var Avengers = {};
	Avengers.data = [
      {
        "id": 0,
        "name": "Hubbard Wagner"
      },
      {
        "id": 1,
        "name": "Wheeler Hays"
      },
      {
        "id": 2,
        "name": "Blanche Griffith"
      }
    ];
	return Avengers;
})

myApp.controller('FirstCtrl', function($scope, dataFact){
	$scope.ctlData = dataFact;
})

