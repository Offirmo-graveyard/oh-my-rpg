/**
 * App state.
 * Lazy-loaded on activation -> must define its state and sub-states.
 */
'use strict';

define([
	'underscore',
	'text!screens/character_creation/character_creation.html',
	'text!screens/character_creation/character_creation_step.html',
	'models/archetype_group',
	'angularAMD'
], function(_, template, step_template, ArchetypeGroup) {
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
			$scope.errors = [];
			$scope.warnings = [];
			// inside an object for sharing with nested views
			$scope.cc = {
				step: 1,
				choices_made: [], // none for now
				archetype_groups_to_resolve: [ 'archetype_group:character_creation_start_group' ]
			};
			$state.go('character_creation.step1');
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

					$scope.abortCharacterCreation = function() {
						if($scope.omr.parties.length)
							$state.go('character_selection');
						else
							$state.go('landing'); // aborting while creating 1st char = back to landing
					};
					$scope.backToPreviousStep = function() {
						console.log('backToPreviousStep');
						$scope.cc.step--;
						$state.go('character_creation.step' + $scope.cc.step);
					};
					$scope.attemptToGoToNextStep = function() {
						console.log('attemptToGoToNextStep');

						if(!$scope.choice) {
							// should never happen
							$scope.errors = [ 'Please make a choice' ];
							return;
						}

						// choice allowed ? Yes, was validated at selection.

						var ccinfos = $scope.choice.get('char_creation') || {};

						// each state may define subsequent states
						if(ccinfos.next_archetype_groups_to_resolve) {
							var next_steps = ccinfos.next_archetype_groups_to_resolve;
							if(next_steps) {
								// slice to current
								var temp = $scope.cc.archetype_groups_to_resolve.slice(0, $scope.cc.step);
								$scope.cc.archetype_groups_to_resolve = temp.concat(ccinfos.next_archetype_groups_to_resolve);
								console.log('updated steps', $scope.cc.archetype_groups_to_resolve);
							}
						}

						// special case for last state
						if($scope.cc.step === $scope.cc.archetype_groups_to_resolve.length) {
							// time to start playing !
							console.error('TODO');
							// build the character
							// save it to store
							// build the party
							// etc.
							$state.go('character_intro');
							return;
						}

						$scope.cc.step++;
						$state.go('character_creation.step' + $scope.cc.step);
					};
					$scope.select = function(archetype) {
						console.log('selected :', archetype );
						$scope.errors = []; // for now
						$scope.cc.choices_made[$scope.cc.step] = undefined; // for now

						$scope.choice = archetype;
						$scope.choice_description = archetype.get('description');

						var ccinfos = $scope.choice.get('char_creation') || {};
						console.log($scope.choice, ccinfos);

						if(ccinfos.coming_soon) {
							$scope.errors = [ 'Sorry, this character class is not implemented yet... Choose another !' ];
							return;
						}

						if(ccinfos.prestige_required) {
							$scope.errors = [ 'Sorry, this advanced character class is only allowed later... Choose another !' ];
							return;
						}

						// ok !
						$scope.cc.choices_made[$scope.cc.step] = archetype;
					};

					// load current state choices
					console.log('step init', $scope.cc.archetype_groups_to_resolve[$scope.cc.step-1]);
					var currentArchetypeGroup = new ArchetypeGroup({id: $scope.cc.archetype_groups_to_resolve[$scope.cc.step-1]});
					currentArchetypeGroup.fetch().then(function(res) {
						console.log('fetched', res);
						$scope.directions = currentArchetypeGroup.get('choice_directions') || 'Please choose :';
						currentArchetypeGroup.fetch_related_archetypes().then(function(res) {
							console.log('related', res);
							$scope.choices_offered = res;

							// try to restore a possible previous choice
							$scope.choice = $scope.cc.choices_made[$scope.cc.step];
							if($scope.choice) $scope.select($scope.choice);

							$scope.$digest();
						});
					});
				},
				template: step_template
			});
		}
	}]);

	return { mainState: mainState, module: app };
});
