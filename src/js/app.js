(function() {
	'use strict';

	//Create a app level module which has dependencies on controllers and components
	var ngPrototype =
		angular.module('ngSeedApp', [
			'ui.router',
			'ngSeedApp.controllers'
		]);

	ngPrototype.run(['$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {

				//Add references to $state and $stateParams to the $rootScope
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		])
		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/');


				$stateProvider.state("login", {
					url: "/",
					controller: 'loginCtrl',
					templateUrl: 'src/js/components/login/login.html'
				}).state("flights", {
					url: "/flights",
					controller: 'flightsCtrl',
					templateUrl: 'src/js/components/flights/flights.html'
				});
			}
		]);
}());