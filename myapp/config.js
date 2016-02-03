myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/edit', {
		templateUrl : './myapp/views/edittask.html',
		controller : 'formCtrl'
	})
	.otherwise({
		templateUrl : './myapp/views/home.html',
		controller : 'taskController'
	});
} ]);
