/** A base character, playable or not (PC or NPC)
 *
 */
'use strict';

define([
	'underscore',
	'when',
	'common/utils/base_model',
	''
], function(_, when, BaseModel) {

	var DefinedModel = BaseModel.extend();

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			archetypes: [], // direct archetypes, not dependent from a form
			forms: [], // form available to this character. Ex. a werewolf has human + wolf
		};
	});

	// Add an archetype.
	// A function is needed since an archetype may imply others, recursively.
	// Promise
	DefinedModel.prototype.add_archetype = function(archetype) {
		debugger;
		return this.resolve_if_needed(archetype)
		.then(function(archetype) {
			this.get('archetypes').push(archetype.id);
			var sub_archetypes = archetype.get('archetypes');
			return when.map(sub_archetypes, _.bind(DefinedModel.prototype.add_archetype, this));
		});
	};

	return DefinedModel;
});
