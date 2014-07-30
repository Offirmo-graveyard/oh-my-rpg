'use strict';

define([
	'common/utils/base_model',
], function(BaseModel) {

	var Party = BaseModel.extend();

	BaseModel.add_defaults(Party.prototype, function() {
		return {
			// TODO
		};
	});

	return Party;
});
