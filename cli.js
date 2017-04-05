#!/usr/bin/env node
var Templates = require('./');

Templates.list(function(err, templates){
	if(err)throw err;
	console.log(templates.join('\n'));
});
