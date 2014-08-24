'use strict';

define([
	'text!screens/game/game.html',
	'models/session',
	'angularAMD'
], function(template, Session) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module

	var mainState = {
		name: 'game',
		url: '/game',
		template: template,
		controller: GameCtrl
	};

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);
	}]);

	function GameCtrl($scope, $state) {
		console.log('Hello from GameCtrl !');
	}

	return { mainState: mainState, module: app };
});
