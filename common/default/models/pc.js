/** A Player Character (PC)
 *
 */
'use strict';

define([
	'underscore',
	'when',
	'models/character',
], function(BaseModel) {

	var DefinedModel = BaseModel.extend();

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			// TODO
		};
	});

	// validate if this or the given archetype is a valid choice for this player
	// Promise
	DefinedModel.prototype.attempt_user_selected_archetypes_addition = function(
		starting_archetype_group,
		choices_made_for_each_step
	) {

		// replay the archetypes selection,
		// check that everything is ok
		// TODO GTD

		// and do additional stuff if needed
		return when.map(choices_made_for_each_step, function(archetype_chosen) {
			return this.add_archetype(archetype_chosen);
		});
	};

	return DefinedModel;
});
