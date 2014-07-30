'use strict';

define([
	'common/utils/base_model'
], function(BaseModel) {

	var Form = BaseModel.extend();

	BaseModel.add_defaults(Form.prototype, function() {
		return {
			// TODO
		};
	});

	return Form;
});
