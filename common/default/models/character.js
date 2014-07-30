/** A base character, playable or not (PC or NPC)
 *
 */
'use strict';

define([
	'common/utils/base_model',
], function(BaseModel) {

	var Character = BaseModel.extend();

	BaseModel.add_defaults(Character.prototype, function() {
		return {
			forms: [], // form available to this character. Ex. a werewolf has human + wolf
			own_archetypes: [], // direct archetypes, not dependent from a form
		};
	});

	return Character;
});
