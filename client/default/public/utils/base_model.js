'use strict';

define([
	'underscore',
	'when',
	'common/utils/base_model', // our parent
], function(_, when, BaseModel) {

	var DefinedModel = BaseModel.extend();

	// client specializations...

	return DefinedModel;
});
