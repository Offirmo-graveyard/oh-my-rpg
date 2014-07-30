'use strict';

define([
	'text!screens/global_intro/global_intro.html',
	'models/session',
	'angularAMD'
], function(template, Session) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module

	var mainState = {
		name: 'global_intro',
		url: '/global_intro',
		template: template,
		controller: GlobalIntroCtrl
	};

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);
	}]);

	/*app.controller('GlobalIntroCtrl', [
		'$scope',
		'$state',
		GlobalIntroCtrl
	]);*/
	function GlobalIntroCtrl($scope, $state) {
		console.log('Hello from GlobalIntroCtrl !');

		// attemp to recover an existing session
		console.log($scope.omr);
		var session = new Session();
		session.attempt_recovery_of_existing($scope);
		console.log($scope.omr);

		$scope.goToNextState = function() {
			session.when_loaded
			.catch(function() {
				// TODO handle better
				throw new Error('session load failure !');
			})
			.then(function(session) {
				if($scope.omr.parties.length)
					$state.go('character_selection');
				else
					$state.go('character_creation');
			});
		};
	}

	return { mainState: mainState, module: app };
});
