var app = angular.module('textSupport', ['ngRoute', 'firebase'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'js/home/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.when('/support', {
		templateUrl: 'js/support/supportTmpl.html',
		controller: 'supportCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})

})