//defined app
var app = angular.module('flapperNews', []);
//creating factoy
app.factory('posts', [function(){
	//service body - creating a new object that has an array property called posts
	var o = {
		posts: []
	};
	return o;
}])
//defined main ctrl
app.controller('MainCtrl', [
//defined scope and injected service into ctrl
	'$scope',
	'posts',
	function($scope, posts){
	//defined test
		$scope.test ='hello world';
		$scope.posts = posts.posts;
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