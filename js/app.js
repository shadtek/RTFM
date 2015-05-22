var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

.constant(fb, {
	url: 'https://rtfm-spencer.firebaseio.com/shadtek'
});

app.config(function($routeProvider){
	$routeProvider
	.when('/threads', {
		templateUrl: 'js/home/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.when('/threads/:id', {
		templateUrl: 'js/threads/threads.html',
		controller: 'threadsCtrl'
	})
	.otherwise({
      redirectTo: '/'
  })

})