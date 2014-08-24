'use strict';

define([
	'underscore',
	'when',
	'extended-exceptions',
	'base-objects/backbone/base_model',
], function(_, when, EE, BaseModel) {

	var DefinedModel = BaseModel.extend();

	// When the USER asks for something not allowed under the game rules/mechanics.
	// Note : should be used and thrown in test functions only,
	// used BEFORE the user actually makes the action,
	// precisely to forbid him to do it.
	// Should not happen on server, since client should have validated everything. (unless bug or cheating)
	var ImpossibleAction = DefinedModel.add_exception(DefinedModel.prototype, EE.create_custom_error('ImpossibleAction', EE.RuntimeError));
	DefinedModel.add_exception(DefinedModel.prototype, EE.create_custom_error('GameRulesWouldNotBeRespected', ImpossibleAction));
	DefinedModel.add_exception(DefinedModel.prototype, EE.create_custom_error('NotEnoughPrestige', ImpossibleAction));

	// a automatic fetch function
	// which does nothing if given a full Backbone object,
	// and fetch it if given an id
	// Promise resolved with the full Model Instance.
	DefinedModel.prototype.resolve_if_needed = function(id_or_BBObject, optional_model) {
		debugger;
		var Model = optional_model || this;

		if(typeof id_or_BBObject === 'string') {
			// it's an id, fetch full object
			var obj = new Model({id: id_or_BBObject});
			return obj.fetch().then(function() { return obj; }); // TODO when.yield ?
		}

		if(id_or_BBObject instanceof BaseModel) {
			// already fetched
			return when.resolve(id_or_BBObject);
		}

		// neither a string or a correct object ?
		// Illegal call ! (direct throw since coding error)
		throw new EE.InvalidArgument('Illegal attempt to fetch a non-OhMyRPG id/Model !');
	};

	// opposite function, simpler
	DefinedModel.prototype.get_id = function(id_or_BBObject) {
		if(typeof id_or_BBObject === 'string') {
			// it's an id
			return id_or_BBObject;
		}

		if(id_or_BBObject instanceof BaseModel) {
			// it's an Oh My RPG Model
			return id_or_BBObject.id;
		}

		// neither a string or a correct object ?
		// Illegal call ! (direct throw since coding error)
		throw new EE.InvalidArgument('Illegal attempt to get id from a non-OhMyRPG id/Model !');
	};

	return DefinedModel;
});
