//defined app
var app = angular.module('flapperNews', []);
//creating factoy
app.factory('posts', [function(){
	//service body
	var o = {
		posts: []
	};
	return o;
}])
//defined main ctrl
app.controller('MainCtrl', [
//defined scope
	'$scope',
	function($scope){
	//defined test
		$scope.test ='hello world';
		$scope.posts = [
			{title:'post 1', upvotes:5},
			{title:'post 2', upvotes:3},
			{title:'post 3', upvotes:3},
			{title:'post 4', upvotes:6},
			{title:'post 5', upvotes:4}
		];
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === ' ') {return; }
			$scope.posts.push(
				{
					title: $scope.title, 
					link:$scope.link,
					upvotes:0
				});
			$scope.title = '';
			$scope.link = '';
		};
		$scope.incrementUpvotes = function(post){
			post.upvotes += 1;
		};
	}]);