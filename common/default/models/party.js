'use strict';

define([
	'common/utils/base_model',
], function(BaseModel) {

	var DefinedModel = BaseModel.extend();

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			pc: undefined, // main Player Character, the one listed in character selection
			sub_pcs: [], // other Player Characters
		};
	});

	return DefinedModel;
});
