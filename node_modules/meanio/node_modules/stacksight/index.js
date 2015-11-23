'use strict';


var os = require('os');
var request = require('request');
var stackSight;
var tried = false;


function StackSight(options) {
    var options = options || {};
    var allow = options.user && options.appId ? true : false;
    this.user = options.user || this.user;
    this.appId = options.appId || this.appId;
    this.app = options.app || this.app;
    this.allow = options.allow || allow;
}

StackSight.prototype.index = function(data) {

    if (!this.allow || !data.eIndex || !data.eType) return;

    data.token = this.user;
    data.created = new Date();
    data.appId = this.appId;
    data.loadavg = (os.loadavg()[0] / os.cpus().length);
    data.memory = (os.totalmem() - os.freemem()) / os.totalmem();
    data.session = this.session.name;
    data.env = process.env.NODE_ENV || 'development';

    var uri = 'https://api.stacksight.io/v0.1/index/' + data.eIndex + '/' + data.eType;
    uri += (data.eId) ? ('/' + data.eId) : '';

    var mapiOpt = {
        uri: uri,
        method: 'POST',
        form: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    delete mapiOpt.form.eIndex;
    delete mapiOpt.form.eType;

    request(mapiOpt, function(error, response, body) {});

};


module.exports = function(options) {

    if (!stackSight) {
        stackSight = new StackSight(options);
        (require('./core_modules/events')(StackSight, stackSight));
        (require('./core_modules/console')(stackSight));
        (require('./core_modules/sessions')(StackSight, stackSight));
    
        if (stackSight.app)
            (require('./core_modules/requests')(stackSight));
    }

    return stackSight;
};

