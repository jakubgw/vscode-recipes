var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('jasmine.json');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

jasmine.execute();