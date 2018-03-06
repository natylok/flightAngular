(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('flightsCtrl', [
			'$scope','flightService',
			function($scope,flightService) {
				$scope.flights = [];
				$scope.flightObj = {
					from:"",
					to:"",
					departue:"",
					landing:"",
					price:""
				};
				$scope.addFlight = function(){
					var copyFlightObj = Object.assign({},$scope.flightObj);
					var isFlightValid = flightService.verifyFlight($scope.flightObj);
					if(isFlightValid){
						$scope.flights.push(copyFlightObj);
						resetFlightObj();
						copyFlightObj = {};
					}
					else{
						$scope.addFlightErr = "Please fill all details";
					}
				}
				function resetFlightObj(){
					$scope.flightObj = {};
					$scope.addFlightErr = "";
				}
			}
		]);
}());