var app = angular.module('jake.site', []);

app.controller('siteManager', ['$scope','$http', function($scope, $http){
	$http.get('./js/data.json').success(function(data, status, headers, config) {
		console.log(data.siteName);
	}).error(function(data, status, headers, config) {
	// called asynchronously if an error occurs
	// or server returns response with an error status.
	});



}]);
