/* global mp */

const fg = require('fast-glob');

fg.sync('**/*.js', { onlyFiles: false, deep: 2, cwd: 'packages/demoproject/events' }).forEach(file =>
{
	mp.events.add(require(`./events/${file}`));
});

fg.sync('**/*.js', { onlyFiles: false, deep: 2, cwd: 'packages/demoproject/commands' }).forEach(file =>
{
	mp.events.addCommand(require('./commands/' + file));
});