/**
 * A user session.
 * TOREVIEW
 * Client-specific extension of the common object.
 */
'use strict';

TOREVIEW

define([
	'when',
	'common/models/session', // our parent
	'models/user',
	'base-objects/backbone/sync_to_store_mixin',
	'generic_store/generic_store'
], function(when, CommonModel, User) {

	var ClientModel = CommonModel.extend();

	// add our stuff
	ClientModel.add_defaults(ClientModel.prototype, function() {
		return {
		};
	});

	ClientModel.add_initialization_fn(ClientModel.prototype, function() {
		// a deferred to know when load is done
		var def = when.defer();
		this._when_loaded_defered = def;
		this.when_loaded = def.promise;
	});

	return ClientModel;
});
