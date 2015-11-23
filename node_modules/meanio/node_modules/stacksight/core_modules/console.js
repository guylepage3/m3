var fs = require('fs');


module.exports = function(sts) {

    function writeErrorLog(text) {
        fs.appendFile(process.cwd() + '/logs/error.log', text, function() {});
    }

    ['log', 'warn', 'error', 'info', 'dir'].forEach(function(method) {
        var oldMethod = console[method].bind(console);
        console[method] = function() {
            var text = '';
           for (var index in arguments) {
                if (typeof(arguments[index]) === 'string' && arguments[index].indexOf('%') === 0) continue;
                text +=  ((method === 'dir') ? JSON.stringify(arguments[index]) : (arguments[index]) ? arguments[index] : '') + ' ';
           }
           if (arguments[0] === '%s: %dms') text += 'ms';
           
            sts.index({
                eIndex: 'logs',
                eType: 'log',
                method: method,
                content: text,
                type: 'console'
            });

            writeErrorLog('\n' + [new Date().toISOString()] + ' ' + text);
            oldMethod.apply(console, arguments);
        };
    });
}