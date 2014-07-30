/* Forms are base characteristics that can be switched.
 * Ex. A werewolf has a human form and a wolf form.
 * Each form has its own set of archetypes.
 */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(
[
	'underscore'
],
function(_) {
	'use strict';
	return [
		{
			id: 'form:human',
			required_archetypes: [],
		},
		{
			id: 'form:ascended',
			required_archetypes: [],
		},
	];
}); // requirejs module
