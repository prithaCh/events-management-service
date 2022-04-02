# events-management-service

## Description

Events management service exposes APIs to book / schedule an event / show:

1. Create event
2. Cancel event
3. Modify event
4. Retrieve events

`routes.js` file contains the list of REST endpoints
Front-end UI / mobile apps can consume the exposed backend endpoints from this micro-service

---

## Pre-requisite

1. Mongo DB backend
2. npm packages - express, mongoose, cors

---

## To run the application

1. Clone the git repository
`git clone <https/ssh>:raghavendrarao4/events-management-service.git`
2. Install npm packages - express, mongoose, cors
Run `npm install`
3. Run `node server.js` from command prompt
4. View application endpoint at http://localhost:8080

---

## Build docker image and run locally

1. Run `docker build . -t <user-name>/events-management-service`

2. Run `docker run -p 8080:8080 -d <user-name>/events-management-service`

3. Verify the application on http://localhost:8080/

Note: Replace `<user-name>` with your desired value.

---

## Run booking-service docker container from DockerHub

1. Start your docker server (docker desktop or minikube)
2. Pull the booking-service docker image from [DockerHub](https://hub.docker.com/repository/docker/pranab698/events-management-service/tags?page=1&ordering=last_updated) \
`docker pull pranab698/events-management-service:latest`

3. Run \
`docker run -p 8080:8080 -d pranab698/events-management-service`

4. Verify the application on http://localhost:8080/

---

## Tech stack

- Express
- Mongo DB
- Mongoose

## TODO

- App is verified locally, yet to be deployed & tested on cloud environment