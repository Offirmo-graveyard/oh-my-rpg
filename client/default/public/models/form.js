/**
 * A form.
 * Client-specific extension of the common object.
 */
'use strict';

define([
	'common/models/form', // our parent
	'base-objects/backbone/sync_to_store_mixin',
	'generic_store/generic_store'
], function(CommonModel) {

	var ClientModel = CommonModel.extend();

	// add our stuff
	ClientModel.add_defaults(ClientModel.prototype, function() {
		return {
			//
		};
	});

	return ClientModel;
});
