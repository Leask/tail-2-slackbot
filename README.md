# tail-2-slackbot
`tail -f` the log files and send all the new lines to any public channel as Slackbot.

## Installation

	    $ git clone https://github.com/Leask/tail-2-slackbot.git
	    $ cd tail-2-slackbot
	    $ npm install
	    $ cp config.sample.js config.js

## Usage

1. Go to Slack integrations configuration page in your browser:

	`https://[org domain].slack.com/services/new`

1. Add a new `Slackbot`, you will see a url like this one:

    `https://[org domain].slack.com/services/hooks/slackbot?token=[token]`

1. Edit the `config.js` with the informations(`org-domain` & `token`) above.
1. Remember to set the Slack `channel` in `config.js`.
1. Add the log files you want to watch into `logfiles` list in `config.js`.
1. Run the `tail-2-slackbot` daemon:

	`$ node main`
	
## Getting help

Email / iMessage / Hangouts: i@leaskh.com
