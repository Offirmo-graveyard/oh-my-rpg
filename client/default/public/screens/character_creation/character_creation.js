/**
 * App state.
 * Lazy-loaded on activation -> must define its state and sub-states.
 */
'use strict';

define([
	'text!screens/character_creation/character_creation.html',
	'text!screens/character_creation/character_creation_step.html',
	'models/archetype_group',
	'angularAMD'], function(template, step_template, ArchetypeGroup) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module
	var MAX_STEPS = 10;

	console.log(ArchetypeGroup);

	var mainState = {
		name: 'character_creation',
		//abstract: true,
		url: '/character_creation',
		template: template,
		controller: function($scope, $state) {
			console.log('Entered character_creation');

			// init the scope
			var startArchetypeGroup = new ArchetypeGroup({id: 'archetype_group:character_creation_start_group'});
			startArchetypeGroup.fetch().then(function(res) {

				$scope.errors = [];
				$scope.warnings = [];
				$scope.step = 1;
				$scope.choices_made = []; // none for now
				$scope.directions = startArchetypeGroup.get('choice_directions') || 'Please choose :';
				startArchetypeGroup.fetch_related_archetypes().then(function(res) {
					console.log(res);
					$scope.choices_offered = res;
				});

				// start
				$state.go('character_creation.step1');
			});
		}
	};

	function goToNextCreationStep() {

	}

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);

		for(var i = 0; i < MAX_STEPS; ++i) {
			$stateProvider.state({
				name: 'character_creation.step' + i,
				url: '/ccstep' + i,
				controller: function($scope, $state) {
					console.log('Entered ccstep : ' + $state.current.name);

					$scope.choice = undefined;
					$scope.abortCharacterCreation = function() {
						console.log('todo abort');
					};
					$scope.backToPreviousStep = function() {
						console.log('todo backToPreviousStep');
					};
					$scope.attemptToGoToNextStep = function() {
						console.log('todo attemptToGoToNextStep');

						if(!$scope.choice) {
							// should never happen
							$scope.errors = [ 'Please make a choice' ];
							return;
						}

						// choice allowed ?

					};
					$scope.select = function(archetype) {
						console.log('selected : ' + archetype.id );
						$scope.errors = []; // for now
						$scope.choices_made[$scope.step] = undefined; // for now

						$scope.choice = archetype;
						$scope.choice_description = archetype.get('description');

						var ccinfos = $scope.choice.get('char_creation');
						console.log($scope.choice, ccinfos);

						if(ccinfos.coming_soon) {
							$scope.errors = [ 'Sorry, this character class is not implemented yet...' ];
							return;
						}

						if(ccinfos.prestige_required) {
							$scope.errors = [ 'Sorry, this advanced character class is only allowed later...' ];
							return;
						}

						// ok !
						$scope.choices_made[$scope.step] = archetype;
					};
				},
				template: step_template
			});
		}
	}]);

	return { mainState: mainState, module: app };
});
