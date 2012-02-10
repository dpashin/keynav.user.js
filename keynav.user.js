// ==UserScript==
// @name           keynav
// @namespace      dpashin
// @description    Use Ctrl-Left and Ctrl-Right instead of mouse to switch prev or next page. Add your own config using jquery selectors.
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @include        *
// ==/UserScript==

$(function() {
    var config = [

    {
        location: /google\.ru/,
        prev: $('#pnprev').attr('href'),
        next: $('#pnnext').attr('href')
    },
    {
        location: /joby\.su/,
        prev: $('.step-links a:contains("предыдущая")').attr('href'),
        next: $('.step-links a:contains("следующая")').attr('href')
    }
    ];

    log('start cycle');

    for(var i = 0; i < config.length; i++) {
        if (config[i].location.exec(document.location)) {
            log('url found');
            setHandler(config[i]);
            log('handler installed');
            break;
        }
    }
    log('setup done');

    function log(s){};
    // function log(s){console.log(s)};
    function setHandler(cfg) {
        log('set handler');
        $(window).keydown(function(e) {
			log('key down');
			log(e);
			log(cfg);
            if (e.ctrlKey && e.keyCode == 37 && cfg.prev) {
                log('prev clicked');
                log(cfg);
                top.location.href = cfg.prev;
            }
            if (e.ctrlKey && e.keyCode == 39 && cfg.next) {
                log('next clicked');
                log(cfg);
                top.location.href = cfg.next;
            }
        });
		log('set handler done');
    };
});