/** A character archetype, i.e. a part of what he "is".
 * Archetypes are ususally a part of the identity of the character, and are not removable
 * - examples : human, african, 2m-tall, born-on-earth, geek, etc.
 * - they are not skills
 * - they are not ranks
 * - they can be parameterized. Example "skin color" TOREVIEW
 * - they may be related to each other. Example :
 *   - implication : "terran" automatically implies "human", but not necessarily the opposite
 *   - reflexive implication: the reverse-implication is also true
 *
 */
'use strict';

define([
	'underscore',
	'when',
	'extended_exceptions',
	'common/utils/base_model',
	'common/utils/sync_to_static_data_mixin',
	'common/config/data/archetypes'
], function(_, when, EE, BaseModel, SyncFromStaticMixin, static_data) {

	var DefinedModel = BaseModel.extend();
	SyncFromStaticMixin.mixin(DefinedModel.prototype);
	SyncFromStaticMixin.set_model_static_data(DefinedModel.prototype, static_data);

	// When the user must choose archetypes.
	// additional property : .step
	DefinedModel.add_exception(DefinedModel.prototype, EE.create_custom_error('MissingChoice', BaseModel.exceptions.ImpossibleAction));

	BaseModel.add_defaults(DefinedModel.prototype, function() {
		return {
			description: 'TODO', // displayed in the interface
			hidden: false, // not to be shown/known to the player, ex. for internal game mechanics only
			implied_archetypes: [], // this archetype implies automatic attribution of all those other archetypes
			                        // element can be an array, in which case it's "one of", which must be attributed somewhere else
			choice_infos: undefined, // related to character creation, defined only if needed
			// .coming_soon: true, // prevent selection of this archetype in character selection
			// .prestige_required: N // can only be chosen when the player has achieved a sufficient knowledge of the game
		};
	});

	// validate if this or the given archetype is a valid choice for this player
	// Promise resolved with the archetype itself
	// or rejected with a meaningful error
	DefinedModel.prototype.ensure_choosable = function(optional_context) {
		var choice_infos = this.get('choice_infos') || {};

		if(choice_infos.coming_soon)
			return when.reject(new EE.NotImplemented());

		if(choice_infos.prestige_required) {
			// TODO check prestige against current context
			// TODO indicate required prestige
			return when.reject(new this.exceptions.NotEnoughPrestige());
		}

		return when.resolve(this);
	};

	// for an archetype with "implied one of",
	// returns a list of archetype ids
	// or throw if not applicable
	DefinedModel.prototype.fetch_choices = function() {
		if(this.get('implication_type') !== 'one of')
			throw new EE.InvalidArgument('Archetype is not of choice type !');
		return this.get('implied_archetypes');
	};

	// ensure possible choice for this archetype
	// Only check amongst possible choices,
	// doesn't check runtime permissions (prestige, implemented, etc.)
	// @see ensure_choosable
	DefinedModel.prototype.is_one_of_possible_implied = function(attempted_choice) {
		var implied_choices = this.fetch_choices();
		return _.contains(implied_choices, this.get_id(attempted_choice));
	};

	// assert and validate archetype choices.
	// Note :
	// Promise resolved with :
	//   {
	//     done: true/false if no further choices needed
	//     archetype_to_resolve: id if an archetype choice must still be made
	//  }
	// Promise rejected with Error :
	//   - with additional property 'step' corresponding to the wrong index
	DefinedModel.prototype.assert_archetype_choices_then_compute_next_step = function(context, archetypes_proposed, choice_mades) {
		debugger;
		var res = when.defer();

		if(! archetypes_proposed.length)
			throw new EE.InvalidArgument('no initial choices given !');

		// TODO explore when.reduce
		try {
			var index = 0;
			var exit = false;
			while(! exit) {
				if(! choice_mades[index]) {
					// let's chose this one first
					var e = new this.exceptions.MissingChoice();
					e.step = index;
					throw e;
				}

				// a choice was made.
				// We must :
				// 1) check its validity
				// 2) see if further choices are needed
				when.all([
					this.resolve_if_needed(archetypes_proposed[index]),
					this.resolve_if_needed(choice_mades[index]),
				])
				.then(function(res) {
					var archetype_proposed = archetypes_proposed[index] = res[0]; // cache
					var choice_made = choice_mades[index] = res[1]; // cache

					if(! archetype_proposed.is_one_of_possible_implied(choice_made) {
						// impossible ?
						var e = new this.exceptions.GameRulesWouldNotBeRespected();
						e.step = index;
						throw e;
					}

					return choice_made.ensure_choosable(context);
				})
				.catch(function(error) {
					res.reject(error);
					exit = true;
				});

				index++;
				exit = exit || (index >= archetypes_proposed.length);
			}

			xxx
		}
		catch(e) {
			res.reject(e);
		}

		return res.promise;
	};




	// validate if this or the given archetype is a valid choice for this player
	DefinedModel.prototype.validate_choice_in_character_creation = function(context, optional_archetype_to_test) {
		var arch_to_test = optional_archetype_to_test || this;

		return false; // TODO
	};

	// validate if this or the given archetype is a valid choice for this player
	DefinedModel.prototype.validate_choice_in_character_creation = function(context, optional_archetype_to_test) {
		var arch_to_test = optional_archetype_to_test || this;

		return false; // TODO
	};


	// returns the related archetypes implied by this one
	DefinedModel.prototype.get_implied_archetypes = function(archetype) {
		debugger;

		archetype = this.fetch_if_needed( archetype );
		return archetype.get('archetypes');

		return false; // TODO
	};

	return DefinedModel;
});
