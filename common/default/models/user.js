'use strict';

define([
	'common/utils/base_model',
], function(BaseModel) {

	var User = BaseModel.extend();

	BaseModel.add_defaults(User.prototype, function() {
		return {
			// TODO
		};
	});

	return User;
});
