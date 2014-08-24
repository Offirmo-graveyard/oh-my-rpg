'use strict';

console.log('Hello from app.js !');

define([
	'angularAMD',
	'models/context',
	'angular-ui-router',
	'angular-ui-router-extras',
	'bootstrap3'
], function (angularAMD, Context) {
	console.log('starting app...');
	var app = angular.module('App', ['ui.router', 'ct.ui.router.extras']);

	app.controller('AppCtrl', ['$q', '$scope', function($q, $scope) {
		$scope.scoped_angular = angular; // just in case
		$scope.title = 'Oh My RPG'; // TODO load from config
		$scope.game_name = 'Oh My RPG'; // TODO load from config

		// our app data, shared with children controllers,
		// in an object to ease sharing
		// TOREVIEW load too much things in landing screen ?
		$scope.omr = Context.make_new();
	}]);

	app.config(['$urlRouterProvider', '$stateProvider', '$futureStateProvider', '$controllerProvider',
	function($urlRouterProvider, $stateProvider, $futureStateProvider, $state) {

		// For any unmatched url, redirect to 404 TODO
		//$urlRouterProvider.otherwise('/404');

		// Now set up the states
		$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: 'screens/landing/landing.html'
		})
		.state('404', {
			url: '/404',
			templateUrl: 'screens/404/404.html'
		});

		// register AngularAMD ngload state factory
		$futureStateProvider.stateFactory('ngload', ngloadStateFactory);

		// TODO eventually : load from json
		$futureStateProvider.addResolve(function() {
			console.log('resolving future states from app.js...');
			$futureStateProvider.futureState({
				'stateName': 'disclaimer',
				'urlPrefix': '/disclaimer',
				'type': 'ngload',
				'src': 'screens/disclaimer/disclaimer.js'
			});
			$futureStateProvider.futureState({
				'stateName': 'global_intro',
				'urlPrefix': '/global_intro',
				'type': 'ngload',
				'src': 'screens/global_intro/global_intro.js'
			});
			$futureStateProvider.futureState({
				'stateName': 'character_creation',
				'urlPrefix': '/character_creation',
				'type': 'ngload',
				'src': 'screens/character_creation/character_creation.js'
			});
			$futureStateProvider.futureState({
				'stateName': 'character_selection',
				'urlPrefix': '/character_selection',
				'type': 'ngload',
				'src': 'screens/character_selection/character_selection.js'
			});
			$futureStateProvider.futureState({
				'stateName': 'login',
				'urlPrefix': '/login',
				'type': 'ngload',
				'src': 'screens/login/login.js'
			});
			$futureStateProvider.futureState({
				'stateName': 'character_intro',
				'urlPrefix': '/character_intro',
				'type': 'ngload',
				'src': 'screens/character_intro/character_intro.js'
			});
			$futureStateProvider.futureState({
				'stateName': 'game',
				'urlPrefix': '/game',
				'type': 'ngload',
				'src': 'screens/game/game.js'
			});
		});
	}]);

//			function(event, toState, toParams, fromState, fromParams){ ... })
	app.run(function ($rootScope, $state) {
		//$rootScope.$state = $state;
		$rootScope.$on('$stateChangeStart', function() {
			console.log('event $stateChangeStart', arguments);
		});
		$rootScope.$on('$stateChangeSuccess', function() {
			console.log('event $stateChangeSuccess', arguments);
		});
		$rootScope.$on('$stateNotFound', function() {
			// event, unfoundState, fromState, fromParams
			console.log('event $stateNotFound', arguments);
		});
		$rootScope.$on('$stateChangeError', function() {
			// event, toState, toParams, fromState, fromParams, error
			console.log('event $stateChangeError', arguments);
		});
		$rootScope.$on('$viewContentLoading', function() {
			// event, toState, toParams, fromState, fromParams, error
			console.log('event $viewContentLoading', arguments);
		});
		$rootScope.$on('$viewContentLoaded', function() {
			// event, toState, toParams, fromState, fromParams, error
			console.log('event $viewContentLoaded', arguments);
		});
	});

	function ngloadStateFactory($q, futureState) {
		var ngloadDeferred = $q.defer();
		require([ 'ngload!' + futureState.src , 'ngload', 'angularAMD'],
				function ngloadCallback(result, ngload, angularAMD) {
					angularAMD.processQueue();
					ngloadDeferred.resolve(result.entryState);
				});
		return ngloadDeferred.promise;
	}


	// Tell angularAMD to tell angular to bootstrap our app
	angularAMD.bootstrap(app);
	// return app for requireJS registration
	return app;
});
