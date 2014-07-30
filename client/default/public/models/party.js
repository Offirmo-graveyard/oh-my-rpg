/**
 * A party = a selectable character/game at the loading screen ('party' because may contain several PCs)
 * Client-specific extension of the the common object.
 */
'use strict';

define([
	'common/models/party', // our parent
	'base-objects/backbone/sync_to_store_mixin',
	'generic_store/generic_store'
], function(CommonParty) {

	console.log('Hello from ClientUser');

	var ClientParty = CommonParty.extend();

	// add our stuff
	ClientParty.add_defaults(ClientParty.prototype, function() {
		return {
			//
		};
	});

	return ClientParty;
});
