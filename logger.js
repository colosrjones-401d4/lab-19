'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');
const files = new Q('files');

// Subscribe to `db` events
db.subscribe('create', payload => console.log('create in `db`:', payload));

db.subscribe('read', payload => console.log('read in `db`:', payload));

db.subscribe('update', payload => console.log('update in `db`:', payload));

db.subscribe('delete', payload => console.log('delete in `db`:', payload));

db.subscribe('error', payload => console.log('error in `db`:', payload));

// Subscribe to `files` events
files.subscribe('save', payload => console.log('save in `files`:', payload));
files.subscribe('error', payload => console.log('error in `files`:', payload));

// See all subscriptions
console.log(db.subscriptions());
console.log(files.subscriptions());
