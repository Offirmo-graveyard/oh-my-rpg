/**
 * A group of archetypes.
 * Client-specific extension of the common object.
 */
'use strict';

define([
	'common/models/archetype_group' // our parent
], function(CommonModel) {

	var ClientModel = CommonModel.extend();

	// add our stuff

	return ClientModel;
});
