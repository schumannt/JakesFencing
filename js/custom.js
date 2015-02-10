var app = angular.module('jake.site', []);

app.controller('siteManager', ['$scope','$http', function($scope, $http){
	$scope.site = {
		"name":"INSERT COMPANY NAME HERE",
		"tagLine":"INSERT TAGLINE HERE",
		"workStatement":"INSERT WORK STATEMENT HERE",
		"description":"INSERT DESCRIPTION HERE",
		"contacts":[
			{"img":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxNfOk3LFajNSHqGbVyNitjjDTMLKJjRhdk4psdJZcRWF-B7C2","name":"Jake","phone":"07900000000","email":"jake@work.com"},
			{"img":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxNfOk3LFajNSHqGbVyNitjjDTMLKJjRhdk4psdJZcRWF-B7C2","name":"Jake","phone":"07900000000","email":"jake@work.com"},
			{"img":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxNfOk3LFajNSHqGbVyNitjjDTMLKJjRhdk4psdJZcRWF-B7C2","name":"Jake","phone":"07900000000","email":"jake@work.com"},
			{"img":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxNfOk3LFajNSHqGbVyNitjjDTMLKJjRhdk4psdJZcRWF-B7C2","name":"Jake","phone":"07900000000","email":"jake@work.com"}
		],
		"links":[
			{"name":"My Trust A Trader Profile","url":"http://www.trustatrader.com"},
			{"name":"My another profiles","url":"http://www.trustatrader.com"}
		],
		"news":[
			{"header":"New Website Launched","date":"14/02/2015","story":"2015 sees the redesign of our website. Take a look around and let us know what you think."},
			{"header":"New equipment","date":"14/02/2015","story":"I got a new shovel"}
		],
		"examples":[
			{"jobName":"INSERT JOB NAME HERE",
				"imgs":[
					"test1.jpg","test2.jpg","test3.jpg"
				]
			},{"jobName":"INSERT JOB NAME HERE",
				"imgs":[
					"test1.jpg","test2.jpg","test3.jpg"
				]
			}
		]
	}
}]);