'use strict';

define(['text!screens/disclaimer/disclaimer.html', 'angularAMD'], function(template) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module

	var mainState = {
		name: 'disclaimer',
		url: '/disclaimer',
		template: template
	};

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);
	}]);

	return { mainState: mainState, module: app };
});
