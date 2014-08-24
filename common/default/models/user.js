'use strict';

define([
	'common/utils/base_model',
], function(BaseModel) {

	var DefinedModel = BaseModel.extend();

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			//prestige: 0, // TODO one day prestige associated to knowledge of the game universe
		};
	});

	return DefinedModel;
});
