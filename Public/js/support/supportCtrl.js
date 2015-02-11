var app = angular.module('textSupport')

app.controller('supportCtrl', function($scope, $firebase, supportService){

	var numbers = supportService.getResponse();
	var support = supportService.getSupportResponse();
	
	$scope.numbers = numbers.$asArray();
	$scope.support = support.$asArray();




	$scope.postResponse = function(response, number){
		console.log('clicked the button');
		var messageObj = {
			body: response,
			number: number
		}
		supportService.postResponse(messageObj)
		$scope.response = ""

	}
})