var mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose);

//Define Events Management model
module.exports = mongoose => {
	
	var template = mongoose.Schema( {
			eventName: String,
			eventType: {type: String, enum: ['movie', 'dance', 'comedy', 'concert', 'conference', 'adventure', 'plays', 'sports']},
			description: String,
			place: {type: String, enum: ['chennai', 'bangalore', 'mumbai', 'kolkata', 'delhi', 'pune']},
			capacity: {type: Number, min:50, max: 200},
			eventDate: { type: DateOnly,
				//validate date if greater than or equal to today's date
				validate: function(input) {
					return new Date(input) >= new Date()
				},
				message: input => `${input} must be greater than or equal to the current date!`
			}
		},
		{ timeStamps: true }
	);
	
	template.method("toJSON", function() {
		const { _v, _id, ...object } = this.toObject();
		object.id = _id;
		object.version = _v;
		return object;
	});
	
	const EventsManager = mongoose.model("eventsManager", template);
	return EventsManager;
};