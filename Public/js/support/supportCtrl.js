var app = angular.module('textSupport')

app.controller('supportCtrl', function($scope, $firebase){
	
	ref = new Firebase("https://textsupport2.firebaseio.com/numbers");
	var sync = $firebase(ref);
	var itemsArray = sync.$asArray(); //three way binding
	$scope.items = itemsArray;

	console.log(itemsArray)



})