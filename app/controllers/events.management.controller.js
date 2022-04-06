//Initialize dependencies
const db = require("../models");

//Initialize Mongo collections
const EventsManager = db.eventsManager;

//----------------- Operations for Events Management ------------------//

//Create & save an event
exports.create = (req, res) => {
	
	console.log(req.body);
	//Validate request
	if(!req.body || req.body.eventName == "" || req.body.eventName == null) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}
	
	//create events management object
	const eventsManager = new EventsManager({
		eventName: req.body.eventName,
		eventType: req.body.eventType,
		description: req.body.description,
		place: req.body.place,
		capacity: req.body.capacity,
		eventDate: req.body.eventDate
	});
	
	//validate date if greater than or equal to today's date
	var currentDate = new Date();
	var eventDate = new Date(req.body.eventDate);
	
	if (eventDate < currentDate) {
		res.status(400)
			.send({ message: "event schedule date must be greater than today's date !" });
		return;
	}
	
	//save event into mongo collection
	eventsManager
		.save(eventsManager)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "error during an event save"
			});
		});
};

//Retrieve all events from Mongo DB
exports.findAll = (req, res) => {
	
	EventsManager.find()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "error while getting all existing events"
			});
		});
};

//Find existing events by id
exports.findOne = (req, res) => {
	
	const eventId = req.params.id;
	EventsManager.findById(eventId)
		.then(data => {
			if(!data)
				res.status(404).send({ message: "No events found with id: " + eventId });
			else
				res.send(data);
		})
		.catch(err => {
			res.status(500).send({ message: "error finding an event with id: " + eventId });
		});
};

//Find an existing event by event name
exports.findByEventName = (req, res) => {
	
	const eventName = req.query.eventName;
	console.log("inside find by event name: " + eventName);
	
	EventsManager.findOne({ eventName: eventName })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Error occurred retrieve existing event by event name"
			});
		});
};


//Update event by id
exports.update = (req, res) => {
	
	if(!req.body) {
		return res.status(400).send({ message: "data for update cannot be empty!" });
	}
	
	const eventId = req.params.id;
	
	EventsManager.findByIdAndUpdate(eventId, req.body, { useFindAndModify: false })
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot update an event with id=$eventId. No matching event found..!!`
				});
			} else {
				res.send({ message: "Event updated successfully..!!!"});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error updating an event with id = " + eventId
			});
		});
};

//Delete Event by id
exports.delete = (req, res) => {
	
	const eventId = req.params.id;
	
	EventsManager.findByIdAndRemove(eventId)
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot delete an event with id=$eventId. Record not found..!!`
				});
			} else {
				res.send({ message: "Event deleted successfully...!!!" });
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error deleting an event with id = " + eventId
			});
		});
};

//Delete all events
exports.deleteAll = (req, res) => {
	
	EventsManager.deleteMany({})
		.then(data => {
			res.send({ message: `${data.deletedCount} all events deleted successfully!` });
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Error while deleting all events"
			});
		});
};
