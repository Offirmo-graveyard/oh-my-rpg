/* Archetypes are any variable that characterize a form :
 * race, trait, skin color, hair style...
 */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(
[
	'underscore'
],
function(_) {
	'use strict';

	return [
		// character creation starting points
		{
			id: 'archetype:started_as_human_from_tauri_sg1',
			description: 'Humans from the Tau´ri (Earth) have only recently restored their stargate portal...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
				// TODO add history, etc.
			},
		},
		{
			id: 'archetype:started_as_human_from_tauri_atlantis',
			description: 'Humans from the Tau´ri (Earth) have only recently restored their stargate portal...',
			char_creation: {
				next_archetype_groups_to_resolve: [
					'archetype_group:tauri_class',
					'archetype_group:sex'
				],
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_human_native_from_milky_way',
			description: 'Humans from an ordinary planet of the Milky Way. Originated from earth inhabitants taken as slaves by the Goa´uld...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_human_native_from_pegasus_galaxy',
			description: 'Humans from an ordinary planet of the Pegasus galaxy. Originated from Ancient settlement program, they are now under threat from the Wraiths.',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_jaffa',
			description: 'Jaffa are humans from a warrior society created by the Goa´uld to serve as their warriors. Now free from the Goa´uld...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_goauld',
			description: 'Powerful parasitic life-from, once the dominant spcy of the Milky Way, the Goa´uld where driven out by a coalition led by the Tau´ri...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'goauld' ],
			},
		},
		{
			id: 'archetype:started_as_goauld_from_tokra',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'goauld' ],
			},
		},
		{
			id: 'archetype:started_as_wraith',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'wraith' ],
			},
		},
		{
			id: 'archetype:started_as_ancient',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'ancient' ],
			},
		},
		{
			id: 'archetype:started_as_asgard',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'asgard' ],
			},
		},
		{
			id: 'archetype:started_as_replicator',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'replicator' ],
			},
		},

		// sex
		{
			id: 'archetype:male',
			description: 'description TODO',

		},
		{
			id: 'archetype:female',
			description: 'description TODO',
		},

		// forms
		{
			id: 'archetype:human_form',
			description: 'description TODO',
		},
		{
			id: 'archetype:ascended_from',
			description: 'description TODO',
		},

		// tauri classes
		{
			id: 'archetype:tauri_soldier',
			description: 'description TODO',
		},
		{
			id: 'archetype:tauri_scientist',
			description: 'description TODO',
		},
		{
			id: 'archetype:tauri_diplomat',
			description: 'description TODO',
		},
		{
			id: 'archetype:tauri_medic',
			description: 'description TODO',
		},

	];
}); // requirejs module
