/* static data for the given model
 * @see corresponding model
 */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(
[
	'underscore'
],
function(_) {
	'use strict';

	return [
		// character creation starting point
		{
			id: 'archetype:user_created',
			hidden: true,
			implication_type: 'one of',
			implied_archetypes: [
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
				'archetype:started_as_replicator',
			],
			choice_infos: {
				directions: 'Choose a starting point (You can create other characters later)'
			},
		},
		// character creation starting points
		{
			id: 'archetype:started_as_human_from_tauri_sg1',
			description: 'Humans from the Tau´ri (Earth) have only recently restored their stargate portal...',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				// TODO add history, etc.
			},
		},
		{
			id: 'archetype:started_as_human_from_tauri_atlantis',
			description: 'Humans from the Tau´ri (Earth) have only recently restored their stargate portal...',
			implied_archetypes: [
				'archetype:tauri_class',
				'archetype:human'
			],
		},
		{
			id: 'archetype:started_as_human_native_from_milky_way',
			description: 'Humans from an ordinary planet of the Milky Way. Originated from earth inhabitants taken as slaves by the Goa´uld...',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_human_native_from_pegasus_galaxy',
			description: 'Humans from an ordinary planet of the Pegasus galaxy. Originated from Ancient settlement program, they are now under threat from the Wraiths.',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_jaffa',
			description: 'Jaffa are humans from a warrior society created by the Goa´uld to serve as their warriors. Now free from the Goa´uld...',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'human' ],
			},
		},
		{
			id: 'archetype:started_as_goauld',
			description: 'Powerful parasitic life-from, once the dominant spcy of the Milky Way, the Goa´uld where driven out by a coalition led by the Tau´ri...',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'goauld' ],
			},
		},
		{
			id: 'archetype:started_as_goauld_from_tokra',
			description: 'description TODO',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'goauld' ],
			},
		},
		{
			id: 'archetype:started_as_wraith',
			description: 'description TODO',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'wraith' ],
			},
		},
		{
			id: 'archetype:started_as_ancient',
			description: 'description TODO',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'ancient' ],
			},
		},
		{
			id: 'archetype:started_as_asgard',
			description: 'description TODO',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				prestige_required: true, // can only be chosen when the player has achieved a sufficient knowledge of the game
				forms: [ 'asgard' ],
			},
		},
		{
			id: 'archetype:started_as_replicator',
			description: 'description TODO',
			choice_infos: {
				coming_soon: true, // not implemented yet ;)
				forms: [ 'replicator' ],
			},
		},

		// sex
		{
			id: 'archetype:sexued',
			hidden: true,
			implication_type: 'one of',
			implied_archetypes: [
				'archetype:female',
				'archetype:male',
			]
		},
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
			id: 'archetype:human',
			description: 'description TODO',
			implied_archetypes: [
				'archetype:sexued',
			]
		},
		{
			id: 'archetype:ancient_human',
			description: 'description TODO',
		},
		{
			id: 'archetype:ascended',
			description: 'description TODO',
		},

		// tauri classes
		{
			id: 'archetype:tauri_specialized',
			description: 'Soldier description TODO',
			implication_type: 'one of',
			implied_archetypes: [
				'archetype:tauri_fighter',
				'archetype:tauri_scientist',
				'archetype:tauri_diplomat',
				'archetype:tauri_medic',
			]
		},
		{
			id: 'archetype:tauri_fighter',
			description: 'Soldier description TODO',
		},
		{
			id: 'archetype:tauri_scientist',
			description: 'Scientist description TODO',
		},
		{
			id: 'archetype:tauri_diplomat',
			description: 'Diplomat description TODO',
		},
		{
			id: 'archetype:tauri_medic',
			description: 'Medic description TODO',
		},

	];
}); // requirejs module
