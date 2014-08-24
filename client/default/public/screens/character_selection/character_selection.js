/**
 * App state.
 * Lazy-loaded on activation -> must define its state and sub-states.
 */
'use strict';

define([
	'text!screens/character_selection/character_selection.html',
	'angularAMD'
], function(template) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module

	var mainState = {
		name: 'character_selection',
		url: '/character_selection',
		template: template
	};

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);
	}]);

	app.controller('CharacterSelectionCtrl', [
		'$scope',
		CharacterSelectionCtrl
	]);
	function CharacterSelectionCtrl($scope) {
		console.log('Hello from CharacterSelectionCtrl !');
	}

	return { mainState: mainState, module: app };
});
