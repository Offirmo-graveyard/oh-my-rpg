/** Implementation of Backbone.Model.sync() from static data.
 * Backbone object must have a _static_data property to fetch from
 * NOTE : this sync() only allows fetch, of course.
 * NOTE : this sync() uses uniformized API and always returns a promise.
 * @see sync_api_uniformization_mixin
 */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(
[
	'underscore',
	'backbone',
	'when',
	'base-objects/backbone/sync_api_uniformization_mixin'
],
function(_, Backbone, when, SyncUniformizationMixin) {
	'use strict';

	var methods = {
		sync: function(method, model, options) {
			var deferred = when.defer();

			try {
				var unique_record_id = this.id;
				var data; // temp

				if(method === "read") {
					if(typeof unique_record_id === 'undefined')
						throw new Error("sync() to static : can't fetch without id !");

					data = _.findWhere(model._static_data, {id: unique_record_id});

					// apply fetched data
					if(typeof data === 'undefined') {
						// not found
						var err = new Error("sync() to static : read : record not found !");
						err.status = 404; // hint to caller if serving http
						throw err;
					}
					else if(typeof data !== 'object') {
						// WAT ?
						throw new Error("sync() to static : read : internal error ?");
					}
					else {
						// it worked.
						// we can't just overwrite, we must clear all attrs first (to suppress added one)
						model.clear();
						// now we can set
						model.set(data);
						// all in sync
						model.declare_in_sync && model.declare_in_sync();
						deferred.resolve( model.attributes );
					}
				}
				else if(method === "create") {
					// forbidden : static data
					throw new Error("sync() to static : create unavailable !");
				}
				else if(method === "update") {
					// forbidden : static data
					throw new Error("sync() to static : create unavailable !");
				}
				else {
					// uh ?
					throw new Error("sync() to static : unrecognized method !");
				}
			}
			catch(e) {
				deferred.reject( e );
			}

			return deferred.promise;
		}
	};

	/////// Final ///////
	var SyncToStaticDataMixin = {
		// "class" methods
		mixin: function(prototype) {

			// check if given param is really a prototype (common error)
			if(!prototype.hasOwnProperty('constructor'))
				throw new Error("Backbone sync() to store mixin() must be passed a prototype !");

			// check if this object was already mixed ?
			// TODO

			// add other functions
			_.extend(prototype, methods);
		},
		// set static data on the model prototype, making it effective for all instances
		set_model_static_data: function(prototype, static_data) {

			// check if given param is really a prototype (common error)
			if(!prototype.hasOwnProperty('constructor'))
				throw new Error("Backbone sync() to static set_model_static_data() must be passed a prototype !");

			// set the global store
			prototype._static_data = static_data;
		}
	};

	return SyncToStaticDataMixin;
}); // requirejs module
