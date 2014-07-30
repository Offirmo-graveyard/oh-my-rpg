'use strict';

define(['text!screens/login/login.html', 'angularAMD'], function(template) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module

	var mainState = {
		name: 'login',
		url: '/login',
		template: template
	};

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);
	}]);

	return { mainState: mainState, module: app };
});
