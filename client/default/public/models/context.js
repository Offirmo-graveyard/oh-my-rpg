/** A context : which player, which server, which party selected, etc.
 * So far, not made to be persisted.
 */

define([
	'underscore',
	'when',
	// REM : keep dependencies light to avoid heavy load at start
	'common/models/context', // our parent
], function(_, when, CommonModel) {
	'use strict';

	////////////////////////////////////
	var constants  = {};
	var defaults   = {};
	var exceptions = {};
	var methods    = {};


	////////////////////////////////////
	//constants. = ;


	////////////////////////////////////
	// REM inherited begin
	// defaults.user = undefined;
	// defaults.party = undefined; // current party
	// inherited end
	defaults.demo = true; // true if just created from first visit. Useful to propose login or registration.
	defaults.parties = [];

	// init fn for creating unshared member variables
	methods.init = function() {
		// init of member objects

		// a deferred to know when load is done
		var def = when.defer();
		this._when_loaded_defered = def;
		this.when_loaded = def.promise;
	};


	////////////////////////////////////
	//exceptions. = ;


	////////////////////////////////////
	methods.attempt_recovery_of_existing = function($scope) {
		console.log('attempting recovery !');

		// TODO recovery

		// nothing recovered

		// done : resolve the promise
		this._when_loaded_defered.resolve(this);
	};

	/*ClientModel.prototype.persist_for_later_visit = function() {
	 console.log('attempting persist_for_later_visit !');
	 };*/


	////////////////////////////////////

	// inheritance, not prototypal in this case
	_.defaults(constants, CommonModel.constants);
	_.defaults(defaults,  CommonModel.defaults);
	_.defaults(methods,   CommonModel.methods);
	// exceptions ?

	Object.freeze(constants);
	Object.freeze(defaults);
	Object.freeze(exceptions);
	Object.freeze(methods);

	var DefinedClass = function Context() {
		_.defaults( this, defaults );
		// other inits...
		methods.init.apply(this, arguments);
	};

	DefinedClass.prototype.constants  = constants;
	DefinedClass.prototype.exceptions = exceptions;
	_.extend(DefinedClass.prototype, methods);


	////////////////////////////////////
	return {
		// objects are created via a factory, more future-proof
		'make_new'   : function() { return new DefinedClass(); },
		// but we still expose the constructor to allow class inheritance
		'klass'      : DefinedClass,
		// exposing these allows convenient syntax and also prototypal inheritance
		'constants'  : constants,
		'exceptions' : exceptions,
		'defaults'   : defaults,
		'methods'    : methods
	};
});
