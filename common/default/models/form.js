/** An instance of a form for a character.
 * Example : human form of King Arthur,
 * which has archetypes : male, fighter, etc.
 * REM : the form itself is an archetype. (TOREVIEW)
 */
'use strict';

define([
	'underscore',
	'when',
	'common/utils/base_model'
], function(_, when, BaseModel) {

	var DefinedModel = BaseModel.extend();

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			character: undefined, // the character this form belongs to
			archetype: undefined, // the archetype corresponding to this form
			archetypes: [], // the archetypes of this form instance
		};
	});

	return DefinedModel;
});
