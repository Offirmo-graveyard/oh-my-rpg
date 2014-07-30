/**
 * A user.
 * Client-specific extension of the the common object.
 */
'use strict';

define([
	'common/models/user', // our parent
	'base-objects/backbone/sync_to_store_mixin',
	'generic_store/generic_store'
], function(CommonUser) {

	console.log('Hello from ClientUser');

	var ClientUser = CommonUser.extend();

	// add our stuff
	ClientUser.add_defaults(ClientUser.prototype, function() {
		return {
			//
		};
	});

	return ClientUser;
});
