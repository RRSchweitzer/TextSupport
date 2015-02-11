var app = angular.module('textSupport')

app.service('supportService', function($http, $q, $firebase){

var firebaseUrl = "https://textsupport2.firebaseio.com/";

	this.postResponse = function(messageObj){	
		return $http({
			method: 'POST',
			url: 'http://localhost:8787/support/messages',
			data: messageObj
		})
	}
	
	this.getResponse = function(){
		return $firebase(new Firebase(firebaseUrl + "/numbers"))
	}
	this.getSupportResponse = function(){
		return $firebase(new Firebase(firebaseUrl + "/numbers/help"))
	}

})