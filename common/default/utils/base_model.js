'use strict';

define([
	'underscore',
	'when',
	'base-objects/backbone/extensible_model',
	'base-objects/backbone/sync_api_uniformization_mixin'
], function(_, when, BaseModel, SyncUniformizationMixin) {

	var BaseModel = BaseModel.extend();
	SyncUniformizationMixin.mixin(BaseModel.prototype);

	return BaseModel;
});
