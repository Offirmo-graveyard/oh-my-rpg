/* Archetype groups are group of related archetypes.
 * Example of groups :
 * - affiliation
 * - PC selectable race/affiliation
 */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(
[
	'underscore'
],
function(_) {
	'use strict';
	return [
		// character creation choices
		{
			id: 'archetype_group:character_creation_start_group',
			archetypes: [
				'archetype:started_as_human_from_tauri_sg1',
				'archetype:started_as_human_from_tauri_atlantis',
				'archetype:started_as_human_native_from_milky_way',
				'archetype:started_as_human_native_from_pegasus_galaxy',
				'archetype:started_as_jaffa',
				'archetype:started_as_goauld',
				'archetype:started_as_goauld_from_tokra',
				'archetype:started_as_wraith',
				'archetype:started_as_ancient',
				'archetype:started_as_asgard',
				'archetype:started_as_replicator'
			],
			choice_directions: 'Choose a starting point (You can create other characters later)'
		},
		{
			id: 'archetype_group:sex',
			archetypes: [
				'archetype:male',
				'archetype:female'
			]
		},
		{
			id: 'archetype_group:tauri_class',
			archetypes: [
				'archetype:tauri_soldier',
				'archetype:tauri_scientist',
				'archetype:tauri_diplomat',
				'archetype:tauri_medic'
			]
		},
	];
}); // requirejs module
