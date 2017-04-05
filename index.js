var getUrls = require('get-urls'),
    fs = require('fs'),
    extractor = require('unfluff'),
    request = require('request');

module.exports = {
    list: function(_fv) {
        request.get('https://download.openvz.org/template/precreated/', function(err, response) {
            if (err) throw err;
            var files = extractor(response.body).links.filter(function(l) {
                return l.text.match(/.tar.gz$/);
            }).map(function(r) {
                return r.href.split('.tar.gz')[0];
            });
            _fv(err, files);
        });
    },

};
