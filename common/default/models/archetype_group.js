'use strict';

define([
	'underscore',
	'when',
	'common/utils/base_model',
	'common/utils/sync_to_static_data_mixin',
	'common/config/data/archetype_groups',
	'common/models/archetype'
], function(_, when, BaseModel, SyncFromStaticMixin, archetypeGroupData, Archetype) {

	var ArchetypeGroup = BaseModel.extend();
	SyncFromStaticMixin.mixin(ArchetypeGroup.prototype);
	SyncFromStaticMixin.set_model_static_data(ArchetypeGroup.prototype, archetypeGroupData);

	BaseModel.add_defaults(ArchetypeGroup.prototype, function() {
		return {
			// TODO
		};
	});

	ArchetypeGroup.prototype.fetch_custom_archetype_set = function(archetypes_id_list) {
		var res = _.map(archetypes_id_list, function createArchetype(id) {
			return new Archetype({id: id});
		});

		return when.map(res, function loadArchetype(model) {
			return model.fetch();
		})
		.then(function() {
			return res;
		});
	};

	ArchetypeGroup.prototype.fetch_related_archetypes = function() {
		if(!this._related_archetypes_loaded) {
			this._related_archetypes_loaded = this.fetch_custom_archetype_set(this.get('archetypes'));
		}
		return this._related_archetypes_loaded;
	};


	return ArchetypeGroup;
});
