//Update routes for events management service

module.exports = app =>  {
	
	//initialize router
	var router = require("express").Router();
	
	const eventsManager = require("../controllers/events.management.controller.js");

	//------------------------------------------------
	//create event
	router.post("/event", eventsManager.create);
	
	//retrieve all events
	router.get("/events", eventsManager.findAll);
	
	//retrieve single event with id
	router.get("/event/:id", eventsManager.findOne);

	//retrieve single event by event name
	router.get("/eventByName", eventsManager.findByEventName);
	
	//update event by id
	router.put("/event/:id", eventsManager.update);
	
	//delete event by id
	router.delete("/event/:id", eventsManager.delete);
	
	//delete all events
	router.delete("/events", eventsManager.deleteAll);

	//------------------------------------------------
	//register endpoint
	app.use('/api', router);
};