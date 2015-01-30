var Tail    = require('tail').Tail,
    request = require('request'),
    config  = require('./config');

var url = 'https://racoonhack.slack.com/services/hooks/slackbot'
        + '?token='      + config.token
        + '&channel=%23' + config.channel;

var log = function(data) {
    console.log(new Date().toString() + ': ' + data);
};

var public = function(data) {
    if (!data || data.length <= 0) {
        return;
    }
    request({
        url    : url,
        method : 'POST',
        body   : data
    }, function(error, response, body) {
        log(error ? error : body);
    });
};

var tail = new Tail(config.logfile);
tail.on('line', public);
tail.on('error', log);
