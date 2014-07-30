/** An instance of a form for a character.
 * Example : human form of King Arthur,
 * which has archetypes : male, fighter, etc.
 * REM : the from itself is an archetype.
 */
'use strict';

define([
	'underscore',
	'when',
	'common/utils/base_model'
], function(_, when, BaseModel) {

	var Form = BaseModel.extend();

	BaseModel.add_defaults(Form.prototype, function() {
		return {
			character: undefined, // the character this form belongs to
			archetype: undefined, // the archetype corresponding to this form
			archetypes: [], // the archetypes of this form instance
		};
	});

	return Form;
});
