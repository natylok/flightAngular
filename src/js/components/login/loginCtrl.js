(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('loginCtrl', [
			'$scope', 'loginService', '$state',
			function($scope,loginService,$state) {
				$scope.signIn = function(event){
					event.preventDefault();
					if(loginService.verifyLogin($scope.userName, $scope.password)){
						$state.go("flights");
					}
				};
			}
		]);
}());