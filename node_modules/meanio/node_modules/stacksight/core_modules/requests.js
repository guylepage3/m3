'use strict';

module.exports = function(sts) {

	var options = {
		skip: function(req, res) {

			 var data = {
                eIndex: 'logs',
                eType: 'log',
                method: req.method,
                content: req.originalUrl,
                status: res.statusCode,
                type: 'request'
            };

            sts.index(data);
            return true;
		}
	};

  	sts.app.use(require('morgan')('dev', options));
};