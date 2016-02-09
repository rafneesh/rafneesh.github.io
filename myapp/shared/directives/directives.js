myApp.directive('footer',function(){

	return{
		restrict: 'A',
		replace: true,
		templateUrl: "./myapp/shared/footer.html",
		controller:['$scope', '$filter', function ($scope, $filter) {
        }]
	}
});

myApp.directive('header',function(){

	return{
		restrict: 'A',
		replace: true,
		templateUrl: "./myapp/shared/header.html",
		controller:['$scope', '$filter', function ($scope, $filter) {
        }]
	}
});
