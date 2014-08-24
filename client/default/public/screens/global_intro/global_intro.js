'use strict';

define([
	'text!screens/global_intro/global_intro.html',
	'models/user',
	'angularAMD'
], function(template, User) {
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

	function GlobalIntroCtrl($scope, $state) {
		console.log('Hello from GlobalIntroCtrl !');
		var context = $scope.omr;

		// attemp to recover an existing session
		console.log(context);
		context.attempt_recovery_of_existing($scope);

		$scope.goToNextState = function() {
			context.when_loaded
			.catch(function() {
				// TODO handle better
				throw new Error('session load failure !');
			})
			.then(function() {
				if(!context.user)
					context.user = new User();
				if(context.parties.length)
					$state.go('character_selection');
				else
					$state.go('character_creation');
			});
		};
	}

	return { mainState: mainState, module: app };
});
