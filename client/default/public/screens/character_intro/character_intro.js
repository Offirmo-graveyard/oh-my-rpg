'use strict';

define([
	'text!screens/character_intro/character_intro.html',
	'models/session',
	'angularAMD'
], function(template, Session) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module

	var mainState = {
		name: 'character_intro',
		url: '/character_intro',
		template: template,
		controller: CharacterIntroCtrl
	};

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);
	}]);

	function CharacterIntroCtrl($scope, $state) {
		console.log('Hello from CharacterIntroCtrl !');
		// TODO
	}

	return { mainState: mainState, module: app };
});
