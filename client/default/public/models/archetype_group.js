/**
 * A group of archetypes.
 * Client-specific extension of the the common object.
 */
'use strict';

define([
	'common/models/archetype_group' // our parent
], function(CommonArchetypeGroup) {

	console.log('Hello from ClientArchetypeGroup');

	var ClientArchetypeGroup = CommonArchetypeGroup.extend();

	// add our stuff

	return ClientArchetypeGroup;
});
