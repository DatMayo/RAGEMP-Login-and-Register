/* global mp */

const fs = require('fs');
const path = require('path');

fs.readdirSync(path.resolve(__dirname, 'events')).forEach(file =>
{
	mp.events.add(require('./events/' + file));
});

fs.readdirSync(path.resolve(__dirname, 'commands')).forEach(file =>
{
	mp.events.addCommand(require('./commands/' + file));
});