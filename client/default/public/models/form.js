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

	var ClientUser = CommonModel.extend();

	// add our stuff
	ClientUser.add_defaults(ClientUser.prototype, function() {
		return {
			//
		};
	});

	return ClientUser;
});
