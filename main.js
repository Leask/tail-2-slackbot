var Tail    = require('tail').Tail,
    request = require('request'),
    config  = require('./config');

var url = 'https://' + config.orgdomain + '.slack.com/services/hooks/slackbot'
        + '?token='      + config.token
        + '&channel=%23' + config.channel;

var log = function(data) {
    console.log(new Date().toString() + ': ' + data);
};

var public = function(logfile, data) {
    if (!data || data.length <= 0) {
        return;
    }
    request({
        url    : url,
        method : 'POST',
        body   : logfile + '> ' + data
    }, function(error, response, body) {
        log(error ? error : body);
    });
};

config.logfiles.forEach(function(item) {
    var tail = new Tail(item);
    tail.on('line', function(data) {
        public(item, data);
    });
    tail.on('error', log);
});
