/**
 * A user session.
 * Remember : we want the user to be able to open several sessions at once (multi-device)
 */
'use strict';

TOREVIEW

define([
	'common/utils/base_model',
], function(BaseModel) {

	var DefinedModel = BaseModel.extend();

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			user_id: undefined, // obviously this session belongs to a user
			key: undefined // API key for this session. May expires of course.
			// TODO random seed ? Or in User ?
		};
	});

	return DefinedModel;
});
