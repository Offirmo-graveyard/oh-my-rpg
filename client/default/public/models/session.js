/**
 * A user session.
 * Client-specific extension of the the common object.
 */
'use strict';

define([
	'when',
	'common/models/session', // our parent
	'models/user',
	'base-objects/backbone/sync_to_store_mixin',
	'generic_store/generic_store'
], function(when, CommonSession, User) {

	console.log('Hello from ClientSession');

	var ClientSession = CommonSession.extend();

	// add our stuff
	ClientSession.add_defaults(ClientSession.prototype, function() {
		return {
		};
	});

	ClientSession.add_initialization_fn(ClientSession.prototype, function() {
		// a deferred to know when load is done
		var def = when.defer();
		this._when_loaded_defered = def;
		this.when_loaded = def.promise;
	});


	ClientSession.prototype.attempt_recovery_of_existing = function($scope) {
		console.log('attempting recovery !');

		// TODO recovery

		// nothing recovered : create a new state
		$scope.omr.user = new User();
		this.set('user', $scope.omr.user);
		$scope.omr.session = this;
		$scope.omr.parties = [];

		// done : resolve the promise
		this._when_loaded_defered.resolve(this);
	};

	/*ClientSession.prototype.persist_for_later_visit = function() {
		console.log('attempting persist_for_later_visit !');
	};*/

	return ClientSession;
});
