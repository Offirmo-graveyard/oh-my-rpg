/** A context : which player, which server, which party selected, etc.
 * So far, not made to be persisted.
 */

define([
	'underscore',
], function(_) {
	'use strict';

	////////////////////////////////////
	var constants  = {};
	var defaults   = {};
	var exceptions = {};
	var methods    = {};


	////////////////////////////////////
	//constants. = ;


	////////////////////////////////////
	defaults.user = undefined;
	defaults.party = undefined; // current party
	// TODO more as needed
	//defaults.channel = undefined; // current channel
	//defaults.user_knowledge = undefined; // TODO some day

	////////////////////////////////////
	//exceptions. = ;


	////////////////////////////////////
	//methods. = ;


	////////////////////////////////////
	Object.freeze(constants);
	Object.freeze(defaults);
	Object.freeze(exceptions);
	Object.freeze(methods);

	var DefinedClass = function Context() {
		_.defaults( this, defaults );
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
