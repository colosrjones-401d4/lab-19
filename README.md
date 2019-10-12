## Lab 19 | Message Queue Server and Logger

### Author: Steven Jones

### Links and Resources
* [repo](https://github.com/)
* [![Build Status](https://travis-ci.org)](https://travis-ci.org/)

#### Documentation
N/A

### Modules
#### `server.js`
* Monitors `save` and `error` events in the `files` namespace.
* Monitors `create`, `read`, `update`, and `delete` events in the `database` namespace.

#### `logger.js`
* Subscribes to and logs `save` and `error` events in the `files` namespace.
* Subscribes to and logs `create`, `read`, `update`, and `delete` events in the `database` namespace.

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `node server`, then
* `node logger`

#### Tests
N/A

#### UML
N/A