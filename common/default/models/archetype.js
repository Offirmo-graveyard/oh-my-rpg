'use strict';

define([
	'underscore',
	'when',
	'common/utils/base_model',
	'common/utils/sync_to_static_data_mixin',
	'common/config/data/archetypes',
	'common/models/archetype'
], function(_, when, BaseModel, SyncFromStaticMixin, archetypeData, Archetype) {

	var Archetype = BaseModel.extend();
	SyncFromStaticMixin.mixin(Archetype.prototype);
	SyncFromStaticMixin.set_model_static_data(Archetype.prototype, archetypeData);

	BaseModel.add_defaults(Archetype.prototype, function() {
		return {
			// TODO
		};
	});

	return Archetype;
});
