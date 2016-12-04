var app = angular.module('infinite',['infinite-scroll']);

app.controller('infiniteController',function($scope,Reddit){
	$scope.reddit = new Reddit();
	
});

