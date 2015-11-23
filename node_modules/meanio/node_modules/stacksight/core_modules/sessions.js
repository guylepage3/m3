'use strict';

var sh = require("shorthash");
var getRepoInfo = require('git-repo-info');
var os = require('os');

module.exports = function(StackSight, sts) {

    function Session(name) {
        this.name = sh.unique(name);
    };


    Session.prototype.up = function() {

        var gitInfo = getRepoInfo();

        sts.index({
            eIndex: 'sessions',
            eType: 'session',
            eId: this.name,
            action: 'up',
            up: new Date(),
            git: gitInfo,
            platform: os.platform(),
            hostname: os.hostname(),
            architecture: os.arch()
        });
    };

    Session.prototype.down = function(options, err) {

        setTimeout(function() {
            if (options.cleanup) console.log('clean');
            if (options.test) console.log('TEST');
            if (err) console.log(err.stack);
            if (options.exit) process.exit();
        }, 100);
    };

    var pname = Date.now() + '-' + sts.user + '-' + process.pid;

    StackSight.prototype.session = new Session(pname);

    // process.on('exit', sts.sessions.down.bind(sts.sessions, {cleanup:true}));
    // process.on('error', sts.sessions.down.bind(sts.sessions, {cleanup:true}));
     //catches uncaught exceptions
    // process.on('uncaughtException', sts.sessions.down.bind(sts.sessions, {exit:true}));
    //catches ctrl+c event
    // process.on('SIGINT', sts.sessions.down.bind(sts.sessions, {exit:true}));
    // process.on('beforeExit', sts.sessions.down.bind(sts.sessions, {'beforeExit':true}));

    // process.on('SIGKILL', sts.sessions.down.bind(sts.sessions, {'SIGKILL':true}));

    //killed event
    // process.on('SIGHUP', exitHandler.bind(null, {exit:true}));
};