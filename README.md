# events-management-service
Events management service exposes APIs to book / schedule an event / show
1. Create event
2. Cancel event
3. Modify event
4. Retrieve events

routes.js file contains the list of REST endpoints
Front-end UI / mobile apps can consume the exposed backend endpoints from this micro-service

# Pre-requisite
1. Mongo DB backend
2. npm packages - express, mongoose, cors

# To run the application
1. Clone the git repository
2. Install npm packages - express, mongoose, cors
3. Run 'node server.js' from command prompt
4. View application endpoint at localhost:8080

App is verified locally, yet to be deployed & tested on cloud environment

# Tech stack
Express, Mongo DB, Mongoose