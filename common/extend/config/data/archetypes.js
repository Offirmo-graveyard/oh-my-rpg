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
			},
		},
		{
			id: 'archetype:started_as_human_from_tauri_atlantis',
			description: 'Humans from the Tau´ri (Earth) have only recently restored their stargate portal...',
			char_creation: {
				archetype_groups_to_resolve: [],
			},
		},
		{
			id: 'archetype:started_as_human_native_from_milky_way',
			description: 'Humans from an ordinary planet of the Milky Way. Originated from earth inhabitants taken as slaves by the Goa´uld...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
			},
		},
		{
			id: 'archetype:started_as_human_native_from_pegasus_galaxy',
			description: 'Humans from an ordinary planet of the Pegasus galaxy. Originated from Ancient settlement program, they are now under threat from the Wraiths.',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
			},
		},
		{
			id: 'archetype:started_as_jaffa',
			description: 'Jaffa are humans from a warrior society created by the Goa´uld to serve as their warriors. Now free from the Goa´uld...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
			},
		},
		{
			id: 'archetype:started_as_goa´uld',
			description: 'Powerful parasitic life-from, once the dominant spcy of the Milky Way, the Goa´uld where driven out by a coalition led by the Tau´ri...',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
			},
		},
		{
			id: 'archetype:started_as_goa´uld_from_tok´ra',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
			},
		},
		{
			id: 'archetype:started_as_wraith',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
			},
		},
		{
			id: 'archetype:started_as_ancient',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
			},
		},
		{
			id: 'archetype:started_as_asgard',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
			},
		},
		{
			id: 'archetype:started_as_replicator',
			description: 'description TODO',
			char_creation: {
				coming_soon: true, // not implemented yet ;)
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
	];
}); // requirejs module
