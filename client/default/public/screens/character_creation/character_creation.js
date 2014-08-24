/**
 * App state.
 * Lazy-loaded on activation -> must define its state and sub-states.
 */
'use strict';

define([
	'underscore',
	'text!screens/character_creation/character_creation.html',
	'text!screens/character_creation/character_creation_step.html',
	'models/archetype',
	'angularAMD'
], function(_, template, step_template, Archetype) {
	var app = angular.module('App', ['ui.router']); // simplified angular : only one module
	var MAX_STEPS = 10;

	var mainState = {
		name: 'character_creation',
		//abstract: true,
		url: '/character_creation',
		template: template,
		controller: character_creation_controler
	};

	function character_creation_controler($scope, $state) {
		console.log('Entered character_creation');

		// init the scope for stuff global to all steps
		$scope.errors = [];
		$scope.warnings = [];
		// those values inside an object for sharing read/write with nested views
		$scope.cc = {
			step: 0, // current step
			choices_made: [], // none for now
			archetypes_to_resolve: [ 'archetype:user_created' ]
		};

		// init creation
		$state.go('character_creation.step1');
	}


	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state(mainState);

		for(var i = 0; i < MAX_STEPS; ++i) {
			$stateProvider.state({
				name: 'character_creation.step' + i,
				url: '/ccstep' + i,
				controller: character_creation_step_controler,
				template: step_template
			});
		}
	}]);

	function build_and_select_party($scope) {
		console.error('TODO', $scope.cc.choices_made);
		// build the character
		// save it to store
		// build the party
		// etc.
	}

	function character_creation_step_controler($scope, $state) {
		console.log('Entered ccstep : ' + $state.current.name);

		$scope.backToPreviousStep = function() {
			console.log('backToPreviousStep');
			$scope.cc.step--;
			$state.go('character_creation.step' + $scope.cc.step);
		};

		$scope.attemptToGoToNextStep = function() {
			console.log('attemptToGoToNextStep');

			if(! $scope.choice) {
				// should never happen
				$scope.errors = [ 'Please make a choice' ];
				return;
			}

			// choice allowed ? Yes, or else shouldn't have been able to call this func
			var ccinfos = $scope.choice.get('char_creation') || {};

			// each state may (re)define subsequent states
			if(ccinfos.next_archetype_groups_to_resolve) {
				var new_next_steps = ccinfos.next_archetype_groups_to_resolve;
				if(new_next_steps) {
					// slice up to current, can't change previous steps
					var temp = $scope.cc.archetype_groups_to_resolve.slice(0, $scope.cc.step);
					// then add new next steps
					$scope.cc.archetype_groups_to_resolve = temp.concat(ccinfos.next_archetype_groups_to_resolve);
					console.log('updated steps', $scope.cc.archetype_groups_to_resolve);
				}
			}

			$scope.cc.choices_made[$scope.cc.step] = $scope.choice;

			// was it the last state ?
			if($scope.cc.step === $scope.cc.archetype_groups_to_resolve.length) {
				// slice choices made, since back-and-forth may have caused fancy things
				// slice from 1 since we used human-numbered steps starting at 1
				$scope.cc.choices_made = $scope.cc.choices_made.slice(1, $scope.cc.archetype_groups_to_resolve.length+1);
				// build and store things
				build_and_select_party($scope);
				// time to start playing !
				//$state.go('character_intro');
				return;
			}

			$scope.cc.step++;
			$state.go('character_creation.step' + $scope.cc.step);
		};

		$scope.attempSelect = function(archetype) {
			console.log('selected :', archetype );
			$scope.errors = []; // for now
			$scope.cc.choices_made[$scope.cc.step] = undefined; // for now

			// even if not allowed, still allow selection and description (for teasing ;)
			$scope.choice = archetype;
			$scope.choice_description = archetype.get('description');

			// now validate. Will add errors if bad.
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
		};

		// load current state choices
		var current_archetype_to_resolve = new Archetype({id: $scope.cc.archetypes_to_resolve[$scope.cc.step]});
		current_archetype_to_resolve.fetch()
		.then(function() {
			$scope.directions = currentArchetypeGroup.get('choice_directions') || 'Please choose :';
			// we only have ids, fetch full objects
			currentArchetypeGroup.fetch_related_archetypes().then(function(res) {
				$scope.choices_offered = res;

				// try to restore a possible previous choice (if user made back and forth)
				$scope.choice = $scope.cc.choices_made[$scope.cc.step];
				if($scope.choice) {
					// validate it's allowed, back and forth may have shuffled the steps
					var test = _.findWhere($scope.choices_offered, {id: $scope.choice.id});
					if(test)
						$scope.attempSelect($scope.choice);
					else
						$scope.choice = undefined;
				}

				// we are in non-angular promises
				$scope.$digest();
			});
		});
	}

	return { mainState: mainState, module: app };
});
