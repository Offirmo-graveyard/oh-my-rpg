/**
 * A party = a selectable character/game at the loading screen ('party' because may contain several PCs)
 * Client-specific extension of the common object.
 */
'use strict';

define([
	'common/models/party', // our parent
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
